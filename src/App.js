import React from 'react';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Fotos from './pages/photos/index';
import Contact from './pages/contact/contact';
import Comments from './pages/comments/comments';
import Thanks from './pages/tku/tku';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/photos' element={<Fotos />}/>
        <Route path='/comments' element={<Comments />}/>        
        <Route path='/Thanks' element={<Thanks />}/>        
      </Routes>
    </BrowserRouter>
  );
}

export default App;



















// import Button from './components/button/button';

// function App() {
//   const [carregando, setCarregando] = useState(true)
//   const [contador, setContador] = useState(0)

//   return (
//     <div>
//       {carregando ? 
//       <span>Carregando.....</span> 
//       :
//       <div>
//       <button onClick={() => setContador(contador + 1)}>Add</button>
//       <span style={{display: 'flex', flexDirection: 'column', marginLeft: '15px'}}>{contador}</span>
//       </div>   
//       }
//       <br/>
//       <button onClick={() => setCarregando(!carregando)}>{carregando ? 'Carregar site' : 'Voltar para carregamento'}</button>
//       <Button name='Alterar valor' active onClick={setContador} />
//     </div>
//   );
// }

// export default App;








// function App() {

//   function evento() {
//     alert('Evento Disparado!')
//   }

//    window.addEventListener('scroll', () => alert('Evento scrollado!')) 

//   return (
//     <div style={{height: '200vh'}}>
//       <Button click={() => evento()} name="Botão 1" active />
//       <Button name="Botão 2" active/>
//       <Button name="Botão 3" />
//       <sapn>
//         loren loren loren
//       </sapn>
//     </div>
//   );
// }

// export default App;
