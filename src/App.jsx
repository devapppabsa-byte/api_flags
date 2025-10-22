import { useEffect, useState } from "react"


function App(){


  //estado para los datos
  const [flags, setFlags] = useState([]);

  //estado de la carga de datos
  const [loading, setLoading] = useState(true);

  //estado por si hay algun error
  const [error, setError] = useState(null);




  useEffect(()=>{

    fetch('https://restcountries.com/v3.1/all?fields=name,flags')
    .then((res) =>{

      if(!res.ok) throw new Error("Error en la respuesta de las banderas");
      return res.json();

    })

    .then((data) =>{
    
      setFlags(data);
      setLoading(false)
    
    })

    .catch((err) => {
      setError(err.message);
      setLoading(false)
    })

  }, [])



  if(loading) return <p>Cargando . . . </p>;
  if(error) return <p>Error</p>









return (

<>
<div className="container-fluid">
  <div className="row bg-primary text-white p-3">
    <div className="col-auto">
      <h1>Administrador</h1>
    </div>
  </div>
</div>

<div className="container-fluid">
    <div className="row py-2" style={{backgroundColor:"#5476ac"}}>
      <div className="col-auto">

        <a href="" className="w-100 h-100 text-white">
          <i className="fa fa-home mx-2"></i>
          Inicio
        </a>
      </div>

      <div className="col-auto">

        <a href="" className="text-white">
          <i className="fa fa-briefcase mx-2"></i>
          Departamentos
        </a>

      </div>
    </div>
</div>


<div className="container-fluid mt-3">
  
  <div className="row">
    <div className="col-12 text-center">
      <div className="row justify-content-center">
        <div className="col-8 text-center bg-white p-4 border">
          <h1>
            <i className="fa fa-list mx-3"></i>
            Lista
          </h1>
        </div>
      </div>
    </div>
  </div>

  <div className="row">
    {flags.map((flag) => (
      <div className="col-auto border" key={flag.flags.png}>
        <img src={flag.flags.png} className="w-50" alt={flag.flags.alt} />
        
        <br />
        <span className="fw-bold">
          <i className="fa fa-flag"></i>  
          {flag.name.common}
        </span>
      </div>
    ) )}
  </div>

</div>



</>




)

}

export default App