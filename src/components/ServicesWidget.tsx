// src/components/ServicesWidget.tsx
import React from "react";

type Props = {
  actionProvider: any;
  setState?: any;
};

const services = [
  "AI & Machine Learning",
  "Cybersecurity",
  "Cloud Computing",
  "DevSecOps",
  "Business Intelligence",
  "Mobile App Development",
  "Product Customization",
  "Web & Custom App Development",
  "New Product Development",
  "UI/UX Design",
  "Robotic Process Automation",
  "Re-Engineering (Optimization)",
];

const ServicesWidget: React.FC<Props> = ({ actionProvider }) => {
  return (
    <div style={{ padding: "8px 12px" }}>
      {services.map((s) => (
        <button
          key={s}
          onClick={() => actionProvider.handleServiceClick(s)}
          style={{
            display: "block",
            width: "100%",
            textAlign: "left",
            padding: "8px 10px",
            marginBottom: "8px",
            borderRadius: "6px",
            border: "1px solid #eee",
            background: "#f7f9ff",
            cursor: "pointer",
          }}
        >
          {s}
        </button>
      ))}
    </div>
  );
};

export default ServicesWidget;
