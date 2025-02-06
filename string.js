function car(str) {
  console.log(str);
  const carDetails = str.length;
  console.log(carDetails);
  if (carDetails % 2 === 0) {
    console.log("even");
    return true;
  } else {
    console.log("odd");
    return false;
  }
}
car("audi");
car("marcedes");
car("carolla");
car("premier");
