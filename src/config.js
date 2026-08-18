// Ganti nomor WhatsApp di bawah dengan nomor asli Anda (format internasional, tanpa + tanpa spasi)
export const WA_NUMBER = "6281234567890";

export const buildWhatsAppLink = (message) => {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
};