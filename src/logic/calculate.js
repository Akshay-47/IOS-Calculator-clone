import isNumber from "./isNumber";
import operate from "./operate";

let calculate = (object, buttonName) => {
  console.log(object);
  if (buttonName === "AC") {
    return {
      total: 0,
      next: 0,
      operation: null
    };
  } else if (isNumber(buttonName) || buttonName === ".") {
    return {
      ...object,
      next: object.next + buttonName
    };
  } else if (buttonName === "=") {
    let res = operate(
      parseFloat(object.total),
      parseFloat(object.next),
      object.operation
    );
    return {
      ...object,
      total: res,
      next: 0,
      operation: null
    };
  } else if (buttonName === "+/-") {
    return {
      ...object,
      next: object.next * -1
    };
  } else {
    //operand
    if (
      buttonName === "+" ||
      buttonName === "-" ||
      buttonName === "X" ||
      buttonName === "÷" ||
      buttonName === "%"
    ) {
      if (object.next !== 0 && object.operation && object.total) {
        let res = operate(
          parseFloat(object.total),
          parseFloat(object.next),
          object.operation
        );
        return {
          ...object,
          operation: buttonName,
          total: res,
          next: 0
        };
      }
      else return {
        ...object,
        operation: buttonName,
        total: object.total !== 0 ? object.total : object.next,
        next: 0
      };
    }
  }
};

export default calculate;
