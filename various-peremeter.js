// for a given string tell me whether it has even number of characters or not
// number charao function e peremeter hisebe string rakha jai
// kichu step mante hoy
// first e check korte hoy string ta

// function wheather(str) {
//   console.log(str);
// }
// wheather("shabiha parvin shila");

function math(str) {
  const reused = str.length;
  console.log(str);
  console.log(reused);
  if (reused % 2 === 0) {
    console.log("even");
    return true;
  } else {
    console.log("odd");
    return false;
  }
}
math("shila");
math("jerin");
math("ammo");

// const reuse = math("shila");
// console.log(reuse);
