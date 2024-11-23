import { describe, test, expect } from "@jest/globals";
import {
  suma,
  restar,
  operar,
  multiplicacion,
  division,
  factorial,
  potencia,
} from "../../src/app/calculadora";

describe("Bateria de test de calculadora", () => {
  test("Sumar en la calculadora", () => {
    expect(suma(1, 2)).toBe(3);
    expect(suma(5, 5)).toBe(10);
    expect(suma(15, 15)).toBe(30);
    expect(suma(1, 5)).not.toBe(0);

    let a: any = 1;
    let b: any = "a";
    expect(suma(a, b)).toBeNaN();
    a = 1;
    b = undefined;
    expect(() => suma(a, b)).toThrowError("No se puede sumar indefinidos");
  });

  test("Restar en la calculadora", () => {
    expect(restar(5, 2)).toBe(3);
    expect(restar(15, 5)).toBe(10);
    expect(restar(45, 15)).toBe(30);
    expect(restar(10, 5)).not.toBe(0);

    let a: any = 1;
    let b: any = "a";
    expect(restar(a, b)).toBeNaN();
    a = 1;
    b = undefined;
    expect(() => restar(a, b)).toThrowError("No se puede restar indefinidos");
  });

  test("Multiplicar en la calculadora", () => {
    expect(multiplicacion(2, 3)).toBe(6);
    expect(multiplicacion(5, 5)).toBe(25);
    expect(multiplicacion(10, 10)).toBe(100);
    expect(multiplicacion(2, 5)).not.toBe(0);

    let a: any = 2;
    let b: any = "a";
    expect(multiplicacion(a, b)).toBeNaN();
    a = 2;
    b = undefined;
    expect(() => multiplicacion(a, b)).toThrowError(
      "No se puede multiplicar indefinidos"
    );
  });

  test("Dividir en la calculadora", () => {
    expect(division(6, 3)).toBe(2);
    expect(division(10, 2)).toBe(5);
    expect(division(100, 10)).toBe(10);
    expect(division(10, 5)).not.toBe(0);

    let a: any = 6;
    let b: any = "a";
    expect(division(a, b)).toBeNaN();
    a = 6;
    b = undefined;
    expect(() => division(a, b)).toThrowError(
      "No se puede dividir indefinidos"
    );
    expect(() => division(6, 0)).toThrowError("No se puede dividir por cero");
  });

  test("Potencia en la calculadora", () => {
    expect(potencia(2, 3)).toBe(8);
    expect(potencia(5, 2)).toBe(25);
    expect(potencia(10, 2)).toBe(100);
    expect(potencia(2, 5)).not.toBe(0);

    let a: any = 2;
    let b: any = "a";
    expect(potencia(a, b)).toBeNaN();
    a = 2;
    b = undefined;
    expect(() => potencia(a, b)).toThrowError("No se puede elevar indefinidos");
  });

  test("Factorial en la calculadora", () => {
    expect(factorial(3)).toBe(6);
    expect(factorial(5)).toBe(120);
    expect(factorial(0)).toBe(1);
    expect(factorial(4)).not.toBe(0);

    let a: any = "a";
    expect(factorial(a)).toBeNaN();
    a = undefined;
    expect(() => factorial(a)).toThrowError(
      "No se puede factorizar indefinidos"
    );
  });

  test("Operar en la calculadora", () => {
    expect(operar("suma", 10, 20)).toBe(30);
    expect(operar("resta", 5, 2)).toBe(3);
    expect(operar("multiplicacion", 2, 3)).toBe(6);
    expect(operar("division", 6, 3)).toBe(2);
    expect(operar("potencia", 2, 3)).toBe(8);
    expect(operar("factorial", 3, NaN)).toBe(6);

    let a: any = 1;
    let b: any = "a";
    expect(operar("suma", a, b)).toBeNaN();
    a = 1;
    b = undefined;
    expect(() => operar("suma", a, b)).toThrowError(
      "No se puede sumar indefinidos"
    );
    expect(() => operar("resta", a, b)).toThrowError(
      "No se puede restar indefinidos"
    );
    expect(() => operar("multiplicacion", a, b)).toThrowError(
      "No se puede multiplicar indefinidos"
    );
    expect(() => operar("division", a, b)).toThrowError(
      "No se puede dividir indefinidos"
    );
    expect(() => operar("potencia", a, b)).toThrowError(
      "No se puede elevar indefinidos"
    );
    expect(() => operar("factorial", b, NaN)).toThrowError(
      "No se puede factorizar indefinidos"
    );
    expect(operar("cualquiercosa", 1, 2)).not.toBeDefined();
  });

  test("Sumar con valores negativos", () => {
    expect(suma(-1, -2)).toBe(-3);
    expect(suma(-1, 2)).toBe(1);
  });

  test("Restar con valores negativos", () => {
    expect(restar(-5, -2)).toBe(-3);
    expect(restar(-5, 2)).toBe(-7);
  });

  test("Multiplicar con valores negativos", () => {
    expect(multiplicacion(-2, -3)).toBe(6);
    expect(multiplicacion(-2, 3)).toBe(-6);
  });

  test("Dividir con valores negativos", () => {
    expect(division(-6, -3)).toBe(2);
    expect(division(-6, 3)).toBe(-2);
  });

  test("Potencia con valores negativos", () => {
    expect(potencia(-2, 3)).toBe(-8);
    expect(potencia(-2, 2)).toBe(4);
  });

  test("Factorial con valores negativos", () => {
    expect(() => factorial(-3)).toThrowError(
      "No se puede factorizar números negativos"
    );
  });

  test("Operar con valores negativos", () => {
    expect(operar("suma", -10, -20)).toBe(-30);
    expect(operar("resta", -5, -2)).toBe(-3);
    expect(operar("multiplicacion", -2, -3)).toBe(6);
    expect(operar("division", -6, -3)).toBe(2);
    expect(operar("potencia", -2, 3)).toBe(-8);
  });

  test("Operar con valor por defecto de operacion", () => {
    expect(operar("", 1, 2)).toBeUndefined();
  });
});
