// src/chatbot/MessageParser.ts

class MessageParser {
  actionProvider: any;
  state: any;

  constructor(actionProvider: any, state: any) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message: string) {
    const msg = message.toLowerCase();

    if (msg.includes("hi") || msg.includes("hello")) {
      // default: show services
      if (this.actionProvider.showServices) {
         this.actionProvider.showServices();
      }
    }
  }
}

export default MessageParser;