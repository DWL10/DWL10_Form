// src/components/TextArea.jsx
import { useId } from "react";

export default function TextArea({ label, placeholder, value, onChange }) {
  const uniqueId = useId();

  return (
    <div className="mb-4 w-100 px-3 px-sm-5 text-start">
      <label htmlFor={uniqueId} className="form-label fw-bold text-light mb-2">
        {label}
      </label>
      <textarea
        className="form-control"
        id={uniqueId}
        rows={4}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ 
          resize: "none", 
          backgroundColor: "rgb(173, 186, 216)", 
          color: "#000" 
        }}
      />
    </div>
  );
}