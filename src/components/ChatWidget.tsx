// src/components/ChatWidget.tsx

import { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import config from "../chatbot/config";
import MessageParser from "../chatbot/MessageParser";
import ActionProvider from "../chatbot/ActionProvider";

const ChatWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "55px",
          height: "55px",
          borderRadius: "50%",
          background: "#2d993d",
          border: "none",
          color: "white",
          fontSize: "22px",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          zIndex: 999,
        }}
      >
        {open ? "×" : "💬"}
      </button>

      {/* Chat Popup */}
      <div
        style={{
          position: "fixed",
          bottom: open ? "90px" : "-500px",
          right: "20px",
          width: "275px",
          height: "500px",       // height increased
          background: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          transition: "0.35s ease",
          overflow: "auto",      // <-- FIX
          zIndex: 10000,
        }}
      >
        <Chatbot
          config={config as any}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
    </>
  );
};

export default ChatWidget;