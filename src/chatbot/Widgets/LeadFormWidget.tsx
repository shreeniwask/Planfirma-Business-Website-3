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

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {
      name: "",
      email: "",
      phone: "",
    };

    let isValid = true;

    // Name Validation
    const trimmedName = name.trim();

    if (!trimmedName) {
      newErrors.name = "Full name is required";
      isValid = false;
    } else if (trimmedName.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      isValid = false;
    } else if (trimmedName.length > 100) {
      newErrors.name = "Name cannot exceed 100 characters";
      isValid = false;
    } else if (!/^[a-zA-Z\s'-]+$/.test(trimmedName)) {
      newErrors.name =
        "Name can only contain letters, spaces, apostrophes and hyphens";
      isValid = false;
    }

    // Email Validation
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (trimmedEmail.length > 254) {
      newErrors.email = "Email is too long";
      isValid = false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(trimmedEmail)
    ) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Phone Validation
    const cleanedPhone = phone.replace(/\D/g, "");

    if (!cleanedPhone) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d+$/.test(cleanedPhone)) {
      newErrors.phone = "Phone number must contain only digits";
      isValid = false;
    } else if (cleanedPhone.length !== 10) {
      newErrors.phone = "Phone number must be exactly 10 digits";
      isValid = false;
    } else if (!/^[6-9]\d{9}$/.test(cleanedPhone)) {
      newErrors.phone =
        "Please enter a valid Indian mobile number";
      isValid = false;
    }

    setErrors(newErrors);

    return isValid;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setIsSubmitting(true);

      await handleSubmitLead({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        service: serviceName,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={submit}
      style={{
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "6px",
      }}
      noValidate
    >
      <h5>Fill your details for {serviceName}</h5>

      {/* Name */}
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        maxLength={100}
        onChange={(e) => setName(e.target.value)}
        style={{
          width: "100%",
          marginBottom: "4px",
          padding: "6px",
        }}
      />

      {errors.name && (
        <div
          style={{
            color: "#dc2626",
            fontSize: "12px",
            marginBottom: "8px",
          }}
        >
          {errors.name}
        </div>
      )}

      {/* Email */}
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        maxLength={254}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "100%",
          marginBottom: "4px",
          padding: "6px",
        }}
      />

      {errors.email && (
        <div
          style={{
            color: "#dc2626",
            fontSize: "12px",
            marginBottom: "8px",
          }}
        >
          {errors.email}
        </div>
      )}

      {/* Phone */}
      <input
        type="tel"
        placeholder="Phone Number"
        value={phone}
        maxLength={10}
        inputMode="numeric"
        pattern="[0-9]*"
        onChange={(e) => {
          const value = e.target.value.replace(/\D/g, "");
          setPhone(value.slice(0, 10));
        }}
        style={{
          width: "100%",
          marginBottom: "4px",
          padding: "6px",
        }}
      />

      {errors.phone && (
        <div
          style={{
            color: "#dc2626",
            fontSize: "12px",
            marginBottom: "8px",
          }}
        >
          {errors.phone}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        style={{
          width: "100%",
          padding: "8px",
          borderRadius: "6px",
          backgroundColor: isSubmitting
            ? "#9ca3af"
            : "#2D993D",
          color: "#fff",
          cursor: isSubmitting ? "not-allowed" : "pointer",
          border: "none",
        }}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default LeadFormWidget;