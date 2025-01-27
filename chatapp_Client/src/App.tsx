
import 'uikit/dist/css/uikit.css'
import  'uikit/dist/js/uikit-icons.min.js'





import './App.css'

import Routes from './Routes.tsx'
import { BrowserRouter } from 'react-router-dom';

function App() {
 

  const pages = import.meta.glob("./pages/**/!(*.test.[jt]sx)*.([jt]sx)", {eager:true,

  });


  return (
    <>
      <BrowserRouter>
        <Routes pages = {pages}></Routes>
      </BrowserRouter>
      

    </>
  )
}

export default App
