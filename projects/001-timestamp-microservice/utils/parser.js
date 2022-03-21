function dateParser (date2parse) {
  const date = new Date(date2parse).getTime();
  if (date >= 0) {
    return {'unix-date': date}
  } else {
    return 'Bad data format! Retry'
  }
}

module.exports = {
  dateParser
}