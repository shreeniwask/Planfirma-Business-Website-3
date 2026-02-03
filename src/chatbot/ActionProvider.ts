// src/chatbot/ActionProvider.ts

class ActionProvider {
  createChatBotMessage: any;
  setState: any;
  createClientMessage: any;
  state: any;
  children: any;

  constructor(createChatBotMessage: any, setStateFunc: any, createClientMessage: any, state: any, children: any) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.state = state;
    this.children = children;
  }

  showLeadForm = (serviceName: string) => {
    const msg = this.createChatBotMessage(
      `Please fill your details for: ${serviceName}`,
      {
        widget: "leadForm",
        payload: serviceName,
      }
    );

    this.setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, msg],
    }));
  };

  handleLeadSubmit = async (data: {
    name: string;
    email: string;
    phone: string;
    service: string;
  }) => {
    try {
      // CHANGED: Pointing directly to FormSubmit API
      // Make sure to use the email address you want to receive leads at
      const res = await fetch("https://formsubmit.co/ajax/info@planfirma.com", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json" // IMPORTANT: This prevents page redirects
        },
        body: JSON.stringify({
            ...data, // Spreads name, email, phone, service
            _subject: `New Chatbot Lead: ${data.name}`, // Custom email subject
            _captcha: "false" // Disables the puzzle for a smoother chat experience
        }),
      });

      const result = await res.json();

      // CHANGED: FormSubmit returns "success": "true" (string)
      if (result.success === "true") {
        const msg = this.createChatBotMessage(
          "Thank you! Our team will get back to you shortly."
        );
        this.setState((prev: any) => ({
          ...prev,
          messages: [...prev.messages, msg],
        }));
      } else {
        const msg = this.createChatBotMessage(
          "Something went wrong. Please try again."
        );
        this.setState((prev: any) => ({
          ...prev,
          messages: [...prev.messages, msg],
        }));
      }
    } catch (err) {
      console.error(err);
      const msg = this.createChatBotMessage(
        "Network error. Please try again later."
      );
      this.setState((prev: any) => ({
        ...prev,
        messages: [...prev.messages, msg],
      }));
    }
  };

  // handleLeadSubmit = async (data: {
  //   name: string;
  //   email: string;
  //   phone: string;
  //   service: string;
  // }) => {
  //   try {
  //     const res = await fetch("http://localhost:5000/api/send-lead", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(data),
  //     });

  //     const result = await res.json();

  //     if (result.status === "success") {
  //       const msg = this.createChatBotMessage(
  //         "✅ Thank you! Our team will get back to you shortly."
  //       );
  //       this.setState((prev: any) => ({
  //         ...prev,
  //         messages: [...prev.messages, msg],
  //       }));
  //     } else {
  //       const msg = this.createChatBotMessage(
  //         "⚠️ Something went wrong. Please try again."
  //       );
  //       this.setState((prev: any) => ({
  //         ...prev,
  //         messages: [...prev.messages, msg],
  //       }));
  //     }
  //   } catch (err) {
  //     const msg = this.createChatBotMessage(
  //       "🚫 Server error. Please try again later."
  //     );
  //     this.setState((prev: any) => ({
  //       ...prev,
  //       messages: [...prev.messages, msg],
  //     }));
  //   }
  // };
}

export default ActionProvider;