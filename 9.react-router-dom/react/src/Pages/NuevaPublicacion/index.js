const NuevaPublicacion = () => {
  return (

    <div className="container-fluid">
      <div className="row">



        <div className="col-12 col-md-6">
          <form action="" className="bg-dark text-white p-3 border rounded">
            <div className="form-group">
              <label htmlFor="">Nombre</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Correo</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Generacion</label>
              <input type="text" className="form-control" />
            </div>
            <button className="btn btn-success mt-3 ms-auto">Guardar koder</button>
          </form>
        </div>



        <div className="col-12 col-md-6 mt-3">
          <div className="row row-cols-1 row-cols-md-3 g-4">





          </div>
        </div>


      </div>
    </div>

  )

}

export default NuevaPublicacion