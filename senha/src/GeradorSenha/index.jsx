import { useState } from "react";
import style from "./index.module.css";

export default function Gerador() {
  const [pass, setPass] = useState("");
  function Generate() {
    let randomString = Math.random().toString(36).slice(-10);
    setPass(randomString);
  }
  function Copy() {
    navigator.clipboard.writeText(pass).then(() => {
      alert("Copiado!");
    });
  }

  return (
    <div className={style.container}>
      <div className={style.container00}>
        <h1>Gerador de Senha:</h1>
        <div className={style.container01}>
          <button onClick={Generate}>Gerar</button>
          <button onClick={Copy}>Copiar</button>
          <p>{pass}</p>
        </div>
      </div>
    </div>
  );
}
