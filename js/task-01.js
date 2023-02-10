// const input = document.querySelector(".js-input");
// const license = document.querySelector(".js-license");
// const btn = document.querySelector(".js-button");
// let span = document.querySelector(".js-span");

// input.addEventListener("input", (event) => {
//   span.textContent = event.currentTarget.value;
//   console.log(event.currentTarget.value);
// });

// license.addEventListener("change", () => console.log("Im working"));
//   const form = document.querySelector(".form");

// form.addEventListener("submit", showValues);

// function showValues(event) {
//   event.preventDefault();

//   const formData = new FormData(event.currentTarget);

//   formData.forEach((x, y) => {
//     console.log(x);
//     console.log(y);
//   });
// }

const form = document.querySelector(".js-register-form");

form.addEventListener("submit", onFormSumit);

function onFormSumit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  formData.forEach((x, y) => {
    console.log(x);
    console.log(y);
  });
}
