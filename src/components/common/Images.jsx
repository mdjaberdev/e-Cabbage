const Images = ({ srcImg, altImg, className }) => {
  return <img src={srcImg} alt={altImg} className={`${className}`} />;
};

export default Images;
