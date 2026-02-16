// src/chatbot/ActionProvider.ts

class ActionProvider {
  createChatBotMessage: any;
  setState: any;
  createClientMessage: any;
  state: any;

  constructor(
    createChatBotMessage: any,
    setStateFunc: any,
    createClientMessage: any,
    state: any
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.state = state;
  }

  // Helper to show services explicitly (used by the button clicks or direct "service" keyword)
  showServices = () => {
    const msg = this.createChatBotMessage(
      "Here are the services we offer at Planfirma:",
      { widget: "services" }
    );
    this.updateChatbotState(msg);
  };

  // 1. Greet: Says Hello + Shows Services
  greet = () => {
    const greetingMsg = this.createChatBotMessage("Hello! How can I help you today?");
    const servicesMsg = this.createChatBotMessage(
      "Here is what we can help you with:", 
      { widget: "services" }
    );
    
    // We pass both messages to state so they appear together
    this.updateChatbotState([greetingMsg, servicesMsg]);
  };

  // 2. Contact: Gives info + Shows Services (in case they want something else)
  handleContactIntent = () => {
    const contactMsg = this.createChatBotMessage(
      "You can reach us at info@planfirma.com or call +1-555-0199."
    );
    const servicesMsg = this.createChatBotMessage(
      "Is there a specific service you are interested in?",
      { widget: "services" }
    );

    this.updateChatbotState([contactMsg, servicesMsg]);
  };

  // 3. Unknown: Fallback text + Shows Services
  handleUnknown = () => {
    const unknownMsg = this.createChatBotMessage(
      "I didn't quite get that."
    );
    const servicesMsg = this.createChatBotMessage(
      "Try selecting one of our services below:",
      { widget: "services" }
    );

    this.updateChatbotState([unknownMsg, servicesMsg]);
  };

  // 4. Show Lead Form (remains single message)
  showLeadForm = (serviceName: string) => {
    const msg = this.createChatBotMessage(
      `Please fill your details for: ${serviceName}`,
      {
        widget: "leadForm",
        payload: serviceName,
      }
    );
    this.updateChatbotState(msg);
  };

  // 5. Handle Form Submit
  handleLeadSubmit = async (data: {
    name: string;
    email: string;
    phone: string;
    service: string;
  }) => {
    try {
      const res = await fetch("https://formsubmit.co/ajax/info@planfirma.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          ...data,
          _subject: `New Chatbot Lead: ${data.name}`,
          _captcha: "false",
        }),
      });

      const result = await res.json();

      if (result.success === "true") {
        const msg = this.createChatBotMessage(
          "Thank you! Our team will get back to you shortly."
        );
        this.updateChatbotState(msg);
      } else {
        const msg = this.createChatBotMessage(
          "Something went wrong. Please try again."
        );
        this.updateChatbotState(msg);
      }
    } catch (err) {
      console.error(err);
      const msg = this.createChatBotMessage(
        "Network error. Please try again later."
      );
      this.updateChatbotState(msg);
    }
  };

  // UPDATED STATE HELPER
  // Now accepts either a single message object OR an array of messages
  updateChatbotState = (message: any) => {
    this.setState((prev: any) => {
      // If 'message' is an array (e.g. [greeting, services]), spread it.
      // If it's a single object, put it in an array.
      const newMessages = Array.isArray(message) ? message : [message];

      return {
        ...prev,
        messages: [...prev.messages, ...newMessages],
      };
    });
  };
}

export default ActionProvider;