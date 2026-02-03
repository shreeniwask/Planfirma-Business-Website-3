import React, { useState } from "react";

const LeadFormWidget = ({
  serviceName,
  handleSubmitLead,
}: {
  serviceName: string;
  handleSubmitLead: Function;
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault(); // prevents page reload
    handleSubmitLead({ name, email, phone, service: serviceName });
  };

  return (
    <form onSubmit={submit} style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "6px" }}>
      <h5>Fill your details for {serviceName}</h5>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{ width: "100%", marginBottom: "6px", padding: "6px" }}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{ width: "100%", marginBottom: "6px", padding: "6px" }}
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        style={{ width: "100%", marginBottom: "6px", padding: "6px" }}
      />
      <button type="submit" style={{ width: "100%", padding: "8px", borderRadius: "6px", backgroundColor: "#2D993D", color: "#fff", cursor: "pointer" }}>
        Submit
      </button>
    </form>
  );
};

export default LeadFormWidget;
