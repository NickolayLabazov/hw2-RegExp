import Validator from '../src/function';

test('Проверка корректного ввода', () => {
  const expected = 'Имя корректно';
  const validator = new Validator();
  const received = validator.validateUsername('the correct-name');
  expect(received).toBe(expected);
});

test('Проверка корректного ввода', () => {
  const expected = 'Имя корректно';
  const validator = new Validator();
  const received = validator.validateUsername('-the correct-name-');
  expect(received).toBe(expected);
});

test('Проверка ввода числа', () => {
  const expected = 'Имя некорректно';
  const validator = new Validator();
  const received = validator.validateUsername('the correct-name1');
  expect(received).toBe(expected);
});

test('Проверка ввода двух пробелов подряд', () => {
  const expected = 'Имя некорректно';
  const validator = new Validator();
  const received = validator.validateUsername('the  correct-name');
  expect(received).toBe(expected);
});

test('Проверка ввода пробела в начале', () => {
  const expected = 'Имя некорректно';
  const validator = new Validator();
  const received = validator.validateUsername(' the correct-name');
  expect(received).toBe(expected);
});

test('Проверка ввода пробела в конце', () => {
  const expected = 'Имя некорректно';
  const validator = new Validator();
  const received = validator.validateUsername('the correct-name ');
  expect(received).toBe(expected);
});
