// src/components/SendButton.jsx
export default function SendButton({ disabled = false,text = "Send", onClick }) {
  return (
    <div className="w-100 d-flex justify-content-center my-4">
      <button
        type="submit"
        disabled={disabled}
        onClick={onClick}
        className="btn rounded-pill px-5 py-2 fw-bold text-white shadow-sm"
        style={{
          backgroundColor: disabled ? "#5353a7" : "#3b33a3",
          border: "none",
          minWidth: "200px",
          height: "50px",
          opacity: disabled ? 0.5 : 1,
          cursor: disabled ? "not-allowed" : "pointer"
        }}
      >
        {text}
      </button>
    </div>
  );
}