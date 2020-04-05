class Validate {
  regexpNum = /^\d+&/
}
export const validate = new Validate()

/* form rules validate */
export class FormRules {
  static numMin(num, msg, isEqual, isInteger) {
    return (rule, value, callback) => {
      if (isEqual && value >= num && isInteger && validate.regexpNum.test(num)) {
        callback(new Error(msg))
      }
      if (value > num) {
        callback(new Error(msg))
      } else {
        callback()
      }
    }
  }
  static numMax(value, msg, isEqual, isInteger) {

  }
}
