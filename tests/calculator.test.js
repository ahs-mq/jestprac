import {Calculator} from '../src/calculator.js';

describe('Calculator', () => {
  test('initializes with a result value', () => {
    const calc = new Calculator(0);
    expect(calc.result).toBe(0);
  });

  test('add method adds two numbers and updates result', () => {
    const calc = new Calculator(0);
    const final = calc.add(3, 4);
    expect(final).toBe(7);       
    expect(calc.result).toBe(7); 
  });

   test('sub method subtracts two numbers and updates result', () => {
    const calc = new Calculator(0);
    const final = calc.subtract(4 , 3);
    expect(final).toBe(1);             
    expect(calc.result).toBe(1);
  });

  test('multiply method multiply two numbers and updates result', () => {
    const calc = new Calculator(0);
    const final = calc.multiply(4, 3);
    expect(final).toBe(12);             
    expect(calc.result).toBe(12);
  });

  test('divide method divides two numbers and updates result', () => {
    const calc = new Calculator(0);
    const final = calc.divide(12, 4);
    expect(final).toBe(3);             
    expect(calc.result).toBe(3);
  });

});