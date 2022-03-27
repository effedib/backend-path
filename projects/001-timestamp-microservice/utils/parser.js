function dateParser (date2parse) {
  const dateBase = new Date(date2parse);
  // https://it.javascript.info/native-prototypes
  // https://ichi.pro/it/che-cos-e-object-object-in-javascript-object-prototype-tostring-32678405903780
  // https://devdev.it/guida-javascript/prototype-ereditarieta/
  console.log(Object.prototype.toString.call(dateBase) === '[object Date]')
  
  let unixDate = dateBase.getTime();
  let utcDate;
  console.log('dateBase', dateBase);
  switch (true) {
    case isNaN(unixDate):
      unixDate = dateBase;
      console.log('date2parse', date2parse);
      utcDate = date2parse.toUTCString;
      break;
    
    case (unixDate >= 0):
      console.log('dateBase > 0', dateBase)
      //unixDate = dateBase.getTime();
      utcDate = dateBase.toUTCString();
      break;
    
    default:
      return 'Bad data format! Retry';
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