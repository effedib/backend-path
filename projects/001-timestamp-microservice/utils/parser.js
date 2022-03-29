function dateParser (date2parse) {

  const dateBase = isNow(date2parse);

  return getDateFormat(dateBase)

  // check if value is null, the default date is now()
  function isNow (date2parse) {
    return (date2parse === undefined) ? new Date(Date.now()) : new Date(date2parse)
  }


  // check if the format is date_string or timestamp or an invalid date
  function getDateFormat (date) {
    // correct date_string format
    if (!isNaN(date)) {
      return {
        'unix-date': date.getTime(),
        'UTC-date': date.toUTCString()
      }
    } else {
      // if is not NaN, is already unix format
      if (!isNaN(parseInt(date2parse))) {
        return {
          'unix-date': parseInt(date2parse),
          'UTC-date': new Date(parseInt(date2parse)).toUTCString()
        }
      }

      // any other option is invalid
      return {error: "Invalid Date"}
    }
  }
}

module.exports = {
  dateParser
}

// console.log(dateParser('2015-12-25'));
// console.log(dateParser('1451001600000'));
// console.log(dateParser('nice guy'));
// console.log(dateParser());
// console.log(dateParser('1995, 11, 17'));
// console.log(dateParser('December 17, 1995 03:24:00'));

// console.log(dateParser('9'));
// console.log(dateParser('145'));
// console.log(dateParser('2998'));