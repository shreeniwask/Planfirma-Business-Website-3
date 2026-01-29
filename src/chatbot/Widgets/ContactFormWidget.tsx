import React, { useState } from "react";

interface Props {
  actionProvider: any;
  selectedService: string;
}

const ContactFormWidget: React.FC<Props> = ({ actionProvider, selectedService }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <h4>{selectedService}</h4>

      <input
        type="text"
        placeholder="Your Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
      />

      <input
        type="email"
        placeholder="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
        style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
      />

      <input
        type="tel"
        placeholder="Phone"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
      />

      <button
        onClick={() => actionProvider.submitContactForm({ ...form, service: selectedService })}
        style={{
          padding: "10px",
          background: "#4e8cff",
          color: "#fff",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default ContactFormWidget;
