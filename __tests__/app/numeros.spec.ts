import { esPrimo } from "../../src/app/numeros";

describe("esPrimo", () => {
  test("debería devolver falso para números menores que 2", () => {
    expect(esPrimo(0)).toBe(false);
    expect(esPrimo(1)).toBe(false);
  });

  test("debería devolver verdadero para números primos", () => {
    expect(esPrimo(2)).toBe(true);
    expect(esPrimo(3)).toBe(true);
    expect(esPrimo(5)).toBe(true);
    expect(esPrimo(7)).toBe(true);
  });

  test("debería devolver falso para números no primos", () => {
    expect(esPrimo(4)).toBe(false);
    expect(esPrimo(6)).toBe(false);
    expect(esPrimo(8)).toBe(false);
    expect(esPrimo(9)).toBe(false);
  });
});
