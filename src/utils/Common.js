export const Capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const ImageSrc = (imgPath) => {
  return require(imgPath);
};

// export const SvgIcon = (imgName) => {
//   const SvgIcon = React.lazy(() => import(`@lazsa/common/assets/img/svg/${imgName}`));
//   return <SvgIcon />;
// };
