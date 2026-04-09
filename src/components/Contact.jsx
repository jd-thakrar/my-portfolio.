import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("TRANSMITTING...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("MANIFEST RECEIVED.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("FAILED.");
      }
    } catch (err) {
      setStatus("OFFLINE.");
    }
  };

  return (
    <div className="foundations-grid">
      <div style={{ marginTop: "-30px" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "800",
            color: "#fff",
            marginBottom: "12px",
          }}
        >
          Let's Start <br />
          <span style={{ color: "var(--neon-accent)" }}>Something.</span>
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.4)",
            fontSize: "1.05rem",
            lineHeight: "1.6",
            marginTop: "0",
          }}
        >
          Ready to architect your next solution? Drop a line into the manifest.
        </p>
      </div>

      <div className="premium-card">
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "24px" }}>
            <label
              style={{
                display: "block",
                fontSize: "0.65rem",
                fontWeight: "800",
                color: "var(--sb-accent)",
                letterSpacing: "0.2em",
                marginBottom: "10px",
              }}
            >
              NAME
            </label>
            <input
              type="text"
              style={{
                width: "100%",
                background: "transparent",
                border: "none",
                borderBottom: "1px solid var(--sb-border)",
                padding: "12px 0",
                color: "#fff",
                outline: "none",
                fontSize: "1.1rem",
              }}
              placeholder="YOUR IDENTITY"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div style={{ marginBottom: "24px" }}>
            <label
              style={{
                display: "block",
                fontSize: "0.65rem",
                fontWeight: "800",
                color: "var(--sb-accent)",
                letterSpacing: "0.2em",
                marginBottom: "10px",
              }}
            >
              EMAIL
            </label>
            <input
              type="email"
              style={{
                width: "100%",
                background: "transparent",
                border: "none",
                borderBottom: "1px solid var(--sb-border)",
                padding: "12px 0",
                color: "#fff",
                outline: "none",
                fontSize: "1.1rem",
              }}
              placeholder="EMAIL_ADDR"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div style={{ marginBottom: "40px" }}>
            <label
              style={{
                display: "block",
                fontSize: "0.65rem",
                fontWeight: "800",
                color: "var(--sb-accent)",
                letterSpacing: "0.2em",
                marginBottom: "10px",
              }}
            >
              MANIFEST
            </label>
            <textarea
              style={{
                width: "100%",
                background: "transparent",
                border: "none",
                borderBottom: "1px solid var(--sb-border)",
                padding: "12px 0",
                color: "#fff",
                outline: "none",
                fontSize: "1.1rem",
                resize: "none",
              }}
              rows="3"
              placeholder="DETAILS"
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn-emerald"
            style={{ width: "100%", justifyContent: "center" }}
          >
            TRANSMIT MESSAGE
          </button>
        </form>

        {status && (
          <p
            style={{
              marginTop: "24px",
              color: "var(--sb-accent)",
              fontSize: "0.7rem",
              textAlign: "center",
              fontWeight: "800",
            }}
          >
            {status}
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
