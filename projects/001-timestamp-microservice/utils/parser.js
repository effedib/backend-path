function dateParser (date2parse) {

  // if date2parse is null, set date = today
  const date = (date2parse === undefined)
    ? Date.now() : date2parse

  /*
  if the date_string is correct, return an obj having keys 'unix-date' and 'UTC-date', using new Date to convert the string to [object Date] and call getTime method and toUTCString method
  */
  if (isValidDate(date)) {
    return dateObj(new Date(date).getTime(), new Date(date).toUTCString())
  }

  /*
  if the date is in number format, return an obj having keys 'unix-date' and 'UTC-date', using parseInt(date) to set the value of 'unix-date' (bypass the new Date creation) and creating a new [object Date] using new Date(parseInt(date)) to call toUTCString method
  */
  else if (isValidUnixTimestamp(date)) {
    return dateObj(parseInt(date), new Date(parseInt(date)).toUTCString())
  }

  // return error for any other string
  return {error: "Invalid Date"}
}


// check if a date_string is valid
function isValidDate (date) {
  return (!isNaN(new Date(date))) ? true : false
}

// check if a string is in unix timestamp format
function isValidUnixTimestamp (date) {
  return (!isNaN(parseInt(date))) ? true : false
}

function dateObj (unixDate, utcDate) {
  return {
    'unix-date': unixDate,
    'UTC-date': utcDate
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
// console.log(dateParser('30000.77'));