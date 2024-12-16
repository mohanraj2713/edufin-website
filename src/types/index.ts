export type FeesCarouselItem = {
  id: number;
  image: string;
  title: string;
  subtitle: string | null;
  redirect: string;
};

export type SearchOption = {
  id: string;
  name: string;
};

export type FormFieldRuleTypes =
  | "required"
  | "number"
  | "email"
  | "password"
  | "phone"
  | "alphabets"
  | "pan"
  | "pincode"
  | "ifsc"
  | "salary"
  | "dob"
  | "custom";

export type FormValidatorField<T> = {
  field: keyof T;
  rules: ValidationRule[];
};

export type ValidationRule = {
  rule: FormFieldRuleTypes;
  message: string;
  customValidator?: (_v: unknown) => boolean;
};

export type FormFieldError = {
  [key: string]: string;
};

export interface ContactUsFormInterface {
  email: string;
  emailBody: string;
  subject: string;
  mobile: string;
  state: string;
  city: string;
  name: string;
}
