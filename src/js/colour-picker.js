((d, w) => {
  let square = d.getElementById( "picker" );

  let rangeRed = d.getElementById( "red" );
  let rangeGreen = d.getElementById( "green" );
  let rangeBlue = d.getElementById( "blue" );

  let setPicker = ( (red, green, blue) => {
    square.style.backgroundColor = `rgb(${red},${green},${blue})`;
  } );

  let red = rangeRed.value;
  let green = rangeGreen.value;
  let blue = rangeBlue.value;

  setPicker( red, green, blue );

  rangeRed.addEventListener( "input", () => {
    red = rangeRed.value;
    setPicker( red, green, blue );
  } )

  rangeGreen.addEventListener( "input", () => {
    green = rangeGreen.value;
    setPicker( red, green, blue );
  } )

  rangeBlue.addEventListener( "input", () => {
    blue = rangeBlue.value;
    setPicker( red, green, blue );
  } )

})(document, window);