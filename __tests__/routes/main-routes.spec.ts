import request from "supertest";
import express from "express";
import mainRouter from "../../src/routes/main-route.js";

const app = express();
app.use(mainRouter);

describe("mainRouter", () => {
  test("GET / debería devolver mensaje de saludo", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toContain("Hola mundo al usuario");
  });

  test("GET /api-key debería devolver mensaje de clave API", async () => {
    const response = await request(app).get("/api-key");
    expect(response.status).toBe(200);
    expect(response.text).toContain("la apikey de mi aplicacion es:");
  });

  test("GET /operar debería devolver resultado de la operación", async () => {
    const response = await request(app)
      .get("/operar")
      .query({ operacion: "suma", num1: "2", num2: "3" });
    expect(response.status).toBe(200);
    expect(response.text).toContain("El resultado de la operacion es: 5");
  });

  test("GET /palindromo debería devolver mensaje de palíndromo", async () => {
    const response = await request(app)
      .get("/palindromo")
      .query({ frase: "anilina" });
    expect(response.status).toBe(200);
    expect(response.text).toContain("La frase ingresada es palindromo");
  });

  test("GET /primo debería devolver mensaje de número primo", async () => {
    const response = await request(app).get("/primo").query({ numero: "7" });
    expect(response.status).toBe(200);
    expect(response.text).toContain("el numero ingresado es un numero primo");
  });

  test("GET /operar debería devolver NaN si num2 no es válido", async () => {
    const response = await request(app)
      .get("/operar")
      .query({ operacion: "suma", num1: "2", num2: "notANumber" });
    expect(response.status).toBe(200);
    expect(response.text).toContain("El resultado de la operacion es: NaN");
  });

  test("GET /palindromo debería devolver 'no es' si la frase no es un palíndromo", async () => {
    const response = await request(app)
      .get("/palindromo")
      .query({ frase: "hola" });
    expect(response.status).toBe(200);
    expect(response.text).toContain("La frase ingresada no es palindromo");
  });

  test("GET /primo debería devolver 'no es' si el número no es primo", async () => {
    const response = await request(app).get("/primo").query({ numero: "4" });
    expect(response.status).toBe(200);
    expect(response.text).toContain(
      "el numero ingresado no es un numero primo"
    );
  });
});
