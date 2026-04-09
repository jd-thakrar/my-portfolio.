import React from "react";

const Experience = ({ experience, achievements }) => {
  return (
    <div className="responsive-grid">
      <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
        {experience?.map((exp, idx) => (
          <div
            key={idx}
            style={{
              paddingLeft: "40px",
              borderLeft: "1px solid var(--sb-border)",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "-5px",
                top: "0",
                width: "9px",
                height: "9px",
                borderRadius: "50%",
                background: "var(--sb-accent)",
                boxShadow: "0 0 10px var(--sb-accent)",
              }}
            ></div>
            <span
              style={{
                fontSize: "0.8rem",
                color: "var(--sb-accent)",
                fontWeight: "800",
                marginBottom: "8px",
                display: "block",
              }}
            >
              {exp.duration}
            </span>
            <h3
              style={{
                fontSize: "2rem",
                fontWeight: "800",
                color: "#fff",
                marginBottom: "10px",
              }}
            >
              {exp.role}
            </h3>
            <h4
              style={{
                fontSize: "1.2rem",
                color: "var(--sb-text-secondary)",
                fontWeight: "500",
                marginBottom: "24px",
              }}
            >
              {exp.company}
            </h4>
            <p
              style={{
                color: "var(--sb-text-secondary)",
                fontSize: "1rem",
                lineHeight: "1.7",
              }}
            >
              {exp.description}
            </p>
          </div>
        ))}
      </div>

      <div className="premium-card">
        <h3
          style={{
            fontSize: "0.8rem",
            color: "var(--sb-accent)",
            marginBottom: "40px",
            letterSpacing: "0.3em",
          }}
        >
          CORE_HIGHLIGHTS
        </h3>
        {achievements?.map((ach, idx) => (
          <div
            key={idx}
            style={{ marginBottom: "30px", display: "flex", gap: "20px" }}
          >
            <span style={{ color: "var(--sb-accent)", fontWeight: "bold" }}>
              &#8212;
            </span>
            <p
              style={{
                color: "var(--sb-text-secondary)",
                fontSize: "1rem",
                lineHeight: "1.6",
              }}
            >
              {ach}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
