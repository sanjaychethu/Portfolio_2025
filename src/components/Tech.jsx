import React from "react";


const techStack = [
  { name: "Java", logo: "https://cdn.worldvectorlogo.com/logos/java-4.svg" },
  { name: "Python", logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
  { name: "C", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" },
  { name: "HTML", logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
{ name: "CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" }, 

  { name: "TypeScript", logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
  { name: "JavaScript", logo: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
  { name: "React", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  { name: "Next.js", logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
  { name: "Node.js", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-1.svg" },
  { name: "MongoDB", logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
 

];

const Tech = () => {
  const styles = {
    container: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
      padding: "20px",
      textAlign: "center",
    },
    techCard: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100px",
      padding: "15px",
      backgroundColor: "#2a2a40", // Dark card background
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
      transition: "transform 0.3s ease, background-color 0.3s ease",
    },
    logo: {
      width: "50px",
      height: "50px",
      marginBottom: "10px",
      filter: "drop-shadow(0 0 5px rgba(255, 255, 255, 0.5))",
    },
    name: {
      fontSize: "12px",
      fontWeight: "bold",
      color: "#f8f8f8",
    },
  };

  return (
   
    <div style={styles.container}>
      
      {techStack.map((tech) => (
        
        <div
          key={tech.name}
          style={styles.techCard}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.backgroundColor = "#444466";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.backgroundColor = "#2a2a40";
          }}
        >
          <img src={tech.logo} alt={`${tech.name} logo`} style={styles.logo} />
          <span style={styles.name}>{tech.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Tech;