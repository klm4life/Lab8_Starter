// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('valid phone number', () => {
    expect(functions.isPhoneNumber('626-737-9109')).toBe(true);
});

test('valid phone number', () => {
    expect(functions.isPhoneNumber('(919)-129-1234')).toBe(true);
});

test('invalid phone number', () => {
    expect(functions.isPhoneNumber('jungle diff')).toBe(false);
});

test('invalid phone number', () => {
    expect(functions.isPhoneNumber('6')).toBe(false);
});

test('valid email', () => {
    expect(functions.isEmail('mphung@ucsd.edu')).toBe(true);
});

test('valid email', () => {
    expect(functions.isEmail('xyz1995@gmail.edu')).toBe(true);
});

test('invalid email', () => {
    expect(functions.isEmail('gmail.com@hello')).toBe(false);
});

test('invalid email', () => {
    expect(functions.isEmail('')).toBe(false);
});

test('strong password', () => {
    expect(functions.isStrongPassword('fsdsdsdmz_')).toBe(true);
});

test('strong password', () => {
    expect(functions.isStrongPassword('msida12')).toBe(true);
});

test('not strong password', () => {
    expect(functions.isStrongPassword('fs_')).toBe(false);
});

test('not strong password', () => {
    expect(functions.isStrongPassword('@@lolskddsds')).toBe(false);
});

test('is date', () => {
    expect(functions.isDate('12/23/1992')).toBe(true);
});

test('is date', () => {
    expect(functions.isDate('1/1/1111')).toBe(true);
});

test('is not date', () => {
    expect(functions.isDate('xx/xx/2001')).toBe(false);
});

test('is not date', () => {
    expect(functions.isDate('fsds_')).toBe(false);
});

test('is hex color', () => {
    expect(functions.isHexColor('#0000FF')).toBe(true);
});

test('is hex color', () => {
    expect(functions.isHexColor('#fc9')).toBe(true);
});

test('is not hex color', () => {
    expect(functions.isHexColor('#blah')).toBe(false);
});

test('is not hex color', () => {
    expect(functions.isHexColor('#truemf')).toBe(false);
});