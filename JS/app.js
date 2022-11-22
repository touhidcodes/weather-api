// Button Event Handler
document.getElementById("btn").addEventListener("click", function () {
  loadData();
});

function loadData() {
  const cityName = document.getElementById("city").value;
  const apiKey = `990768f78b8fc8bf9e2ad424932b32ef`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      displayData(data);
    });
}

const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};

function displayData(temperature) {
  setInnerText("City-Name", temperature.name);
  setInnerText("Temp", temperature.main.temp);
  setInnerText("Conditon", temperature.weather[0].main);
}
