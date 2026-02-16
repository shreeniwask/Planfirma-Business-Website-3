// src/chatbot/MessageParser.ts
class MessageParser {
  actionProvider: any;

  constructor(actionProvider: any) {
    this.actionProvider = actionProvider;
  }

  parse(message: string) {
    const msg = message.toLowerCase();

    // 1. Greet logic
    if (msg.includes("hi") || msg.includes("hello") || msg.includes("hey")) {
      return this.actionProvider.greet();
    }

    // 2. Service-related keywords
    if (msg.includes("service") || msg.includes("do") || msg.includes("offer") || msg.includes("help")) {
      return this.actionProvider.showServices();
    }

    // 3. Contact/Lead intent
    if (msg.includes("contact") || msg.includes("talk") || msg.includes("hire") || msg.includes("call")) {
      return this.actionProvider.handleContactIntent();
    }

    // 4. Specific service shortcut (e.g., user types "I want an app")
    if (msg.includes("app") || msg.includes("website") || msg.includes("ai")) {
      return this.actionProvider.showLeadForm("Custom Development");
    }

    // 5. Fallback - don't leave them hanging!
    return this.actionProvider.handleUnknown();
  }
}

export default MessageParser;