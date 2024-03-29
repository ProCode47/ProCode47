export const loader = () => {
  const root = document.getElementById("loader");
  const overlay = document.getElementById("overlay");
  function generateRandomString(length) {
    const characters = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
    ];
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters[Math.floor(Math.random() * characters.length)];
    }
    return result;
  }

  const interval1 = () =>
    setInterval(() => {
      let random = generateRandomString(12);
      root.innerHTML = random;
    }, 50);
  const interval2 = () =>
    setInterval(() => {
      let random = generateRandomString(11);
      root.innerHTML = "s" + random;
    }, 50);
  const interval3 = () =>
    setInterval(() => {
      let random = generateRandomString(10);
      root.innerHTML = "sh" + random;
    }, 50);
  const interval4 = () =>
    setInterval(() => {
      let random = generateRandomString(9);
      root.innerHTML = "sha" + random;
    }, 50);
  const interval5 = () =>
    setInterval(() => {
      let random = generateRandomString(8);
      root.innerHTML = "shad" + random;
    }, 50);
  const interval6 = () =>
    setInterval(() => {
      let random = generateRandomString(7);
      root.innerHTML = "shado" + random;
    }, 50);
  const interval7 = () =>
    setInterval(() => {
      let random = generateRandomString(6);
      root.innerHTML = "shadow" + random;
    }, 50);
  const interval8 = () =>
    setInterval(() => {
      let random = generateRandomString(5);
      root.innerHTML = "shadowb" + random;
    }, 50);
  const interval9 = () =>
    setInterval(() => {
      let random = generateRandomString(4);
      root.innerHTML = "shadowby" + random;
    }, 50);
  const interval10 = () =>
    setInterval(() => {
      let random = generateRandomString(3);
      root.innerHTML = "shadowbyt" + random;
    }, 50);
  const interval11 = () =>
    setInterval(() => {
      let random = generateRandomString(2);
      root.innerHTML = "shadowbyte" + random;
    }, 50);
  const interval12 = () =>
    setInterval(() => {
      let random = generateRandomString(1);
      root.innerHTML = "shadowbytee" + random;
    }, 50);

  var interval = interval1();

  setTimeout(() => {
    clearInterval(interval);
    interval = interval2();
  }, 1000);
  setTimeout(() => {
    clearInterval(interval);
    interval = interval3();
  }, 1500);
  setTimeout(() => {
    clearInterval(interval);
    interval = interval4();
  }, 2000);
  setTimeout(() => {
    clearInterval(interval);
    interval = interval5();
  }, 2500);
  setTimeout(() => {
    clearInterval(interval);
    interval = interval6();
  }, 3000);
  setTimeout(() => {
    clearInterval(interval);
    interval = interval7();
  }, 3500);
  setTimeout(() => {
    clearInterval(interval);
    interval = interval8();
  }, 4000);
  setTimeout(() => {
    clearInterval(interval);
    interval = interval9();
  }, 4500);
  setTimeout(() => {
    clearInterval(interval);
    interval = interval10();
  }, 5000);
  setTimeout(() => {
    clearInterval(interval);
    interval = interval11();
  }, 5500);
  setTimeout(() => {
    clearInterval(interval);
    interval = interval12();
  }, 6000);
  setTimeout(() => {
    clearInterval(interval);
    root.innerHTML = "shadowbytee.";
  }, 6600);
  setTimeout(() => {
    overlay.style.transform = "translateY(-100%)";
  }, 7500);
};
