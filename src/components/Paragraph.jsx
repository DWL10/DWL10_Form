import './subcont.css';

// Cambiamos el nombre a 'Paragraph' con Mayúscula
export default function Paragraph({ text, noBorder = false }) {
  
  // Estilo dinámico para el borde basado en tu CSS original
  const containerStyle = {
    borderBottom: noBorder ? 'none' : '1px solid #171728'
  };

  return (
    /* Usamos tu clase 'subcont', el estilo del borde y 'border-0' si no tiene borde */
    <div className={`subcont ${noBorder ? 'border-0' : ''}`} style={containerStyle}>
      {Array.isArray(text) ? (
        // Añadimos el índice (index) para usarlo como 'key' único
        text.map((txt, index) => (
          <p key={index} className="text-start mb-2">
            {txt}
          </p>
        ))
      ) : (
        // 'text-start' es la clase de Bootstrap para textAlign: 'left'
        <p className="text-start mb-0">
          {text}
        </p>
      )}
    </div>
  );
}