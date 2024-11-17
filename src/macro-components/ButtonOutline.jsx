const ButtonOutline = ({ text, arrow = true }) => {
  return (
    <button
      className={`text-base font-medium flex gap-2`}
      style={{
        padding: "10px 20px",
        border: `1px solid #DF3F44`,
        borderRadius: "30px",
        width: "fit-content",
        color: "#DF3F44",
      }}
    >
      {text}
      {arrow ? <span>&rarr;</span> : null}
    </button>
  );
};

export default ButtonOutline;
