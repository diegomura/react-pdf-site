export const getUrlParams = search => {
  const hashes = search.slice(search.indexOf('?') + 1).split('&');
  const params = {};

  hashes.map(hash => {
    const [key, val] = hash.split('=');
    params[key] = decodeURIComponent(val);
  });

  return params;
};
