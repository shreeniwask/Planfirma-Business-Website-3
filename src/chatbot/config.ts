import { createChatBotMessage } from "react-chatbot-kit";
import ServicesWidget from "./Widgets/ServicesWidget";
import LeadFormWidget from "./Widgets/LeadFormWidget";
import React from "react";

const config = {
  initialMessages: [
    createChatBotMessage("👋 Welcome to Planfirma!", { widget: "services" }),
  ],

  widgets: [
    {
      widgetName: "services",
      widgetFunc: (props: any) => React.createElement(ServicesWidget, props),
    },
    {
      widgetName: "leadForm",
      widgetFunc: (props: any) =>
        React.createElement(LeadFormWidget, {
          serviceName: props.payload,
          handleSubmitLead: props.actionProvider.handleLeadSubmit,
        }),
    },
  ],
};

export default config;
