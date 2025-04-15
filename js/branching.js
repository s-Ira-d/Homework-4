const info1 = prompt("поле 1:");
const info2 = prompt("поле 2:");
if (info1.trim() !== "" && info2.trim() !== "") {
  alert("обидва поля заповнені");
} else {
  alert("не всі поля заповнені");
}
const num1 = Number(prompt("введіть перше число:"));
const num2 = Number(prompt("введіть друге число:"));
const sum = num1 + num2;
if (sum > 10) {
  alert("сума більша за 10");
} else {
  alert("сума менша або дорівнює 10");
}
const text = "я вивчаю JavaScript, мені подобається";
if (text.includes("JavaScript")) {
  console.log("текст містить слово JavaScript");
} else {
  console.log("текст не містить слово JavaScript");
}
const number = Number(prompt("введіть число:"));
if (number > 10 && number < 20) {
  alert("число входить в діапазон від 10 до 20");
} else {
  alert("число не входить в діапазон від 10 до 20");
}
const name = prompt("введіть ім'я:");
const email = prompt("введіть email:");
const password = prompt("введіть пароль:");
if (
  name.length >= 3 &&
  email.includes("@") &&
  email.includes(".") &&
  password.length >= 6
) {
  alert("Перенаправлення на іншу сторінку");
} else {
  alert("Помилка: неправильне заповнення");
}
