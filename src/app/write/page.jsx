'use client';

import Image from 'next/image';
import styles from './writePage.module.css';
import { useEffect, useState } from 'react';
import 'react-quill/dist/quill.bubble.css';
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

import categoryConfig from '@/config/categoryConfig';
import Plus from '@/components/Icons/Plus';
import ImageIcon from '@/components/Icons/ImageIcon';
import ExternalIcon from '@/components/Icons/External';
import VideoIcon from '@/components/Icons/Video';
import { ICON_SIZE } from '@/constants';

const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState('');
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const [catSlug, setCatSlug] = useState('');

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

  if (status === 'loading') {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === 'unauthenticated') {
    router.push('/');
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
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || 'style', //If not selected, choose the general category
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
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        className={styles.select}
        onChange={(e) => setCatSlug(e.target.value)}
      >
        {categoryConfig &&
          categoryConfig.map(({ shortName, title }) => (
            <option value={shortName} key={shortName}>
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
            <button className={styles.addButton}>
              <ExternalIcon squared={ICON_SIZE} />
            </button>
            <button className={styles.addButton}>
              <VideoIcon squared={ICON_SIZE} />
            </button>
          </section>
        )}
        <ReactQuill
          className={styles.textArea}
          theme='bubble'
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
      </section>
      <button className={styles.publish} onClick={handleSubmit}>
        Publish
      </button>
    </section>
  );
};

export default WritePage;
