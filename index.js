console.log("From index js");

function currentTime() {
  setTimeout(() => {
    const time = new Date();
    console.log(time.toLocaleTimeString());
  }, 2000);
}
currentTime();
