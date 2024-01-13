import Adicao from "./components/Exercicio_1/Adicao";
import Divisao from "./components/Exercicio_1/Divisao";
import Multiplicacao from "./components/Exercicio_1/Multiplicacao";
import PrecisoEstudar from "./components/Exercicio_2/PrecisoEstudar";
import Subtracao from "./components/Exercicio_1/Subtracao";
import CelsiusParaFahrenheit from "./components/Exercicio_3/CelsiusParaFahrenheit";
import FahrenheitParaCelsius from "./components/Exercicio_3/FahrenheitParaCelsius";
import QuilometrosParaMilhas from "./components/Exercicio_3/QuilometrosParaMilhas";
import MilhasParaQuilometro from "./components/Exercicio_3/MilhasParaQuilometro";
import RenderizandoComFuncoes from "./components/Exercicio_4/RenderizandoComFuncoes";
import TrabalhandoComImagens from "./components/Exercicio_5/TrabalhandoComImagens";
import HookContador from "./components/Exercicio_6/HookContador";

function App() {

  return (
    <>
      <Adicao num1={2} num2={3} />
      <Subtracao num1={10} num2={5} />
      <Multiplicacao num1={5} num2={1} />
      <Divisao num1={20} num2={4} />

      <>
      <PrecisoEstudar nomeTecnologia={"JAVA"} /> 
      </>

      <>
      <CelsiusParaFahrenheit Celsius1={0} />
      <FahrenheitParaCelsius temperatura={32} />
      <MilhasParaQuilometro milhas={100} />
      <QuilometrosParaMilhas dist1={100} />
      </>

      <>
      <RenderizandoComFuncoes />
      </>

      <>
      <TrabalhandoComImagens />
      </>

      <>
        <HookContador />
      </>


      </>

  )
}

export default App;
