import { esPalindromo } from "../../src/app/palabras";

describe("esPalindromo", () => {
  test("debería devolver falso para una cadena vacía", () => {
    expect(esPalindromo("")).toBe(false);
  });

  test("debería devolver verdadero para un solo carácter", () => {
    expect(esPalindromo("a")).toBe(true);
  });

  test("debería devolver verdadero para frases palindrómicas", () => {
    expect(esPalindromo("A man a plan a canal Panama")).toBe(true);
    expect(esPalindromo("No lemon no melon")).toBe(true);
    expect(esPalindromo("racecar")).toBe(true);
  });

  test("debería devolver falso para frases no palindrómicas", () => {
    expect(esPalindromo("hello")).toBe(false);
    expect(esPalindromo("world")).toBe(false);
    expect(esPalindromo("typescript")).toBe(false);
  });
});
