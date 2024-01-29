import logo from './logo.svg';
import { Second } from './2ndcomponent';
import image from './sec image.jpg';
import { Dad } from './first';
import Image from './fisrt image.jpg'

  function App() {
  return (
    <div className="App">
     
      <Second 
       third = 'PRICE: $250'
       Second ='ITALIAN SHOE'
       samuel = 'ADD CHART'
        logo = {logo}
       
      />
     

      
     <Second Second ='NIGERIA SHOE'
        image={image}
        third = 'PRICE : 10naria'
        kamo = 'ADD CHART '     />

        <Dad 
          god = 'KENYA SHOE'
          home = 'PRICE : $100'
          Image = {Image}
          btn = 'ADD CHART'
       
        />
    </div>
  );
}

export default App;
