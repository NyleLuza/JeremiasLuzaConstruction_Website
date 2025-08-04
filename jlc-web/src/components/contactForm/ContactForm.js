import { useState } from "react";
function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData([(prev) => ({ ...prev, [name]: value })]);
  };
  return console;
}
