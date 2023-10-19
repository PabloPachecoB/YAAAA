import './App.css'
import { Nombre } from './componentes/atomos/nombre'
import { Parrafo } from './componentes/atomos/Parrafo'
import { Button } from './componentes/atomos/Boton'
import { Button2 } from './componentes/atomos/Button2'
import { Foto } from './componentes/atomos/Foto'



function App() {
  

  return (


    

    <div className='card'>

    

      
        <Foto></Foto>
      

      
            <Nombre></Nombre>
      
        <Parrafo></Parrafo>

      

      
            <Button></Button>
      

      
        <Button2></Button2>

      

      </div>
      
      
    
  )
}

export default App