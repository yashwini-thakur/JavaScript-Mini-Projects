const labels = document.querySelectorAll(".form-control label");
labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("") // converts the email string into array of letters with elements e,m,a,i,l
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    ) //wraps all letters inside span tag
    .join(""); //converts the array back into string
});
//label: 1. Email 2. Password
