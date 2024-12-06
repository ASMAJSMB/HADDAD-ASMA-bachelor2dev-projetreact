import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header"; 
import Footer from "../Components/Footer"; 


const robotoStyle = {
  fontFamily: "'Roboto', sans-serif",
};

function Dashboard() {
  const [checklists, setChecklists] = useState([
    { id: 1, title: "Checklist 1", description: "Description checklist 1", status: "In Progress", tasks: 5 },
    { id: 2, title: "Checklist 2", description: "Description checklist 2", status: "Completed", tasks: 3 },
  ]);

  const navigate = useNavigate();

  const handleDelete = (id) => {
    const updatedChecklists = checklists.filter((checklist) => checklist.id !== id);
    setChecklists(updatedChecklists);
  };

  const handleEdit = (id) => {
    navigate("/formulaire", { state: { id } }); 
  };

  const handleChecklistClick = (id) => {
    navigate(`/checklist/${id}`); 
  };

  const handleAddChecklist = () => {
    navigate("/formulaire"); 
  };

  return (
    <div style={{ padding: "20px", ...robotoStyle }}>
      <Header />

      <div>
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>My Checklists</h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
          {checklists.map((checklist) => (
            <div
              key={checklist.id}
              style={{
                backgroundColor: "#FFCC66", 
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0px 2px 4px rgba(0,0,0,0.2)",
                width: "250px", 
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                ...robotoStyle,
              }}
            >
              <div
                style={{ cursor: "pointer" }}
                onClick={() => handleChecklistClick(checklist.id)}
              >
                <h3 style={{ margin: "0 0 10px 0" }}>{checklist.title}</h3>
                <p style={{ margin: "0 0 10px 0" }}>{checklist.description}</p>
                <p style={{ margin: "5px 0" }}>
                  <strong>Checklist Status: </strong> {checklist.status}
                </p>
                <p style={{ margin: "5px 0" }}>
                  <strong>Number of Tasks: </strong> {checklist.tasks}
                </p>
              </div>

              <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
                <button
                  onClick={() => handleEdit(checklist.id)}
                  style={{
                    flex: 1,
                    backgroundColor: "#26547C", 
                    color: "white",
                    padding: "10px 0",
                    fontSize: "14px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    ...robotoStyle,
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(checklist.id)}
                  style={{
                    flex: 1,
                    backgroundColor: "#26547C", 
                    color: "white",
                    padding: "10px 0",
                    fontSize: "14px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    ...robotoStyle,
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button
          onClick={handleAddChecklist}
          style={{
            backgroundColor: "#FFCC66", 
            color: "#26547C", 
            padding: "10px 20px",
            fontSize: "16px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            justifyContent: "center",
            ...robotoStyle,
          }}
        >
          <span style={{ fontSize: "20px", fontWeight: "bold" }}>+</span> Add a Checklist
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default Dashboard;
