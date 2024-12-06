import React from "react";

function ChecklistCard({ checklist, onEdit, onDelete }) {
  return (
    <div
      style={{
        backgroundColor: "#FFD166", // Carré jaune pour la checklist
        padding: "50px",
        borderRadius: "10px",
        width: "200px",
        marginBottom: "20px",
      }}
    >
      <h3>{checklist.title}</h3> {/* Affichage du titre de la checklist */}
      <p>{checklist.description}</p> {/* Affichage de la description de la checklist */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={onEdit} style={buttonStyle}>Edit</button>
        <button onClick={onDelete} style={deleteButtonStyle}>Delete</button>
      </div>
    </div>
  );
}

// Styles
const buttonStyle = {
  backgroundColor: "#26547C", // Jaune pour sauvegarder
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  color: "white",
  fontWeight: "bold",
};

const deleteButtonStyle = {
  backgroundColor: "#EF476F", // Rouge pour le bouton Delete
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  color: "white",
  fontWeight: "bold",
};

export default ChecklistCard;
