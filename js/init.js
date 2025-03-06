import { day, month, year } from "./elements.js";
import { update } from "./updater.js"; 

export default function init() {
  // Initialize input default values
  const now = new Date();
  day.value = now.getDay(); 
  month.value = now.getMonth() + 1;
  year.value = now.getUTCFullYear();

  // Add event listeners to relevant inputs
  day.addEventListener("input", update);
  month.addEventListener("input", update);
  year.addEventListener("input", update);

  // Update the output box
  update();
}