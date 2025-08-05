import { useState } from "react";
import Button from "../button/Button";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    Location: "",
  });

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
        <label style={{ color: "#F5F5F5" }}>Name:</label>
        <br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label style={{ color: "#F5F5F5" }}>Email:</label>
        <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label style={{ color: "#F5F5F5" }}>Phone:</label>
        <br />
        <input
          type="tel"
          name="phone"
          placeholder="123-456-7890"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div>
        <label style={{ color: "#F5F5F5" }}>Location:</label>
        <br />
        <input
          type="text"
          name="location"
          value={formData.Location}
          onChange={handleChange}
        />
      </div>
      <Button label="Submit" onClick={() => console.log("Submitted")} />
    </form>
  );
}

export default ContactForm;
