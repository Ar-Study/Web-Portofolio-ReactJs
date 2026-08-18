import { Container, Row, Col } from "react-bootstrap";
import { Check2Circle, ArrowRight } from "react-bootstrap-icons";
import { packages } from "../data/packages";

export const Services = ({ onChoose }) => {
  return (
    <section className="services" id="paket">
      <Container>
        <div className="section-heading">
          <span className="tagline">Layanan & Harga</span>
          <h2>Pilih Paket Sesuai Kebutuhanmu</h2>
          <p>
            Tersedia 4 pilihan paket dengan harga promosi. Setiap paket sudah
            termasuk domain gratis, hosting, dan garansi pengerjaan.
          </p>
        </div>
        <Row>
          {packages.map((pkg) => (
            <Col size={12} sm={6} lg={3} key={pkg.id}>
              <div
                className={`pricing-card ${
                  pkg.popular ? "popular" : ""
                } d-flex flex-column`}
              >
                {pkg.popular && <span className="badge-popular">Paling Laris</span>}
                <div className="pricing-head">
                  <h3>{pkg.name}</h3>
                  <span className="pkg-type">{pkg.type}</span>
                </div>
                <div className="pricing-body">
                  <div className="pkg-section">
                    <strong>Cocok Untuk</strong>
                    <p>{pkg.forWhom}</p>
                  </div>
                  <div className="pkg-section">
                    <strong>Fitur Utama</strong>
                    <ul>
                      {pkg.features.map((f, i) => (
                        <li key={i}>
                          <Check2Circle /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pkg-section price-row">
                    <strong>Harga Promosi</strong>
                    <span className="pkg-price">{pkg.price}</span>
                  </div>
                  <div className="pkg-section">
                    <strong>Waktu Pengerjaan</strong>
                    <span className="pkg-duration">{pkg.duration}</span>
                  </div>
                </div>
                <button
                  className="pricing-btn"
                  onClick={() => onChoose && onChoose(pkg.name)}
                >
                  Pilih Paket Ini <ArrowRight />
                </button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};