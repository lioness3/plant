// painter1.paints()
// "Paints green!"
// > painter2.paints()
// "Paints yellow!"
// > painter3.paints()
// "Paints red!"
painter1.paints()
"Paints green!"
> painter2.paints()
"Paints yellow!"
> painter3.paints()
"Paints red!"
const paints = (painter) =>({
  color: (color) => {
    return `Paints ${color}!`
  }
});




const canPaint = (painter) => ({
  color: (color) => {
    return `Paints ${color}!`
  }
});

const paints = (name) => {
  let painter = {
    name
  }
   return { ...painter, ...canPaint(painter)};
   };
   const painter1 = canPaint("green");
   painter1.paints()
// const painter1 = {
//   color1 :"green"
// }
// const painter2 = {
//   color2 :"yellow"
// }
// const painter3 = {
//   color3 :"red"
// }
