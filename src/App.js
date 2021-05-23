import "./App.css";
import Atoms from "./components/atoms/Atoms";
import "./components/atoms/styles/buttons.css";
import "./components/atoms/styles/inputs.css";
import "./components/atoms/styles/labels.css";
import "./components/atoms/styles/titles.css";
import Mols from "./components/mols/Mols";
import "./components/mols/styles/containers.css";

function App() {
  const [Buttons, Inputs, Labels, Titles] = Atoms();
  const [Containers] = Mols();
  return (
    <div className="App">
      <div className={Containers.verticalDF}>
        <h1 id="App" className={Titles.titleF}>
          services
        </h1>
        <p className={Titles.subtitleF}>Lista de servicios</p>
      </div>
      <div className={Containers.verticalDF}>
        <input type="text" className={Inputs.inputP} />
        <label className={Labels.labelD}>Required</label>
        <textarea className={Inputs.inputTA} />
        <label className={Labels.labelD}>Required</label>
        <select className={Inputs.inputSl} placeholder="choice one">
          <option value="value1">Value 1</option>
          <option value="value2">Value 2</option>
          <option value="value3">Value 3</option>
        </select>
        <label className={Labels.labelD}>Required</label>
      </div>
      <div className={Containers.horizontarlDF}>
        <button className={Buttons.buttonP}>Aceptar</button>
        <button className={Buttons.buttonS}>cancelar</button>
      </div>
    </div>
  );
}

export default App;
