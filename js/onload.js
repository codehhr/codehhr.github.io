window.onload = function () {
  let arr = [];
  for (let index = 0; index < 10; index++) {
    arr.push(index + 1);
  }
  function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  if (getRandomNum(1, 10) < 6) {
    document
      .querySelector("img[src='https://img.tkads.tk//images/close.png'")
      .nextElementSibling.click();
  }
};

// $(document).ready(function () {});
