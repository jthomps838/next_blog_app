export const getData = async (slug) => {
  const url = `${process.env.URL}/api/${slug}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Error when requesting data from ${url}`);
  }

  return res.json();
};
