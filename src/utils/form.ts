import { FormFieldError, FormValidatorField, ValidationRule } from "../types";
import {
  vRequired,
  vNumber,
  vEmail,
  vPhone,
  vAlphabets,
  vPanNumber,
  vPinCode,
  isSearchOption,
} from "./validators";

export class FormValidator<T> {
  errors: FormFieldError;
  private _formFields: FormValidatorField<T>[];
  private _formData: T;

  constructor(formFields: FormValidatorField<T>[], formData: T) {
    this._formFields = formFields;
    this._formData = formData;
    this.errors = {};
  }

  get isValid() {
    return Object.keys(this.errors).length === 0;
  }

  mapRuleToValidator = (formFieldRule: ValidationRule) => {
    switch (formFieldRule.rule) {
      case "required":
        return {
          rule: vRequired,
          message: formFieldRule.message,
        };
      case "number":
        return { rule: vNumber, message: formFieldRule.message };
      case "email":
        return { rule: vEmail, message: formFieldRule.message };
      case "phone":
        return { rule: vPhone, message: formFieldRule.message };
      case "alphabets":
        return { rule: vAlphabets, message: formFieldRule.message };
      case "pan":
        return { rule: vPanNumber, message: formFieldRule.message };
      case "pincode":
        return { rule: vPinCode, message: formFieldRule.message };
      case "custom":
        return {
          rule: formFieldRule.customValidator,
          message: formFieldRule.message,
        };
      default:
        return {
          rule: null,
          message: "",
        };
    }
  };

  validate = () => {
    this._formFields.forEach((formField: FormValidatorField<T>) => {
      formField.rules.forEach((formFieldRule: ValidationRule) => {
        const validationRule = this.mapRuleToValidator(formFieldRule);
        const fieldValue = this._formData[formField.field];

        if (typeof fieldValue === "string") {
          if (validationRule.rule && !validationRule.rule(fieldValue)) {
            const fieldName = formField.field as keyof T;
            const typedFieldName = fieldName as keyof FormFieldError;
            if (!this.errors[typedFieldName]) {
              this.errors[typedFieldName] = validationRule.message;
            }
          }
        } else if (
          typeof fieldValue === "object" &&
          isSearchOption(fieldValue as object)
        ) {
          if (validationRule.rule && !validationRule.rule(fieldValue)) {
            const fieldName = formField.field as keyof T;
            const typedFieldName = fieldName as keyof FormFieldError;
            if (!this.errors[typedFieldName]) {
              this.errors[typedFieldName] = validationRule.message;
            }
          }
        }
      });
    });
  };
}
