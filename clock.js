const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const newData = new Date();
  const hours = newData.getHours();
  const minutes = newData.getMinutes();
  const seconds = newData.getSeconds();
  
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds }`;
  
}



function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();