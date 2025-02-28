// src/components/ParticleBackground.js
import React from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    // Cargar la configuración completa de las partículas
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    // Callback cuando las partículas están cargadas
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#006400", // Verde botella suave
          },
        },
        particles: {
          color: {
            value: "#A9A9A9", // Gris claro
          },
          links: {
            color: "#A9A9A9", // Gris claro para los enlaces de las partículas
          },
          move: {
            directions: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 0.5, // Velocidad de las partículas
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 50, // Número de partículas
          },
          opacity: {
            value: 0.5, // Opacidad de las partículas
          },
          size: {
            random: true,
            value: 3, // Tamaño de las partículas
          },
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      }}
    />
  );
};

export default ParticleBackground;
