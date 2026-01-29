// src/chatbot/Widgets/ServicesWidget.tsx

import { useState } from "react";
import LeadFormWidget from "./LeadFormWidget";

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

const ServicesWidget = ({ actionProvider }: any) => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleClick = (service: string) => {
    setSelectedService(service); // UI update
    actionProvider.showLeadForm(service); // chatbot message (optional)
  };

  return (
    <div style={{ padding: 10 }}>
      <h4>Select a service:</h4>

      {services.map((s, i) => (
        <div key={i} style={{ marginBottom: "8px" }}>
          <button
            type="button"
            onClick={() => handleClick(s)}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "6px",
              cursor: "pointer",
              border: selectedService === s ? "2px solid #007bff" : "1px solid #ccc",
              backgroundColor: selectedService === s ? "#e6f0ff" : "#fff",
              color: selectedService === s ? "#007bff" : "#000",
              transition: "0.3s",
            }}
          >
            {s}
          </button>

          {/* Show LeadForm below selected button */}
          {selectedService === s && (
            <div style={{ marginTop: "8px" }}>
              <LeadFormWidget
                serviceName={s}
                handleSubmitLead={actionProvider.handleLeadSubmit}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ServicesWidget;