import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; // Importing the icons

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div
      className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 w-full justify-center items-center"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        width: "100%",
      }}
    >
      {/* Contact Section */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] p-8 rounded-2xl flex flex-col justify-center items-center"
        style={{
          flex: "0.75",
          padding: "2rem",
          borderRadius: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          backgroundColor: "transparent",
        }}
      >
        <p className={styles.sectionSubText}>Let's Connect</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        {/* Animated Contact Icons and Names */}
        <motion.div
          className="flex flex-col gap-8 mt-12 justify-center items-center"
          style={{
            gap: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* LinkedIn Icon */}
          <motion.a
            href="https://www.linkedin.com/in/v-sanjay7/" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="contact-box"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "15px 20px",
              background: "#2a2a40", // Dark background for the box
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.8)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              width: "250px",
            }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.6)",
            }}
          >
            <FaLinkedin size={40} color="#ffffff" />
            <span
              style={{
                color: "white",
                fontSize: "20px",
                marginLeft: "15px",
              }}
            >
              LinkedIn
            </span>
          </motion.a>

          {/* GitHub Icon */}
          <motion.a
            href="https://github.com/sanjaychethu" // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="contact-box"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "15px 20px",
              background: "#2a2a40", // Dark background for the box
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.8)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              width: "250px",
            }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.6)",
            }}
          >
            <FaGithub size={40} color="#ffffff" />
            <span
              style={{
                color: "white",
                fontSize: "20px",
                marginLeft: "15px",
              }}
            >
              GitHub
            </span>
          </motion.a>

          {/* Email Icon */}
          <motion.a
            href="mailto:v.sanjay9380@gmail.com" // Replace with your email
            target="_blank"
            rel="noopener noreferrer"
            className="contact-box"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "15px 20px",
              background: "#2a2a40", // Dark background for the box
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.8)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              width: "250px",
            }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.6)",
            }}
          >
            <FaEnvelope size={40} color="#ffffff" />
            <span
              style={{
                color: "white",
                fontSize: "20px",
                marginLeft: "15px",
              }}
            >
              Email
            </span>
          </motion.a>
        </motion.div>
      </motion.div>

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
    </div>
  );
};

export default SectionWrapper(Contact, "contact");