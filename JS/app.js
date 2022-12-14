// Button Event Handler
document.getElementById("btn").addEventListener("click", function () {
  loadData();
});

// Fetch Data from Weather Server
function loadData() {
  const cityName = document.getElementById("city").value;
  const apiKey = `990768f78b8fc8bf9e2ad424932b32ef`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((res) => res.json())
    .then((Data) => {
      displayData(Data);
    })
    .catch((err) => alert("Enter a Valid City Name"));
}

// Set Inner Text Function
const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};

// Display Data Function
function displayData(temperature) {
  setInnerText("City-Name", temperature.name);
  setInnerText("Temp", temperature.main.temp);
  setInnerText("Conditon", temperature.weather[0].main);

  // Set Icon
  const iconUrl = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
  document.getElementById("Icon").setAttribute("src", iconUrl);
}
