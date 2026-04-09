const Equipe = (props) => {
  return (
    <div>
      <Sobre usuario={props.nome}
             funcao={props.cargo}
             anos={props.idade} />
      <Sociais linked={props.linkedIn}
               gith={props.github} />
      <hr/>
    </div>
  )
}

const Sobre = (props) => {
  return (
    <div>
      <h2>Olá, eu sou a {props.usuario}</h2>
      <p>Eu sou {props.funcao} e tenho {props.anos} anos.</p>
    </div>
  )
}

const Sociais = (props) => {
  return (
    <div>
      <h3>Redes sociais:</h3>
      <ul>
        <li><a href="https://www.linkedin.com/in/seulinkedin/">LinkedIn</a></li>
        <li><a href="https://github.com/seugithub">GitHub</a></li>
      </ul>
    </div>
  )
}

export default function App() {
  return (
    <div className="App">
      <h1>Conheça a nossa equipe:</h1>
      <Equipe nome="Lisiane" cargo="Desenvolvedora" idade="41" linkedin="seulinkedin" github="seugithub" />
      <Equipe nome="Pedro" cargo="Marketing" idade="23" linkedin="linkedinpedro" github="githubpedro" />
      <Equipe nome="Ana" cargo="Analista" idade="46" linkedin="linkedinana" github="githubana" />
    </div>
  );
}