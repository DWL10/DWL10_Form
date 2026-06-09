import './subcont.css';
import { useId } from 'react';


export default function TextContent({value, onChange }) {
  //useId es un hook nativo de React que genera un ID único y seguro automáticamente
  const uniqueId = useId(); 

  return (
    /* Usamos clases de Bootstrap (mb-3 equivale al <br> pero con un espaciado limpio) */
    <div className="mb-3 w-100 subcont">
      
      {/* Label de Bootstrap */}
      <label htmlFor={uniqueId} className="form-label fw-bold text-light mb-1">
        Total:
      </label>
      
      {/* Input de Bootstrap: 'form-control' le da el diseño moderno y responsivo */}
      <input 
        type="text" 
        className="form-control bg-dark text-white border-secondary" 
        id={uniqueId} 
        value={value}         // El valor ahora viene controlado por React
        onChange={onChange}   // Avisa a React cada vez que el usuario escribe
        disabled={true}
      />

    </div>
  );
}