import { Componente1 } from "./components/Componente1";
import "./styles.css";

// ATENÇÃO: abra o console aqui do code sandbox pra poder ver os valores das props!

// Nosso primeiro componente da aplicação é o App
// Ele sempre vai ser o pai de todo mundo

export default function App() {
  // Na variável temos a informação do nome, guardada nesse estado
  const nome = "Pati";

  // E temos uma função que emite um alert com o nome que está na variável
  // Por hora ela não está sendo chamada em lugar nenhum
  const olaPessoa = () => {
    alert(`Olá, ${nome}`);
  };

  // No retorno deste componente, temos o Componente1
  // Isso faz com que o App seja pai do Componente1
  // Árvore: App => Componente1
  return (
    <div>
      {/* Aqui passamos a informação do nome ("Pati") para dentro do Componente1 */}
      {/* O nome escolhido para esse dado foi: nomeQueEstavaNoApp */}
      <Componente1 nomeQueEstavaNoApp={nome} funcaoOla={olaPessoa} />
      {/* Entre agora no arquivo do Componente1 para vermos o que acontece */}
    </div>
  );
}
