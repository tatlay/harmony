((d, w) => {
  console.log("Coming through loud and clear!");
  let square = d.getElementById( "picker" );
  let area = d.getElementById( "colourArea" );

  let rangeHue = d.getElementById( "hue" );
  let rangeSat = d.getElementById( "sat" );
  let rangeLight = d.getElementById( "light" );

  let compColour1 = d.getElementById( "compColour1" );
  let compColour2 = d.getElementById( "compColour2" );
  let compColour3 = d.getElementById( "compColour3" );
  let compColour4 = d.getElementById( "compColour4" );

  // ----------------------------------------
  //      Harmony calculations
  // ----------------------------------------
  let calcComps = ( ( hue, sat, light ) => {
    // let baseComp = ( hue + 180 - 360, sat, light );
    hue+=180;
    compColour1.style.backgroundColor = `hsl(${hue} ${sat}% ${light}%)`;
  });

  let createHarmonies = ( ( hue, sat, light ) => {
    calcComps( hue, sat, light );
  });

  let setPicker = ( ( hue, sat, light ) => {
    // console.log(`Setting:  hsl(${hue} ${sat}% ${light}%)` );
    square.style.backgroundColor = `hsl(${hue} ${sat}% ${light}%)`;
    area.style.backgroundColor = `hsl(${hue} ${sat}% ${light}%)`;
    createHarmonies( hue, sat, light );
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