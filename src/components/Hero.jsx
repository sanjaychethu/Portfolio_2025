import React from "react";
import TypingEffect from "react-typing-effect";

const Hero = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #0f172a, #1e293b)",
        color: "white",
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      {/* Starfield Animation */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "transparent",
          zIndex: -1,
          animation: "stars 60s linear infinite",
        }}
      >
        {[...Array(300)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              backgroundColor: "white",
              borderRadius: "50%",
              opacity: Math.random() * 0.5 + 0.5,
              animation: `starRotate ${Math.random() * 30 + 40}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`, // Random delay for variation
              animationName: "sparkle", // Sparkle effect animation
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div
        style={{
          zIndex: 1,
          textAlign: "center",
          fontSize: "1.8rem", // Reduced font size for aesthetic appeal
          fontWeight: "600",
          lineHeight: "1.4",
          letterSpacing: "0.05em",
          marginBottom: "2rem",
        }}
      >
        <h1
          style={{
            fontSize: "3rem", // Smaller and more refined title font size
            fontWeight: "700",
            marginBottom: "0.5rem",
            letterSpacing: "0.1rem",
          }}
        >
          <TypingEffect
            text={["Hello, I'm Sanjay", "A Passionate Developer"]}
            speed={100} // Speed of typing effect
            eraseDelay={1500} // Delay before erasing the text
            typingDelay={500} // Delay before typing begins
            cursorColor="#14b8a6" // Cursor color
          />
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            marginBottom: "2.5rem", // Slightly increased margin for spacing
            opacity: 0.8,
          }}
        >
          I build web applications, explore AI technologies, and love solving real-world problems with code.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}>
          <a
            href="#projects"
            style={{
              padding: "0.9rem 2rem",
              backgroundColor: "#0d9488",
              color: "white",
              borderRadius: "0.5rem",
              textDecoration: "none",
              fontWeight: "500",
              fontSize: "1rem", // Adjusted button font size
              transition: "transform 0.2s, background-color 0.2s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#050816")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#0d9488")}
          >
            View My Projects
          </a>
          <a
            href="#contact"
            style={{
              padding: "0.9rem 2rem",
              border: "2px solid #0d9488",
              color: "#ffffff",
              borderRadius: "0.5rem",
              textDecoration: "none",
              fontWeight: "500",
              fontSize: "1rem", // Adjusted button font size
              transition: "transform 0.2s, background-color 0.2s, color 0.2s",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#050816";
              e.target.style.color = "white";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#ffffff";
            }}
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div style={{ marginTop: "3rem", display: "flex", justifyContent: "center" }}>
        <img
          src="src/assets/company/logo1.png"
          alt="Profile"
          style={{
            width: "8rem", // Reduced profile image size
            height: "8rem",
            borderRadius: "50%",
            border: "4px solid #ffffff",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.2s",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        />
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          textAlign: "center",
          color: "#cbd5e1",
          zIndex: 1,
        }}
      >
        <p style={{ fontSize: "0.875rem" }}>
          © {new Date().getFullYear()} Sanjay | Built with 💻 and ❤️
        </p>
      </div>

      {/* Keyframes for Star Animation */}
      <style>
        {`
          @keyframes stars {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-100%);
            }
          }

          @keyframes starRotate {
            0% {
              transform: rotate(0deg) translateX(150px) rotate(0deg);
            }
            100% {
              transform: rotate(360deg) translateX(150px) rotate(-360deg);
            }
          }

          @keyframes sparkle {
            0% {
              opacity: 0.6;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.5);
            }
            100% {
              opacity: 0.6;
              transform: scale(1);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
