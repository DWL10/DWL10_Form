import './subcont.css';
import { useId } from 'react';

export default function ChoiceBox({ label, options = [], values = [], selectedValue, onChange }) {
  const baseId = useId();

  // Si no se pasan opciones como arreglo, manejamos un caso por defecto estructurado
  const normalizedOptions = Array.isArray(options) ? options : [label];
  const normalizedValues = Array.isArray(values) ? values : [values];

  return (
    <div className="mb-4 w-100 px-3 px-sm-5 text-start">
      <label className="form-label fw-bold text-light d-block mb-2">
        {label}
      </label>
      
      {normalizedOptions.map((text, index) => {
        const optionId = `${baseId}-${index}`;
        const val = normalizedValues[index] ?? text;

        return (
          <div className="form-check my-2" key={optionId}>
            <input
              className="form-check-input radio"
              type="radio"
              name={baseId}
              id={optionId}
              value={val}
              checked={selectedValue === val}
              onChange={(e) => onChange(e.target.value)}
              style={{ cursor: "pointer" }}
            />
            <label className="form-check-label text-light" htmlFor={optionId} style={{ cursor: "pointer" }}>
              {text}
            </label>
          </div>
        );
      })}
    </div>
  );
}