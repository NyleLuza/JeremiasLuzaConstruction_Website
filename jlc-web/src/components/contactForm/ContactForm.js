import { useState } from "react";
import Button from "../button/Button";

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData([(prev) => ({ ...prev, [name]: value })]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted", formData);
    setFormData({ name: "", email: "" });
  };
  return (
    <form
      className="d-flex flex-column justify-content-center"
      onSubmit={handleSubmit}
    >
      <div>
        <label>Name:</label>
        <br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <Button label="Submit" onClick={() => console.log("Submitted")} />
    </form>
  );
}

export default ContactForm;
