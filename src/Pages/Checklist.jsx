import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Components/Header"; // Importation du Header
import Footer from "../Components/Footer"; // Importation du Footer

function Checklist() {
  const { id } = useParams(); // Récupère l'id de la checklist si elle existe
  const navigate = useNavigate();

  // Exemple d'une checklist (si aucune donnée n'est récupérée)
  const initialChecklist = {
    title: "New Checklist",
    description: "Description de la checklist",
    tasks: [{ title: "", description: "" }],
  };

  const [checklist, setChecklist] = useState(initialChecklist);

  const handleSave = () => {
    // Sauvegarde de la checklist (envoie les données vers l'API ou autre système)
    console.log("Checklist sauvegardée", checklist);
    navigate("/"); // Redirige vers le Dashboard après avoir sauvegardé
  };

  const handleBack = () => {
    navigate("/"); // Retour au Dashboard
  };

  const handleAddTask = () => {
    setChecklist({
      ...checklist,
      tasks: [...checklist.tasks, { title: "", description: "" }],
    });
  };

  const handleTaskChange = (index, field, value) => {
    const updatedTasks = [...checklist.tasks];
    updatedTasks[index][field] = value;
    setChecklist({ ...checklist, tasks: updatedTasks });
  };

  const handleChecklistChange = (field, value) => {
    setChecklist({ ...checklist, [field]: value });
  };

  return (
    <div style={{ padding: "20px", marginBottom: "80px" }}> {/* Ajout de la marge en bas */}
      <Header /> {/* Ajout du Header ici */}

      <div
        style={{
          backgroundColor: "#FFD166", // Carré jaune pour la checklist
          padding: "20px",
          borderRadius: "10px",
          width: "80%",
          margin: "20px auto",
        }}
      >
        <h2>Edit Checklist</h2>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="Title"
            value={checklist.title}
            onChange={(e) => handleChecklistChange("title", e.target.value)}
            style={inputStyle}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <textarea
            placeholder="Description"
            value={checklist.description}
            onChange={(e) => handleChecklistChange("description", e.target.value)}
            style={{ ...inputStyle, height: "100px" }}
          />
        </div>

        <div>
          <h3>Tasks</h3>
          {checklist.tasks.map((task, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#FFEB99",
                padding: "15px",
                borderRadius: "8px",
                marginBottom: "15px",
              }}
            >
              <input
                type="text"
                placeholder="Task Title"
                value={task.title}
                onChange={(e) =>
                  handleTaskChange(index, "title", e.target.value)
                }
                style={inputStyle}
              />
              <textarea
                placeholder="Task Description"
                value={task.description}
                onChange={(e) =>
                  handleTaskChange(index, "description", e.target.value)
                }
                style={{ ...inputStyle, height: "60px" }}
              />
            </div>
          ))}
          <button onClick={handleAddTask} style={addButtonStyle}>
            Add Task
          </button>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={handleSave} style={saveButtonStyle}>
            Save
          </button>
          <button onClick={handleBack} style={backButtonStyle}>
            Back
          </button>
        </div>
      </div>

      <Footer /> {/* Ajout du Footer ici */}
    </div>
  );
}

// Styles
const inputStyle = {
  width: "100%",
  padding: "10px",
  border: "1px solid #ddd",
  borderRadius: "5px",
  marginBottom: "10px",
};

const addButtonStyle = {
    backgroundColor: "#EF476F", // Rose pour ajouter une tâche
    padding: "8px 15px", // Ajustement des marges pour un aspect plus fin
    border: "none",
    borderRadius: "30px", // Bords arrondis pour un look moderne
    cursor: "pointer",
    color: "white",
    fontWeight: "bold",
    fontSize: "14px",
    transition: "background-color 0.3s ease", // Effet de transition
  };
  
  const saveButtonStyle = {
    backgroundColor: "#118AB2", // Jaune pour sauvegarder
    padding: "8px 15px", // Ajustement des marges pour un aspect plus fin
    border: "none",
    borderRadius: "30px", // Bords arrondis pour un look moderne
    cursor: "pointer",
    color: "white", // Texte contrasté
    fontWeight: "bold",
    fontSize: "14px",
    transition: "background-color 0.3s ease", // Effet de transition
  };
  
  const backButtonStyle = {
    backgroundColor: "#118AB2", // Bleu pour le bouton Back
    padding: "8px 15px", // Ajustement des marges pour un aspect plus fin
    border: "none",
    borderRadius: "30px", // Bords arrondis pour un look moderne
    cursor: "pointer",
    color: "white",
    fontWeight: "bold",
    fontSize: "14px",
    transition: "background-color 0.3s ease", // Effet de transition
  };
  

export default Checklist;
