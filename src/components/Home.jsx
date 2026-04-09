import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Home = ({ profile }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["FULLSTACK DEVELOPER", "AI ENGINEER", "SYSTEM ARCHITECT"];

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.2, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      variants={containerVars}
      initial="hidden"
      animate="visible"
      style={{ position: "relative" }}
    >
      <div className="hero-stack" style={{ marginBottom: "40px" }}>
        <motion.span variants={itemVars} className="hero-large">
          ENGINEER
        </motion.span>
        <motion.span variants={itemVars} className="hero-large hero-bg-layer">
          ARCHITECT.
        </motion.span>
        <motion.span variants={itemVars} className="hero-large neon-glow-text">
          JEET.
        </motion.span>
      </div>

      <div className="responsive-grid" style={{ alignItems: "flex-start" }}>
        <div>
          <motion.div variants={itemVars} style={{ marginBottom: "48px" }}>
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                style={{
                  fontSize: "0.8rem",
                  color: "var(--neon-accent)",
                  fontWeight: "800",
                  letterSpacing: "0.3em",
                  marginBottom: "20px",
                }}
              >
                {roles[roleIndex]}
              </motion.p>
            </AnimatePresence>

            <p
              style={{
                fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
                lineHeight: "1.8",
                color: "var(--neon-text-dim)",
                maxWidth: "520px",
              }}
            >
              Hi, I'm{" "}
              <span style={{ color: "#fff", fontWeight: "bold" }}>
                Jeet Thakrar
              </span>
              . I build scalable, high-performance digital systems for modern
              applications.
            </p>
          </motion.div>

          <motion.div
            variants={itemVars}
            style={{
              display: "flex",
              gap: "24px",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <a href="#projects" className="neon-btn">
              VIEW WORK
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
            <div style={{ display: "flex", gap: "24px" }}>
              {["github", "linkedin", "leetcode"].map((icon) => (
                <a
                  key={icon}
                  href={profile.socialLinks?.[icon]}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={`https://cdn.simpleicons.org/${icon}/d0d0d0`}
                    alt={icon}
                    style={{
                      width: "22px",
                      height: "22px",
                      opacity: 0.6,
                      transition: "0.3s",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.opacity = 1;
                      e.currentTarget.src = `https://cdn.simpleicons.org/${icon}/ffffff`;
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.opacity = 0.6;
                      e.currentTarget.src = `https://cdn.simpleicons.org/${icon}/d0d0d0`;
                    }}
                    onError={(e) => {
                      if (icon === "linkedin") {
                        e.currentTarget.src =
                          "https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg";
                        e.currentTarget.style.filter =
                          "grayscale(1) brightness(0.7)";
                      }
                    }}
                  />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVars} className="status-card-wrapper">
          <div
            className="neon-card"
            style={{
              borderLeft: "3px solid var(--neon-accent)",
              minWidth: "min(100%, 350px)",
            }}
          >
            <h3
              style={{
                fontSize: "0.75rem",
                color: "var(--neon-accent)",
                marginBottom: "32px",
                letterSpacing: "0.2em",
              }}
            >
              SYSTEM_STATUS
            </h3>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            >
              {[
                { label: "ARCHITECTURE", val: "MERN / Cloud Native" },
                { label: "INTELLIGENCE", val: "AI/ML Enabled" },
                { label: "STATUS", val: "OPERATIONAL", dot: true },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "20px",
                    borderBottom:
                      idx !== 2 ? "1px solid var(--neon-border)" : "none",
                    paddingBottom: idx !== 2 ? "12px" : "0",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.7rem",
                      color: "var(--neon-text-dim)",
                    }}
                  >
                    {item.label}
                  </span>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    {item.dot && <span className="status-dot"></span>}
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: "bold",
                        color: item.dot ? "var(--neon-accent)" : "#fff",
                        textAlign: "right",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.val}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
