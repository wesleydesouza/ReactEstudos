
function Props(){
  const Equipe = (props) => {
    return(
      <div>
        <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}/>
        <Social fb={props.facebook}/>
        <hr/>
      </div>
    );
  };

  const Sobre = (props) => {
    return(
      <div>
        <h2>Olá sou o(a) {props.nome}</h2>
        <h3>Cargo: {props.cargo}</h3>
        <h3>idade: {props.idade}</h3>

      </div>
  );
  };

  const Social = (props) => {
    return(
      <div>
        <a href={props.fb}>Facebook </a>
        <a>Linkedin </a>
        <a>YouTube </a>
      </div>
    )
  };
  return(
    <div>
      <h1>Conheça nossa equipe:</h1>
        <Equipe nome="Wesley" cargo="Programador" idade="24" facebook="https://google.com"/>
    </div>
  );
};

export default Props;