const theme = document.getElementById(`theme`);

const normalMode = document.getElementById(`normalMode`);

const darkMode = document.getElementById(`darkMode`);

theme.addEventListener(`click`, () => {
  // document.body.style.backgroundColor = `#fffffe`;
  document.body.style.backgroundColor = `#fffffe`;
  // console.log(`hello`);
});

normalMode.addEventListener(`click`, () => {
  document.body.style.backgroundColor = `#0a1924`;
});

darkMode.addEventListener(`click`, () => {
  document.body.style.backgroundColor = `#121212`;
});

// document.body.addEventListener(`mouseover`, () => {
//   document.body.style.backgroundColor = `red`;
// });
