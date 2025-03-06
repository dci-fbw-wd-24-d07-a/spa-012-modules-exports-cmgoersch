import { day, month, year, output } from "./elements.js";

export function checkValid() {
  // Check the HTML element validity
  if (!day.validity.valid) return false;
  if (!month.validity.valid) return false;
  if (!year.validity.valid) return false;

  return true;
}

export function update() {
  // Guard clause to validate user inputs
  if (!checkValid()) {
    output.innerText = "Invalid date input.";
    return;
  }

  // Korrigierter Date-Handling-Code
  const date = new Date();
  date.setUTCFullYear(Number(year.value));
  date.setUTCMonth(Number(month.value) - 1);
  date.setUTCDate(Number(day.value));

  output.innerText = date.toISOString();
}