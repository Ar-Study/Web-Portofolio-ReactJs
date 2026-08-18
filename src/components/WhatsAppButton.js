import { useState } from "react";
import { Whatsapp } from "react-bootstrap-icons";
import { WA_NUMBER } from "../config";

export const WhatsAppButton = () => {
  const [showLabel, setShowLabel] = useState(false);

  return (
    <a
      className={`wa-float ${showLabel ? "open" : ""}`}
      href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
        "Halo, saya tertarik dengan layanan pembuatan website/aplikasi. Boleh tanya-tanya?"
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setShowLabel(true)}
      onMouseLeave={() => setShowLabel(false)}
      onFocus={() => setShowLabel(true)}
      onBlur={() => setShowLabel(false)}
      aria-label="Chat via WhatsApp"
    >
      <span className="wa-label">Chat Admin di WhatsApp</span>
      <span className="wa-icon">
        <Whatsapp size={32} />
      </span>
    </a>
  );
};