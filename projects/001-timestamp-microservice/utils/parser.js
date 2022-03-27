function dateParser (date2parse) {
  const dateBase = new Date(date2parse);
  // https://it.javascript.info/native-prototypes
  // https://ichi.pro/it/che-cos-e-object-object-in-javascript-object-prototype-tostring-32678405903780
  // https://devdev.it/guida-javascript/prototype-ereditarieta/
  let unixDate;
  let utcDate;
  if (!isNaN(dateBase)) {
    unixDate = dateBase.getTime();
    utcDate = dateBase.toUTCString();
  } else {
    unixDate = parseInt(date2parse);
    const newDateBase = new Date(parseInt(date2parse) * 1000);
    utcDate = newDateBase.toUTCString();
  }
  

  return {
    'unix-date': unixDate,
    'UTC-date': utcDate
  }
}

module.exports = {
  dateParser
}

console.log(dateParser('2022-03-26'));
console.log(dateParser('1451001600000'));