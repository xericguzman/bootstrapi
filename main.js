const issaButton = document.querySelector("#issaButton");
issaButton.addEventListener("click", function () {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (rawData) {
      return rawData.json();
    })
    .then(function (moreRawData) {
      //Get img html elemnt
      const dogePic = document.querySelector("#dogePic");
      //Set src att to URL frm ^
      dogePic.src = moreRawData.message;
    });
});

const submit = document.querySelector("#submit");
submit.addEventListener("click", function () {
  fetch("https://goweather.herokuapp.com/weather/Boston").then(function (
    rawWeatherData
  ) {
    return rawWeatherData.json();
  });
});
