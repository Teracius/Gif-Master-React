export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=ydyGJcXF61EUflZRaLKDXt2uiN5MzXqP&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  // const data = info;
  // console.log(info);

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  console.log(gifs);
  return gifs;
  // console.log(gifs);
  // console.log(resp);
};
