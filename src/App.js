import { Dad } from './first';
import { Second } from './2ndcomponent';
import productdetail from './malik';

function App() {


  return (
    <>
    <Dad />

    <div className="app">

      <Second
        {...productdetail[0]}
      />
      <Second
        {...productdetail[1]} />
      <Second
        {...productdetail[2]} />



    </div>
    </>

  );

}


;
export default App;
