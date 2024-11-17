const ButtonFilled = ({ bgColor, textColor = "white", text, arrow = true }) => {
  return (
    <button
      className={`bg-${bgColor} text-${textColor} text-base font-medium flex gap-2`}
      style={{
        padding: "10px 20px",
        borderRadius: "30px",
        width: "fit-content",
      }}
    >
      {text}
      {arrow ? <span>&rarr;</span> : null}
    </button>
  );
};

export default ButtonFilled;
