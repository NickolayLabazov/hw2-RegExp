export default class Validator {
  validateUsername(Name) {
    if (Name.search(/^[A-Za-z]+([ -]?[A-Za-z-]+)+[A-Za-z]+[\n\r]?$/) !== -1) {
      return 'Имя корректно';
    } return 'Имя некорректно';
  }
}
