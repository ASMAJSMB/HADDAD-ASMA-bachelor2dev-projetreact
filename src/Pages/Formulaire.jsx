import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header"; 
import Footer from "../Components/Footer"; 


const MainContainer = styled.div`
  margin-top: 60px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  min-height: 100vh;
`;


const TopButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #EF476F;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #EF476F;
  }
`;


const FormContainer = styled.div`
  background-color: #FFD166;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
`;

const FieldRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: ${(props) => (props.rightMargin ? "10px" : "0")};

  label {
    font-weight: bold;
    margin-bottom: 5px;
  }

  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
`;


const TaskRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  input {
    flex: 1;
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
`;

const ModifyButton = styled(Button)`
  padding: 5px 10px;
  font-size: 14px;
  background-color: #26547C;

  &:hover {
    background-color: #26547C;
  }
`;


const BottomButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  margin-top: 20px;
`;

function Formulaire() {
  const [taskTitle, setTaskTitle] = useState(""); 
  const [tasks, setTasks] = useState(["Task 1", "Task 2"]); 
  const navigate = useNavigate();

  const handleAddTask = () => {
    if (taskTitle) {
      setTasks([...tasks, taskTitle]); 
      setTaskTitle(""); 
    }
  };

  const handleBack = () => {
    navigate("/"); 
  };

  return (
    <>
      <Header />
      <MainContainer>
        {/* Boutons en haut */}
        <TopButtons>
          <Button>Modify Checklist</Button>
          <Button>Create Checklist</Button>
        </TopButtons>

        {/* Formulaire principal */}
        <FormContainer>
          <FieldRow>
            <Field rightMargin>
              <label>Title Checklist</label>
              <input type="text" placeholder="Enter title" />
            </Field>
            <Field>
              <label>Description</label>
              <input type="text" placeholder="Enter description" />
            </Field>
          </FieldRow>

          {/* Liste des tâches */}
          {tasks.map((task, index) => (
            <TaskRow key={index}>
              <input type="text" value={task} readOnly />
              <ModifyButton>Modify</ModifyButton>
            </TaskRow>
          ))}

          {/* Ajouter une nouvelle tâche */}
          <TaskRow>
            <input
              type="text"
              placeholder="New Task"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
            <ModifyButton onClick={handleAddTask}>+ ADD</ModifyButton>
          </TaskRow>
        </FormContainer>

        {/* Boutons en bas */}
        <BottomButtons>
          <Button>Save</Button>
          <Button onClick={handleBack}>Back Button</Button>
        </BottomButtons>
      </MainContainer>
      <Footer />
    </>
  );
}

export default Formulaire;
