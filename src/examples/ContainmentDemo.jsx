export default function Center({ children }) {
  const centerTextStyle = {
    textAlign: "center",
    width: "100vw",
  };

  return <div style={centerTextStyle}>{children}</div>;
}
