// src/components/UploadFiles.jsx
import { useId, useRef } from "react";
import uploadIcon from "../assets/upload.png"; // Asegúrate de mover tu imagen aquí

export default function UploadFiles({ onFilesSelect, filesPreview = [] }) {
  const uniqueId = useId();
  const fileInputRef = useRef(null);

  const handleAreaClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="mb-4 w-100 px-3 px-sm-5 text-start">
      <label className="form-label fw-bold text-light mb-2">
        Upload the references of your character(s) here!
      </label>

      {/* Caja de carga simulada */}
      <div
        onClick={handleAreaClick}
        className="w-100 rounded-3 d-flex align-items-center justify-content-center border border-2 border-dashed border-secondary text-dark"
        style={{
          height: "200px",
          backgroundColor: "rgb(173, 186, 216)",
          backgroundImage: `url(${uploadIcon})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          cursor: "pointer",
          transition: "background-color 0.2s"
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "rgb(132, 147, 182)")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "rgb(173, 186, 216)")}
      />

      <input
        type="file"
        ref={fileInputRef}
        id={uniqueId}
        accept="image/*"
        multiple
        className="d-none"
        onChange={(e) => onFilesSelect(Array.from(e.target.files))}
      />

      {/* Zona de previsualización */}
      {filesPreview.length > 0 && (
        <div className="d-flex flex-wrap gap-2 mt-3 justify-content-center">
          {filesPreview.map((src, index) => (
            <img 
              key={index} 
              src={src} 
              alt="preview" 
              className="img-thumbnail" 
              style={{ width: "80px", height: "80px", objectFit: "cover" }} 
            />
          ))}
        </div>
      )}

      <span className="d-block form-text text-muted mt-2 text-center" style={{ color: "#bec4d6 !important" }}>
        <b style={{color:'#c6cbda'}}>Uploading a new image would reset the input, if you want to add more images, select them at the same time</b>
      </span>
    </div>
  );
}