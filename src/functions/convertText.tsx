import React from 'react'

/**
* @function convertText
* @description Realiza la función de convertir el texto según sea un vínculo o texto a negritas.
* @param {string} text - Recibe el texto a convertir.
* @returns Devuelve el texto ya transformado.
*/
function convertText(text: string) {
  // Primero, separar el texto basado en los corchetes para manejar los enlaces.
  const parts = text.split(/(\[.*?\])/g);

  return parts.map((part, index) => {
    if (part.startsWith('[') && part.endsWith(']')) {
      const linkText = part.slice(1, -1);
      return (
        <a key={index} href={linkText} target="_blank" rel="noopener noreferrer">
          {linkText}
        </a>
      );
    } else {
      // Ahora, manejar el texto que no está dentro de corchetes y puede contener negrita.
      const subParts = part.split(/\*\*/);

      return subParts.map((subPart, subIndex) => {
        if (subIndex % 2 === 1) {
          return <strong key={`${index}-${subIndex}`}>{subPart}</strong>;
        }
        return <span key={`${index}-${subIndex}`}>{subPart}</span>;
      });
    }
  });
};

export default convertText;