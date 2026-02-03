"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { certificates } from "./certificates";
import { TrustModal } from "./TrustModal";
import { trackTrustEvent } from "./analytics";

export const GlobalTrustDock = () => {
  const [open, setOpen] = useState(false);

  const openDialog = () => {
    setOpen(true);
    trackTrustEvent("trust_open");
  };

  return (
    <>
      {/* 🌐 Global — Mobile / Tablet / Desktop Trust Rail */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35 }}
        className="
                flex fixed z-50
                right-2 md:right-5
                bottom-[12%]

                flex-col items-center gap-4 md:gap-5
                px-2 py-4 md:px-4 md:py-6
                rounded-2xl

                /* Glassmorphism */
                bg-gradient-to-br from-white/80 to-white/55
                backdrop-blur-xl
                border border-white/60

                /* Natural depth */
                shadow-[0_10px_30px_rgba(0,0,0,0.12),0_1px_0_rgba(255,255,255,0.6)]
                "
      >
        {certificates.map((cert) => (
          <img
            key={cert.id}
            src={cert.src}
            alt={cert.name}
            title={cert.name}
            onClick={openDialog}
            className="
              cursor-pointer
              h-10 md:h-14 w-auto
              object-contain

              opacity-95
              transition-transform duration-300
              hover:scale-105
            "
          />
        ))}
      </motion.div>

      <TrustModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};
