import React from "react";

// ATENÇÃO: abra o console aqui do code sandbox pra poder ver os valores das props!

// Recebemos as props        \/
export const Componente3 = (props) => {
  // Imprimimos no console pra ver como ela está
  console.log("Props componente 3: ", props);

  // No objeto de props, há uma propriedade chamada nomeQueEstavaNoDois
  // Agora mostraremos esse nome na tela!

  return (
    <div>
      {/* Para isso, chamamos a propriedade nomeQueEstavaNoDois de dentro do objeto props */}
      <h1>{props.nomeNoComponenteDois}</h1>
      {/* E aqui termina o nosso exemplo! O nome Pati viajou 4 níveis para chegar do app até aqui */}

      {/* Agora lembra da função mudarNome que tava lá no App? */}
      {/* Seu EXERCÍCIO é fazer ela percorrer o mesmo caminho até chegar neste botão! */}
      {/* Passe a função por props e execute-a no onClick do botão abaixo   */}
      {/* Ao apertá-lo, o navegador deverá mostrar um alert dizendo "Olá, Pati" */}
      <button onClick={props.funcaoOla2}>Olá</button>
    </div>
  );
};
