import Header from "../components/Header";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
import Login from "./Login";
import ItemList from "../components/ItemsList";
import Alert from "../components/Alert";


function Home() {

  let exibeAlert = true;

  return (
    <div className="bg-gray-300">
      <Header />
      <div>
        <p>Conteúdo da página</p>

        {/* Renderização condicional */}
        {exibeAlert ? (
            <Alert children="Preencha os campos obrigatórios" type="error" />
          ) : (
            null
          )
        }

        <Counter label="Quantidade de peixes" initial={-10} />
        <Counter label="Quantidade alunos:" />
        <Login />
      </div>
      {/* <ItemList /> */}
      <Footer nome={'Fulano'} />
    </div>
  );
}
export default Home;