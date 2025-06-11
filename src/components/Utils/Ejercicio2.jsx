//lo hice con rafc
export const Ejercicio2 = () => {
  //Logica de componente
  //variable / constante
  // hooks
  // funciones
  const nombreProducto = 'Smart tv 90';
  
  function AgregarAlCarritoDeCompras() {
    console.log('El producto: ', nombreProducto, "Se agregó al carrito");    
  }
  
  function EliminarDelCarritoDeCompras() {
    console.log('El producto: ', nombreProducto, "Se ha eliminado del carrito");    
  }

  return (
    <>
      <div className="row mt-4">
        <div className="col-12">
          <h2 className="h4 mt-4">
            Ejercicio 02 - Botón y funciones
          </h2>
          <hr />
        </div>
        <button 
          className="w-25 btn btn-primary me-3" 
          onClick={AgregarAlCarritoDeCompras}
        >
          <i className="bi bi-playstation"></i>
          <span className="ms-3">Agregar Artículo</span>
        </button>
        <button 
          className="w-25 btn btn-danger" 
          onClick={EliminarDelCarritoDeCompras}
        >
<i class="bi bi-trash"></i>
          <span className="ms-3">Eliminar Artículo</span>
        </button>
      </div>
    </>
  )
}