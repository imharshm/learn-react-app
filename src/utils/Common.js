export const Capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const ImageSrc = (imgPath) => {
  return require(`../assets/img${imgPath}`);
};
