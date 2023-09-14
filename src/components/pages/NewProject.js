import { useNavigate } from "react-router-dom";

import ProjectForm from "../project/ProjectForm";
import styles from "./NewProject.module.css";

function NewProject() {
  const history = useNavigate();

  function createPost(project) {
    // initialize cos and services
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      methos: "POST",
      headers: {
        "Content-Types": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        //redirect
        history.push("/projects", { message: "Projeto criado com sucesso!" });
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.newProjectContainer}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="criar projeto" />
    </div>
  );
}
export default NewProject;
