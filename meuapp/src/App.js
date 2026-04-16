import { useState } from "react";
import Equipe from "./components/Equipe";
import ContadorFuncaoSemEstado from "./components/contador_funcao_sem_estado";
import ContadorClasseSemEstado from "./components/contador_classe_sem_estado";
import ContadorFuncaoComEstado from "./components/contador_funcao_com_estado";
import ContadorClasseComEstado from "./components/contador_classe_com_estado";

export default function App() {
  const [valor, setValor] = useState(0);
  return (
    <div className="App">
      <h1>Conheça a nossa equipe</h1>
      <Equipe 
        nome="Lisiane" 
        cargo="Desenvolvedora" 
        idade="41" 
        Linked="seulinkedin" 
        Github="seugithub" 
      />
      <Equipe 
        nome="João" 
        cargo="Designer" 
        idade="35" 
        Linked="seulinkedin" 
        Github="seugithub" 
      />
      <Equipe 
        nome="Maria" 
        cargo="Gerente de Projetos" 
        idade="29" 
        Linked="seulinkedin" 
        Github="seugithub" 
      />

      <hr />

      <h1>Contador usando Função sem Estado</h1>
      <ContadorFuncaoSemEstado />
      
      <hr />

      <h1>Contador usando Classe sem Estado</h1>
      <ContadorClasseSemEstado />

      <hr />

      <h1>Contador usando Função com Estado</h1>
      <ContadorFuncaoComEstado valor={valor} setValor={setValor} />

      <hr />

      <h1>Contador usando Classe com Estado</h1>
      <ContadorClasseComEstado valor={valor} setValor={setValor} />
    </div>
  );
}