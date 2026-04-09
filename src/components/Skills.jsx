import React from "react";

const iconMap = {
  C: "c",
  "C++": "cplusplus",
  Python: "python",
  JavaScript: "javascript",
  "React.js": "react",
  "Node.js": "nodedotjs",
  "Next.js": "nextdotjs",
  "Tailwind CSS": "tailwindcss",
  MongoDB: "mongodb",
  "Express.js": "express",
  Git: "git",
  GitHub: "github",
  SQL: "mysql",
  Supabase: "supabase",
  Firebase: "firebase",
  DSA: "gitbook",
  OOP: "visualstudiocode",
  OS: "linux",
  DBMS: "postgresql",
  Regression: "databricks",
  Classification: "scikitlearn",
  "Basics of NLP": "openai",
  "Deep Learning": "pytorch",
  HTML: "html5",
  CSS: "css3",
};

const Skills = ({ skills }) => {
  return (
    <div
      className="skills-wrapper-grid"
      style={{ display: "grid", gridTemplateColumns: "1fr", gap: "80px" }}
    >
      {skills?.map((group, idx) => (
        <div key={idx} style={{ position: "relative" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginBottom: "40px",
            }}
          >
            <h3
              style={{
                fontSize: "0.9rem",
                fontWeight: "900",
                color: "#fff",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              {group.category}
            </h3>
            <div
              style={{
                flexGrow: 1,
                height: "1px",
                background:
                  "linear-gradient(90deg, var(--neon-accent) 0%, transparent 100%)",
                opacity: 0.1,
              }}
            ></div>
          </div>

          <div className="arsenal-grid">
            {group.items.map((item, i) => {
              const slug =
                iconMap[item] ||
                item
                  .toLowerCase()
                  .replace(/\s/g, "")
                  .replace("basics-of-", "")
                  .replace(".js", "");
              return (
                <div
                  key={i}
                  className="premium-card"
                  style={{
                    padding: "30px 20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "15px",
                    transition: "all 0.5s cubic-bezier(0.19, 1, 0.22, 1)",
                    background: "rgba(255,255,255,0.01)",
                    border: "1px solid rgba(255,255,255,0.03)",
                    borderRadius: "2px",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(0, 255, 159, 0.2)";
                    e.currentTarget.style.background =
                      "rgba(0, 255, 159, 0.03)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.03)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.01)";
                  }}
                >
                  <img
                    src={`https://cdn.simpleicons.org/${slug}`}
                    alt={item}
                    style={{
                      width: "32px",
                      height: "32px",
                      filter: "grayscale(1) brightness(1.3)",
                      transition: "0.4s",
                      opacity: 0.7,
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.filter =
                        "grayscale(0) brightness(1)";
                      e.currentTarget.style.opacity = "1";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.filter =
                        "grayscale(1) brightness(1.3)";
                      e.currentTarget.style.opacity = "0.7";
                    }}
                    onError={(e) => {
                      // Try to search for a generic brand or fallback to white code icon
                      e.currentTarget.src = `https://cdn.simpleicons.org/codecademy/ffffff`;
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.6rem",
                      color: "rgba(255,255,255,0.3)",
                      fontWeight: "800",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {item}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
