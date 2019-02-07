((d, w) => {
  let square = d.getElementById( "picker" );
  let compArea = d.getElementById( "compColourArea" );
  let monoArea = d.getElementById( "monoColourArea" );
  let splitArea = d.getElementById( "splitCompColourArea" );
  let logousArea = d.getElementById( "logousColourArea" );
  let triadArea = d.getElementById( "triadColourArea" );

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
    compColour1.style.backgroundColor = `hsl(${+hue} ${sat}% ${+light-30}%)`;
    compColour2.style.backgroundColor = `hsl(${+hue} ${+sat-20}% ${light}%)`;
    compColour3.style.backgroundColor = `hsl(${+hue+180} ${sat}% ${+light-30}%)`;
    compColour4.style.backgroundColor = `hsl(${+hue+180} ${sat}% ${light}%)`;
  });

  let calcMonos = ( ( hue, sat, light ) => {
    monoColour1.style.backgroundColor = `hsl(${+hue} ${sat}% ${+light-50}%)`;
    monoColour2.style.backgroundColor = `hsl(${+hue} ${+sat-30}% ${light}%)`;
    monoColour3.style.backgroundColor = `hsl(${+hue} ${sat-30}% ${+light-50}%)`;
    monoColour4.style.backgroundColor = `hsl(${+hue} ${sat}% ${light-20}%)`;
  })

  let createHarmonies = ( ( hue, sat, light ) => {
    calcComps( hue, sat, light );
    calcMonos( hue, sat, light );
  });

  let setPicker = ( ( hue, sat, light ) => {
    square.style.backgroundColor = `hsl(${hue} ${sat}% ${light}%)`;
    compArea.style.backgroundColor = `hsl(${hue} ${sat}% ${light}%)`;
    monoArea.style.backgroundColor = `hsl(${hue} ${sat}% ${light}%)`;
    splitArea.style.backgroundColor = `hsl(${hue} ${sat}% ${light}%)`;
    logousArea.style.backgroundColor = `hsl(${hue} ${sat}% ${light}%)`;
    triadArea .style.backgroundColor = `hsl(${hue} ${sat}% ${light}%)`;
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