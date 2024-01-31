import { Second } from './2ndcomponent';
import Emage from './first shoe.jpeg';
import Amage from './air jordan.webp';
import Image from './jordan.jpeg'

function App() {

  const productdetail = [
    {
      third: 'ITALIAN SHOE',
      title: '$300',
      samuel: 'BUY',
      logo: Amage,

    },
    {
      Second:'NIGERIA SHOE',
        common :'#100',
        kamo :'BUY ',
        image: Emage,
    },
    {
      god :'INDIAN SHOE',
      simon:'$100',
      Image :Image,
      btn :'BUY',
    },

  ]
  return (
    <div className="App">

      <Second
        {...productdetail[0]}
        {...productdetail[1]}
        {...productdetail[2]}
      />



      
    </div>
  );
}

export default App;
