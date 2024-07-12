'use client';

import styles from './writePage.module.css';
import { useEffect, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import { app } from '@/utils/firebase';
import ReactQuill from 'react-quill';

import Plus from '@/components/Icons/Plus';
import ImageIcon from '@/components/Icons/ImageIcon';
import ExternalIcon from '@/components/Icons/External';
import VideoIcon from '@/components/Icons/Video';
import { ICON_SIZE } from '@/constants';
import { getData } from '@/utils/helpers';

const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState('');
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [catSlug, setCatSlug] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  useEffect(() => {
    const collectCategories = async () => {
      const categories = await getData('categories');
      return categories;
    };
    collectCategories().then((data) => setCategories(data));
  }, []);

  if (status === 'loading') {
    return <span className={styles.loading}>Loading...</span>;
  }

  if (status === 'unauthenticated') {
    router.push('/');
    return null;
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');

  const handleSubmit = async () => {
    const res = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        subtitle,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || 'career', //If not selected, choose the general category
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };

  return (
    <section className={styles.container}>
      <input
        type='text'
        placeholder='Title'
        className={`${styles.title} ${styles.input}`}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type='text'
        placeholder='Subtitle'
        className={`${styles.subtitle} ${styles.input}`}
        onChange={(e) => setSubtitle(e.target.value)}
      />
      <select
        className={styles.select}
        onChange={(e) => setCatSlug(e.target.value)}
      >
        {categories?.map(({ title, id, slug }) => (
          <option value={slug} key={id}>
            {title}
          </option>
        ))}
      </select>
      <section className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Plus />
        </button>
        {open && (
          <section className={styles.add}>
            <input
              type='file'
              id='image'
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: 'none' }}
            />
            <button className={styles.addButton}>
              <label htmlFor='image'>
                <ImageIcon squared={ICON_SIZE} />
              </label>
            </button>
            <button className={styles.addButton} disabled>
              <ExternalIcon squared={ICON_SIZE} />
            </button>
            <button className={styles.addButton} disabled>
              <VideoIcon squared={ICON_SIZE} />
            </button>
          </section>
        )}
        {typeof window !== 'undefined' ? (
          <ReactQuill
            className={styles.textArea}
            theme='snow'
            value={value}
            onChange={setValue}
            placeholder='Tell your story...'
            modules={{
              history: {
                // Enable with custom configurations
                delay: 2500,
                userOnly: true,
              },
            }}
          />
        ) : null}
      </section>
      <button className={styles.publish} onClick={handleSubmit}>
        Publish
      </button>
    </section>
  );
};

export default WritePage;
