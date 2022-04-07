const assert = require('assert');
const { dateParser } = require('../utils/parser');

const results = {
  'valid': {
    'unix-date': 1451001600000,
    'UTC-date': 'Fri, 25 Dec 2015 00:00:00 GMT'
  },
  'validLocal': {
    'unix-date': 1450998000000,
    'UTC-date': 'Thu, 24 Dec 2015 23:00:00 GMT'
  },
  'invalid' : {error: "Invalid Date"}
}

describe('dateParser Test', () => {
  it(`correct date input`, () => {
    assert.deepEqual(dateParser('2015-12-25'), results.valid)
  });
  it(`unix date input`, () => {
    assert.deepEqual(dateParser('1451001600000'), results.valid)
  });
  it(`unix date input (like number)`, () => {
    assert.deepEqual(dateParser(1451001600000), results.valid)
  });
  it(`verbose date input`, () => {
    assert.deepEqual(dateParser('December 25, 2015 00:00:00 GMT'), results.valid)
  });
  it(`verbose date input (local time)`, () => {
    assert.deepEqual(dateParser('December 25, 2015 00:00:00'), results.validLocal)
  });
  it(`separate date input`, () => {
    assert.deepEqual(dateParser('2015, 12, 25'), results.validLocal)
  });
  it(`invalid date format`, () => {
    assert.deepEqual(dateParser('nice guy'), results.invalid);
    assert.deepEqual(dateParser(''), results.invalid);
    assert.deepEqual(dateParser(false), results.invalid);
    assert.deepEqual(dateParser(0), results.invalid);
    assert.deepEqual(dateParser(0n), results.invalid);
  });
  it(`it should return the Date.now() value, if the value is > 0 it's ok`, () => {
    const now = dateParser();
    const nowWithNull = dateParser(null);
    assert.ok(now['unix-date'] > 0);
    assert.ok(nowWithNull['unix-date'] > 0);
  });
  it(`date_string is too short`, () => {
    assert.deepEqual(dateParser('9'), results.invalid)
    assert.deepEqual(dateParser('145'), results.invalid)
    assert.deepEqual(dateParser('30000.77'), results.invalid)
  });
})
