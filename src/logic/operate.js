const operate = (number1, number2, operand) => {
  switch (operand) {
    case "+":
      return number1 + number2;
    case "-":
      return number1 - number2;
    case "X":
      return number1 * number2;
    case "÷":
      if (number2 === 0) {
        alert("Divide by zero");
        return 0;
      }
      return number1 / number2;
    case "%":
      return number1 % number2;
    default:
      throw Error(`unknown operation`);
  }
};

export default operate;
