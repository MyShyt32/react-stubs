
export default function Preview( component ) {
  const scale = 0.5;
  // const ele = document.body.children[0]
  // const rect = ele.getBoundingClientRect()
  // console.log(ele.children[0].getBoundingClientRect().right)
  const style = {
    transform: `scale(${scale})`,
    transformOrigin: "top left",
    width: `${100 / scale}%`,
    height: `${100 / scale}%`,
  };

  
  return <div id="preview" style={style}>{component.children}</div>;
}
