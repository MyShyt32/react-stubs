export default function Preview(component) {
  const scale = 0.5;
  const style = {
    transform: `scale(${scale})`,
    transformOrigin: "top left",
    width: `${100 / scale}%`,
    height: `${100 / scale}%`,
  };
  return <div style={style}>{component.children}</div>;
}
