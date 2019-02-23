export default class Validator {
  validateUsername(Name) {
    if (Name.search(/^[a-z-]+([ ]?[a-z-])*$/i) !== -1) {
      return 'Имя корректно';
    } return 'Имя некорректно';
  }
}
