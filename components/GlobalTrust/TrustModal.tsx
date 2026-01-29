"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certificates } from "./certificates";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const TrustModal = ({ open, onClose }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // ESC close
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="
            fixed inset-0 z-[100]
            bg-black/45 backdrop-blur-sm
            flex items-center justify-center
            px-4
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.94, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="
              w-full max-w-xl
              rounded-2xl bg-white
              p-8 shadow-2xl outline-none
            "
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Certifications & Compliance
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  className="flex flex-col items-center text-center"
                >
                  <img
                    src={cert.src}
                    alt={cert.name}
                    className="h-16 object-contain mb-3"
                  />
                  <h4 className="text-sm font-semibold">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={onClose}
              className="
                mt-8 w-full rounded-lg
                bg-emerald-600 text-white
                py-2.5 text-sm font-medium
                hover:bg-emerald-700 transition
              "
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
