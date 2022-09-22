const sounds = [
  "Animals",
  "Bang Bang",
  "Faded",
  "Rolling In the Deep",
  "Waka Waka",
];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSongs();
    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
  //   document.querySelector("#buttons").appendChild(btn);
});
function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.querySelector(sound);
    console.log(sound);
    song.pause();
    song.currentTime = 0;
  });
}
