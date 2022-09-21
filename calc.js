function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    let input = document.getElementById('inputCelsius');
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
  }

function temperatureConverterCel(valNumCel) {
    valNumCel = parseFloat(valNumCel);
    let input = document.getElementById('inputFahrenheit');
    input.value = Math.floor(((valNumCel * 1.8) + 32) * 100) / 100;
    if (input.value > 122) {
      input.value = 122;
      this.alert("Пожалуйста введите температуру в диапазоне от -80 до 50");
    } 
    else if (input.value < -112){
      input.value = -112;
      this.alert("Пожалуйста введите температуру в диапазоне от -80 до 50");
    }
    let elem = document.getElementById('inputCelsius');
    if (valNumCel > 50) {
      elem.value = '50';
    }
    else if (valNumCel < -80) {
      elem.value = '-80';
    }
  }

function LengthConverter(valNum) {
  valNum = parseFloat(valNum);
  let input = document.getElementById('inputMiles');
  input.value = Math.floor((valNum*0.62137)*100)/100;
}

function LengthConverterMil(valNumKm) {
  valNumKm = parseFloat(valNumKm);
  let input = document.getElementById('inputKilometers');
  input.value = Math.floor((valNumKm/0.62137)*100)/100;
}

function AuthorsInfo() {
  this.alert('Разработан студентами группы 19-ВТ-1:\nВасильев Данил\nВоробей Александр\nГригорьев Кирилл')
  }