//remove unwanted nodes
//in two ways 1) array with key 2)React fragment
//-------------------------------------------------
//array with keys

import { Fragment } from "react";


const App = () => {
//   return ( [  <NetflixSeries  key="1" />, <NetflixSeries  key="1" /> ]   
//   );



//---------------------------------------------------
//react fragment
return (
    <Fragment>
        <NetflixSeries/>
        <NetflixSeries/>
        <NetflixSeries/>
        <NetflixSeries/>
    </Fragment>
)
};

const NetflixSeries = () => {
  return (
    <div>
      <div>
        <img
          src="C:\Users\HP\OneDrive\Desktop\FULL-STACK\reactjs\react-blog\public\kim-soo-hyun-queen-of-tears-scaled.jpeg"
          alt="queen of tears"
          width="40%"
          height="40%"
        />
      </div>
      <h2>Name: Queen of Tears</h2>
      <h3>Rating: 8.2</h3>
      <p>
        Summary: Queen of Tears is a romantic drama about Baek Hyun-woo and Hong
        Hae-in. They rediscover their love while battling illness, family conflicts,
        and power struggles.
      </p>
    </div>
  );
};

export default App;

