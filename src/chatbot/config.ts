import { createChatBotMessage } from "react-chatbot-kit";
import ServicesWidget from "./Widgets/ServicesWidget";
import LeadFormWidget from "./Widgets/LeadFormWidget";
import React from "react";
import IConfig from "react-chatbot-kit/build/src/interfaces/IConfig";

const config: IConfig = {
  initialMessages: [
    createChatBotMessage("👋 Welcome to Planfirma!", { widget: "services" }),
  ],
customStyles: {
    botMessageBox: {
      backgroundColor: "#2D993D",
    },
    chatButton: {
      backgroundColor: "#2D993D",
    },
  },
  widgets: [
    {
      widgetName: "services",
      widgetFunc: (props: any) => React.createElement(ServicesWidget, props),
      // Add these two properties
      props: [],
      mapStateToProps: [],
    },
    {
      widgetName: "leadForm",
      widgetFunc: (props: any) =>
        React.createElement(LeadFormWidget, {
          serviceName: props.payload,
          handleSubmitLead: props.actionProvider.handleLeadSubmit,
        }),
      // Add these two properties
      props: [],
      mapStateToProps: [],
    },
  ],
};

export default config;
