import { Ejercicio01 } from "./components/ejercicio01"
import { BotonActivar } from "./components/Utils/BotonCrearCuenta"
import { Dosbotones } from "./components/Utils/Dosbotones"
import { Ejercicio2 } from "./components/Utils/ejercicio2"

function App() {


  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="mt-2 text-center alert alert-success">
            Hola UTSH😎(❁´◡`❁)╰(*°▽°*)╯
          </h1>
        </div>
      </div>
          {/**Mando a llamar a mi componente externo */}
    <Ejercicio01></Ejercicio01>
    <BotonActivar></BotonActivar>
    <Dosbotones></Dosbotones>
    <Ejercicio2></Ejercicio2>
     </div>

    </>
  )
}

export default App
