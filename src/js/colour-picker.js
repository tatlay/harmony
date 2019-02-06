((d, w) => {
  console.log("Coming through loud and clear!");
  let square = d.getElementById( "picker" );

  let rangeHue = d.getElementById( "hue" );
  let rangeSat = d.getElementById( "sat" );
  let rangeLight = d.getElementById( "light" );

  let setPicker = ( ( hue, sat, light ) => {
    console.log(`Setting:  hsl(${hue} ${sat}% ${light}%)` );
    square.style.backgroundColor = `hsl(${hue} ${sat}% ${light}%)`;
  } );

  let hue = rangeHue.value;
  let sat = rangeSat.value;
  let light = rangeLight.value;

  setPicker( hue, sat, light );

  rangeHue.addEventListener( "input", () => {
    hue = rangeHue.value;
    setPicker( hue, sat, light );
  } )

  rangeSat.addEventListener( "input", () => {
    sat = rangeSat.value;
    setPicker( hue, sat, light );
  } )

  rangeLight.addEventListener( "input", () => {
    light = rangeLight.value;
    setPicker( hue, sat, light );
  } )

})(document, window);