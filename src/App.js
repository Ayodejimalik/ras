import { Second } from './2ndcomponent';
import productdetail from './malik';
import {Form} from './form.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
 

import Routesout from './myroute.js';
import "./index.css"
import Errorpage from './error.js';






function App() {



  const page1 = productdetail.map(product => {
    return <Second key={product.id} {...product} />
  })
 

  const myname = createBrowserRouter([
    {
      path: "",
      element: <Routesout />,
      errorElement: <Errorpage />,

      children: [
        {
          path: "",
          element: page1,

        },

        {
          path: '/bad',
          element:<Form/>,
        },

      ]


    }
  ])









  return (
    <>

  


    
      <div className="app">

        <RouterProvider router={myname} />
      </div>
    </>

  );

}



export default App;
