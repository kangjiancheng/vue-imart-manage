class Validate {
  isNumber (value) {
    return /^\d+(\.\d+)?$/.test(value)
  }
  isInteger (value) {
    return /^\d+$/.test(value)
  }
  isTwoDecimal (value) {
    return /^([1-9]\d*|0)(\.\d{1,2})$/.test(value)
  }
  isIP (value) {
    return /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(value)
  }
}
export const validate = new Validate()

/* form rules validate */
export class FormRules {
  validIP (msg) {
    return (rule, value, callback) => {
      let invalid = false

      if(!validate.isIP(value)) invalid = true

      if (invalid) callback(new Error(msg))
      else callback()
    }
  }

  numEqual(num, msg, isEqual = true,) {
    return (rule, value, callback) => {
      let invalid = false

      if (!validate.isNumber(value)) invalid = true
      else if (value == num) invalid = true
      else if (!isEqual && value != num) invalid = true

      if (invalid) callback(new Error(msg))
      else callback()
    }
  }


  numMin(num, msg, isEqual = true, isInteger = true) {
    return (rule, value, callback) => {
      let invalid = false

      if (!validate.isNumber(value)) invalid = true
      else if (isInteger && !validate.isInteger(value)) invalid = true
      else if (value < num) invalid = true
      else if (!isEqual && value == num) invalid = true

      if (invalid) callback(new Error(msg))
      else callback()
    }
  }

  numMax(num, msg, isEqual = true, isInteger = true) {
    return (rule, value, callback) => {
      let invalid = false

      if (!validate.isNumber(value)) invalid = true
      else if (isInteger && !validate.isInteger(value)) invalid = true
      else if (value > num) invalid = true
      else if (!isEqual && value == num) invalid = true

      if (invalid) callback(new Error(msg))
      else callback()
    }
  }

  // 对64位长整型数值的校验，如java 数值
  validLongIntRange () {
    return (rule, value, callback) => {
      let longIntMax = BigInt(2**63) - BigInt(1)
      let longIntMin = -BigInt(2**63)

      let errorMessage = ''

      if (!/^(-)?\d+$/.test(value)) errorMessage = '请输入整数'
      else if (BigInt(value) < longIntMin) errorMessage = '数值低于最小限制: ' + longIntMin
      else if (BigInt(value) > longIntMax) errorMessage = '数值超过最大限制: ' + longIntMax

      if (errorMessage) callback(new Error(errorMessage))
      else callback()
    }
  }
}

/**
 * 使用方式：
 * formRules() {
      return {
        node_connectFactor: [
          { required: true, message: '请输入', trigger: 'blur', },
          { validator: formRules.numMin(0, '请输入大于0的数', false, false), trigger: 'blur', },
          { validator: formRules.numMax(1,  '输入值超过限制: 1', true, false), trigger: 'blur', },
        ],
      }
    },
 */
export const formRules = new FormRules()

