const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 3000);

function getData() {
  header.innerHTML =
    "<img src='https://images.unsplash.com/photo-1519068737630-e5db30e12e42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80' alt='' />";

  title.innerHTML = " Lorem ipsum dolor sit amet.";

  excerpt.innerHTML =
    " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas quidem.";

  profile_img.innerHTML =
    " <img src='https://images.unsplash.com/photo-1585251309844-3eec340559ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' alt=''/>";

  name.innerHTML = "John Doe";

  date.innerHTML = "Oct 08, 2020";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));

  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
