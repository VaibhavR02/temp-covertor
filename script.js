const calculateTemp = () => {
  const numberTemp = document.getElementById('temp').value;
  //   console.log(numberTemp);
  const tempselect = document.getElementById('temp_diff');
  const value = temp_diff.options[tempselect.selectedIndex].value;

  const celToFah = (cel) => {
    let fahrenheit = Math.round((cel * 9) / 5 + 32);
    return fahrenheit;
  };

  const FahToCel = (fah) => {
    let Celcius = Math.round((fah - 32) / 1.8);
    return Celcius;
  };

  let result;

  if (value == 'cel') {
    result = celToFah(numberTemp);
    document.getElementById(
      'resultContainer'
    ).innerHTML = `${numberTemp} °Celcius = ${result} °Fahrenheit`;
  } else {
    result = FahToCel(numberTemp);
    document.getElementById(
      'resultContainer'
    ).innerHTML = `${numberTemp} °Fahrenheit = ${result} °Celcius`;
  }
};
