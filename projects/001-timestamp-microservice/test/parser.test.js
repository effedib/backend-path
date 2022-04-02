const assert = require('assert');
const { dateParser } = require('../utils/parser');

describe('dateParser Test', () => {
  it(`should return an obj with 2 date format, unix and UTC`, () => {
    assert.equal(dateParser('2015-12-25'), {
      'unix-date': 1451001600000,
      'UTC-date': 'Fri, 25 Dec 2015 00:00:00 GMT'
    })
  })
})



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