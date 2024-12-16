import { useEffect, useState } from "react";
import Autocomplete from "@/components/Autocomplete/Autocomplete";
import { AutocompleteAPI } from "@/components/Autocomplete/Autocomplete.api";
import {
  ContactUsFormInterface,
  FormFieldError,
  SearchOption,
} from "@/types";
import ContactUsStyles from "./ContactUs.module.css";
import { FormValidator } from "@/utils/form";
import { sanitize } from "@/utils/sanitizers";

const ContactUsPage = () => {
  const [form, setForm] = useState<ContactUsFormInterface>({
    email: "",
    emailBody: "",
    subject: "",
    mobile: "",
    state: "",
    city: "",
    name: "",
  });
  const [errors, setErrors] = useState<FormFieldError>({});
  const [loading, setLoading] = useState<boolean>(false);

  const validator: FormValidator<ContactUsFormInterface> = new FormValidator(
    [
      {
        field: "email",
        rules: [
          {
            rule: "required",
            message: "This field is required",
          },
          {
            rule: "email",
            message: "Please enter a valid email",
          },
        ],
      },
      {
        field: "emailBody",
        rules: [
          {
            rule: "required",
            message: "This field is required",
          },
        ],
      },
      {
        field: "subject",
        rules: [
          {
            rule: "required",
            message: "This field is required",
          },
        ],
      },
      {
        field: "mobile",
        rules: [
          {
            rule: "required",
            message: "This field is required",
          },
          {
            rule: "phone",
            message: "Please enter a valid mobile number",
          },
        ],
      },
      {
        field: "state",
        rules: [
          {
            rule: "required",
            message: "This field is required",
          },
        ],
      },
      {
        field: "city",
        rules: [
          {
            rule: "required",
            message: "This field is required",
          },
        ],
      },
      {
        field: "name",
        rules: [
          {
            rule: "required",
            message: "This field is required",
          },
        ],
      },
    ],
    form
  );

  const handleChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });

    /**
     * Remove the error for this field
     */
    const updateErrors = errors;
    delete updateErrors[name];
    setErrors(updateErrors);
  };

  const [cityOptions, setCityOptions] = useState<Array<SearchOption>>([]);

  useEffect(() => {
    /**
     * Populate the city dropdown when state changes
     */
    if (form.state) {
      const cities: Array<SearchOption> = AutocompleteAPI.fetchStateOrCity(
        form.state
      );
      setCityOptions(cities);
      setForm({ ...form, city: "" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.state]);

  const handleSubmit = async () => {
    validator.validate();
    setErrors(validator.errors);
    if (!validator.isValid) return;

    /**
     * reset the form
     */
    setForm({
      email: "",
      emailBody: "",
      subject: "",
      mobile: "",
      state: "",
      city: "",
      name: "",
    });

    setLoading(true);

    try {
      await fetch(
        "https://w3h2zvm2nb.execute-api.us-east-1.amazonaws.com/dev/open/v2/website/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      alert("Your message is important to us. We'll get back to you shortly.");
    } catch (e) {
      console.error("Error submitting form", e);
      alert("Some error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={ContactUsStyles["component-wrapper"]}>
        <div className="container">
          <div className={ContactUsStyles["form-container"]}>
            <div className="container text-center">
              <h1
                className={`fs-sm-20 text-primary fw-bold ${ContactUsStyles["heading"]}`}
              >
                Contact us
              </h1>
              <p className={`fs-32 fs-sm-16 text-success fw-bold`}>
                Do you have any questions?
                <br /> We're happy to help.
              </p>
            </div>

            <div className="row justify-content-center mt-5">
              <div className="col-md-4">
                <div className="mb-5">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter your Name"
                    onChange={(e) => handleChange("name", e.target.value)}
                    value={form.name}
                  />
                  <p className="text-danger form-validation-error">
                    {errors["name"]}
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-5">
                  <label htmlFor="mobile-number" className="form-label">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="mobile"
                    name="mobile"
                    placeholder="Enter your Mobile Number"
                    onInput={(e) => sanitize(e, "phone")}
                    onChange={(e) => handleChange("mobile", e.target.value)}
                    value={form.mobile}
                  />
                  <p className="text-danger form-validation-error">
                    {errors["mobile"]}
                  </p>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-md-4">
                <div className="mb-5">
                  <label htmlFor="mobile-number" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your Email Address"
                    onChange={(e) => handleChange("email", e.target.value)}
                    value={form.email}
                  />
                  <p className="text-danger form-validation-error">
                    {errors["email"]}
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-5">
                  <label htmlFor="mobile-number" className="form-label">
                    Subject
                  </label>
                  <Autocomplete
                    name="subject"
                    id="subject"
                    placeholder="Select Subject"
                    options={AutocompleteAPI.fetchSubjects()}
                    onChange={() => {}}
                    onSelect={(_v: SearchOption) => {
                      handleChange("subject", _v.id);
                    }}
                    value={{ id: form.subject, name: form.subject }}
                  />
                  <p className="text-danger form-validation-error">
                    {errors["subject"]}
                  </p>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-md-4">
                <div className="mb-5">
                  <label htmlFor="state" className="form-label">
                    State
                  </label>
                  <Autocomplete
                    name="state"
                    id="state"
                    placeholder="Select State"
                    options={AutocompleteAPI.fetchStateOrCity()}
                    onSelect={(_v: SearchOption) => {
                      handleChange("state", _v.id);
                    }}
                    value={{ id: form.state, name: form.state }}
                  />
                  <p className="text-danger form-validation-error">
                    {errors["state"]}
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-5">
                  <label htmlFor="city" className="form-label">
                    City
                  </label>
                  <Autocomplete
                    name="city"
                    id="city"
                    placeholder="Select City"
                    options={cityOptions}
                    onSelect={(_v: SearchOption) => {
                      handleChange("city", _v.id);
                    }}
                    value={{ id: form.city, name: form.city }}
                  />
                  <p className="text-danger form-validation-error">
                    {errors["city"]}
                  </p>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="mb-5">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="emailBody"
                    name="emailBody"
                    rows={3}
                    placeholder="Write your query in detail here..."
                    onChange={(e) => handleChange("emailBody", e.target.value)}
                    value={form.emailBody}
                  ></textarea>
                  <p className="text-danger form-validation-error">
                    {errors["emailBody"]}
                  </p>
                </div>
              </div>
            </div>

            <div className="my-5 text-center">
              <button
                className="btn btn-primary btn-lg px-5"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm"
                      aria-hidden="true"
                    ></span>
                    <span role="status">&nbsp;Loading...</span>
                  </>
                ) : (
                  "Send"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
