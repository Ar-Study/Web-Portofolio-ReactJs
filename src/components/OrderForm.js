import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Whatsapp } from "react-bootstrap-icons";
import { packages, kebutuhanTypes } from "../data/packages";
import { buildWhatsAppLink } from "../config";

const initialDetails = {
  needType: "",
  projectName: "",
  description: "",
  packageName: "",
  budget: "",
};

export const OrderForm = ({ selectedPackage }) => {
  const [formDetails, setFormDetails] = useState(initialDetails);

  useEffect(() => {
    if (selectedPackage) {
      setFormDetails((prev) => ({ ...prev, packageName: selectedPackage }));
    }
  }, [selectedPackage]);

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
  };

  const isFormValid =
    formDetails.needType.trim() &&
    formDetails.projectName.trim() &&
    formDetails.description.trim() &&
    formDetails.packageName.trim() &&
    formDetails.budget.trim();

  const selected = packages.find(
    (p) => p.name === formDetails.packageName
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    const message = [
      "Halo, saya ingin memesan jasa dengan detail berikut:",
      "",
      `*Tipe Kebutuhan*: ${formDetails.needType}`,
      `*Judul Project / Nama Brand*: ${formDetails.projectName}`,
      `*Deskripsi / Kebutuhan*: ${formDetails.description}`,
      `*Paket*: ${formDetails.packageName}`,
      `*Budget*: ${formDetails.budget}`,
    ].join("\n");

    window.open(buildWhatsAppLink(message), "_blank");
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <div className="section-heading">
          <span className="tagline">Form Pemesanan</span>
          <h2>Mulai Project-mu Sekarang</h2>
          <p>
            Isi form di bawah ini, lalu klik kirim. Data pesananmu akan
            langsung terkirim ke WhatsApp admin kami.
          </p>
        </div>
        <div className="order-box">
          <form onSubmit={handleSubmit}>
            <Row>
              <Col size={12} md={6} className="px-1">
                <label>Tipe Kebutuhan</label>
                <select
                  value={formDetails.needType}
                  onChange={(e) => onFormUpdate("needType", e.target.value)}
                >
                  <option value="">-- Pilih Tipe Kebutuhan --</option>
                  {kebutuhanTypes.map((t, i) => (
                    <option key={i} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Col>
              <Col size={12} md={6} className="px-1">
                <label>Judul Project / Nama Brand</label>
                <input
                  type="text"
                  value={formDetails.projectName}
                  placeholder="cth: Web Profil Toko Kopi"
                  onChange={(e) => onFormUpdate("projectName", e.target.value)}
                />
              </Col>
              <Col size={12} className="px-1">
                <label>Deskripsi / Kebutuhan</label>
                <textarea
                  rows="5"
                  value={formDetails.description}
                  placeholder="Jelaskan kebutuhan project-mu secara singkat..."
                  onChange={(e) => onFormUpdate("description", e.target.value)}
                ></textarea>
              </Col>
              <Col size={12} md={6} className="px-1">
                <label>Pilih Paket</label>
                <select
                  value={formDetails.packageName}
                  onChange={(e) => onFormUpdate("packageName", e.target.value)}
                >
                  <option value="">-- Pilih Paket --</option>
                  {packages.map((pkg, i) => (
                    <option key={i} value={pkg.name}>
                      {pkg.name} ({pkg.type})
                    </option>
                  ))}
                </select>
                {selected && (
                  <p className="pkg-preview">
                    {selected.price} • {selected.duration}
                  </p>
                )}
              </Col>
              <Col size={12} md={6} className="px-1">
                <label>Budget</label>
                <input
                  type="text"
                  value={formDetails.budget}
                  placeholder="cth: Rp 1.500.000"
                  onChange={(e) => onFormUpdate("budget", e.target.value)}
                />
              </Col>
              <Col size={12} className="px-1 text-center">
                <button type="submit" className="whatsapp-submit">
                  <Whatsapp size={24} />
                  {isFormValid
                    ? "Kirim via WhatsApp"
                    : "Lengkapi Form Terlebih Dahulu"}
                </button>
                {!isFormValid && (
                  <span className="form-warning">
                    Mohon lengkapi semua field di atas sebelum mengirim.
                  </span>
                )}
              </Col>
            </Row>
          </form>
        </div>
      </Container>
    </section>
  );
};