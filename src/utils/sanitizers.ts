/**
 * This module contains input sanitization functions.
 * Must be used only with <input> tags.
 * Attach the sanitize() function to the onInput event
 * of the <input> to handle the ui response for the DOM element.
 *
 * Refer to any component in the `@components` feature
 * for details on the usage.
 */

import { FormFieldRuleTypes } from "../types";

/**
 * Sanitizes the value of an input field based on the specified rule.
 *
 * This function modifies the value of an input field to ensure it adheres to specific formatting rules.
 * For the "phone" rule, it strips non-digit characters and limits the value to 10 digits.
 * For the "pincode" rule, it strips non-digit characters and limits the value to 6 digits.
 *
 * @param {React.FormEvent<HTMLInputElement>} e - The form event from the input field whose value needs to be sanitized.
 * @param {FormFieldRuleTypes} rule - The rule to apply for sanitizing the input value. Possible values include "phone" and "pincode".
 *
 * @returns {void} This function does not return a value. It modifies the value of the input field directly.
 *
 * @example
 * // Example usage in a React component:
 *
 * const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
 *   sanitize(e, 'phone');
 *   // The input value will be sanitized to contain only digits, up to 10 characters.
 * };
 *
 * <input type="text" onInput={handleInputChange} />
 */

export const sanitize = (
  e: React.FormEvent<HTMLInputElement>,
  rule: FormFieldRuleTypes
) => {
  if (rule === "phone") {
    e.currentTarget.value = e.currentTarget.value
      .replace(/\D/g, "") // Remove non-digit characters
      .slice(0, 10); // Limit to 10 digits
  } else if (rule === "pincode") {
    e.currentTarget.value = e.currentTarget.value
      .replace(/\D/g, "") // Remove all non-digit characters
      .slice(0, 6); // Limit the length to 6 digits
  } else if (rule === "number" || rule === "salary") {
    e.currentTarget.value = e.currentTarget.value.replace(/\D/g, ""); // Remove non-digit characters
  } else if (rule === "ifsc") {
    e.currentTarget.value = e.currentTarget.value
      .replace(/[^a-zA-Z0-9]/g, "") // Remove non-digit characters
      .toUpperCase() // Capitalize
      .slice(0, 11); // limit to 11 characters
  } else if (rule === "pan") {
    e.currentTarget.value = e.currentTarget.value
      .replace(/[^a-zA-Z0-9]/g, "") // Remove non-digit characters
      .toUpperCase() // Capitalize
      .slice(0, 10); // limit to 10 characters
  } else if (rule === "alphabets") {
    e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z]/g, "");
  }
};
