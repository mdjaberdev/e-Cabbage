const Button = ({ btnTxt, className, ...rest }) => {
  return (
    <button
      {...rest}
      className={`py-4 px-8 bg-[#80B500] text-white text-base font-Nunito cursor-pointer ${className}`}
    >
      {btnTxt}
    </button>
  );
};

export default Button;
