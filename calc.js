function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    let input = document.querySelector(".input2");
    input.value = Math.floor(((valNum-32) / 1.8) * 100) / 100;
    if (input.value > 50) {
      input.value = 50
    } 
    else if (input.value < -80){
      input.value = -80
    }
    let elem = document.getElementById('inputFahrenheit');
    if (valNum > 122) {
      elem.value = '122';
    }
    else if (valNum < -112) {
      elem.value = '-112'
    }

    // document.getElementById("outputCelsius").innerHTML = Math.floor(((valNum-32) / 1.8) * 100) / 100;

  }

function temperatureConverterCel(valNumCel) {
    valNumCel = parseFloat(valNumCel);
    // document.getElementById("outputFahrenheit").innerHTML = Math.floor(((valNumCel*1.8) + 32) * 100) / 100;
    let input = document.querySelector(".input");
    input.value = Math.floor(((valNumCel * 1.8) + 32) * 100) / 100;
    if (input.value > 122) {
      input.value = 122
    } 
    else if (input.value < -112){
      input.value = -112
    }
    let elem = document.getElementById('inputCelsius');
    if (valNumCel > 50) {
      elem.value = '50';
    }
    else if (valNumCel < -80) {
      elem.value = '-80'
    }
    
  }

function LengthConverter(valNum) {
  // document.getElementById("outputMiles").innerHTML=valNum*0.62137;
  let input = document.querySelector(".input4");
  input.value = Math.floor((valNum*0.62137)*100)/100;
}

function LengthConverterMil(valNum) {
  // document.getElementById("outputKilometers").innerHTML=valNum/0.62137;
  let input = document.querySelector(".input3");
  input.value = Math.floor((valNum/0.62137)*100)/100;
}
// let elem = document.getElementById('myInput');
// elem.onchange = function(e){
//     var value = parseInt(e.target.value);
//     if(!value || value <=-50 || value > 80) {
//         /*Что-то делать.
//           Очищаю поле.
//         */
//         e.target.value = '';
//     }
// }