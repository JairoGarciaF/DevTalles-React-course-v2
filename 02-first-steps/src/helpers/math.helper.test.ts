import { describe, expect, test } from "vitest";
import { add, multiply, subtract } from "./math.helper";

describe("add", () => {
  test("Should add two positive numbers", () => {
    // ! 1. Arrange
    const a = 3;
    const b = 7;
    // ! 2. Act
    const result = add(a, b);
    // ! 3. Assert
    expect(result).toBe(a + b);
  });
  test("Should add two negative numbers", () => {
    // ! 1. Arrange
    const a = -3;
    const b = -7;
    // ! 2. Act
    const result = add(a, b);
    // ! 3. Assert
    expect(result).toBe(a + b);
  });
});

describe("substract", () => {
  test("Should substract two positive numbers", () => {
    // ! 1. Arrange
    const a = 3;
    const b = 7;
    // ! 2. Act
    const result = subtract(a, b);
    // ! 3. Assert
    expect(result).toBe(a - b);
  });
  test("Should substract two negative numbers", () => {
    // ! 1. Arrange
    const a = -3;
    const b = -7;
    // ! 2. Act
    const result = subtract(a, b);
    // ! 3. Assert
    expect(result).toBe(a - b);
  });
});

describe("multiply", () => {
  test("Should multiply two positive numbers", () => {
    // ! 1. Arrange
    const a = 3;
    const b = 7;
    // ! 2. Act
    const result = multiply(a, b);
    // ! 3. Assert
    expect(result).toBe(a * b);
  });
  test("Should multiply by zero", () => {
    // ! 1. Arrange
    const a = 0;
    const b = 7;
    // ! 2. Act
    const result = multiply(a, b);
    // ! 3. Assert
    expect(result).toBe(a * b);
  });
});
