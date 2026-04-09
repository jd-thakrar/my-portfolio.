import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

// Components
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    fetch("/api/profile")
      .then((res) => res.json())
      .then((data) => {
        setProfileData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching profile:", err);
        setLoading(false);
      });
  }, []);

  if (loading || !profileData) return null;

  return (
    <>
      <div className="futuristic-grid" />

      <motion.div
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "var(--neon-accent)",
          transformOrigin: "0%",
          zIndex: 3000,
          boxShadow: "0 0 10px var(--neon-accent)",
        }}
      />

      <div className="header-wrapper" style={{ paddingTop: "20px" }}>
        <div style={{ pointerEvents: "auto" }}>
          <a
            href="#home"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "15px",
              group: "true",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                border: "1px solid var(--neon-accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "4px",
                background: "rgba(0, 255, 159, 0.03)",
                transition: "0.3s",
              }}
              className="logo-box"
            >
              <span
                style={{
                  color: "#ffffffff",
                  fontSize: "0.9rem",
                  fontWeight: "900",
                  letterSpacing: "-0.05em",
                }}
              >
                JD
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  color: "#fff",
                  fontSize: "0.65rem",
                  fontWeight: "800",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                }}
              >
                JEET_THAKRAR
              </span>
              <div
                style={{
                  width: "10px",
                  height: "1px",
                  background: "var(--neon-accent)",
                  marginTop: "4px",
                }}
              ></div>
            </div>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="nav-links">
          {["Skills", "Projects", "Experience", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                color: "rgba(255,255,255,0.4)",
                textDecoration: "none",
                fontSize: "0.7rem",
                fontMono: "var(--font-mono)",
                fontWeight: "800",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseOut={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.4)")
              }
            >
              {link}
            </a>
          ))}
        </nav>
      </div>

      <main>
        {[
          { id: "home", component: <Home profile={profileData} /> },
          {
            id: "skills",
            label: "THE ARSENAL",
            component: <Skills skills={profileData.skills} />,
          },
          {
            id: "projects",
            label: "SELECTED WORKS",
            component: <Projects projects={profileData.projects} />,
          },
          {
            id: "experience",
            label: "THE TRAJECTORY",
            component: (
              <Experience
                experience={profileData.experience}
                achievements={profileData.achievements}
              />
            ),
          },
          {
            id: "education",
            label: "FOUNDATIONS",
            component: <Education education={profileData.education} />,
          },
          { id: "contact", label: "NEW CHAPTER", component: <Contact /> },
        ].map((sec) => (
          <section
            id={sec.id}
            key={sec.id}
            style={{
              minHeight:
                sec.id === "experience" ||
                sec.id === "education" ||
                sec.id === "contact"
                  ? "auto"
                  : "100vh",
              display: "flex",
              alignItems: "center",
              padding:
                sec.id === "experience" ||
                sec.id === "education" ||
                sec.id === "contact"
                  ? "0 0 120px 0"
                  : "120px 0",
            }}
          >
            <div className="container">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {sec.label && (
                  <div
                    style={{
                      marginBottom: "60px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        height: "3px",
                        width: "20px",
                        background: "var(--neon-accent)",
                      }}
                    ></div>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: "800",
                        color: "var(--neon-accent)",
                        letterSpacing: "0.4em",
                        textTransform: "uppercase",
                      }}
                    >
                      {sec.label}
                    </span>
                  </div>
                )}
                {sec.component}
              </motion.div>
            </div>
          </section>
        ))}
      </main>

      <footer
        style={{
          padding: "40px 60px",
          textAlign: "center",
          borderTop: "1px solid var(--neon-border)",
          color: "#ffffff",
          fontSize: "0.7rem",
          letterSpacing: "0.2em",
          background: "var(--neon-bg)",
          marginTop: "40px",
          marginBottom: "40px",
        }}
      >
        &copy; 2026 JEET THAKRAR — DESIGNED FOR THE FUTURE
      </footer>
    </>
  );
}

export default App;
