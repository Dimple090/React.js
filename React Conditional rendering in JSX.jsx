
//conditionals values in jsx

const App = () => {
  return (
    <div>
      <NetflixSeries />
      <NetflixSeries />
    </div>
  );
};

const NetflixSeries = () => {
  const name = "Queen of tears";
  const rating = "8.2";
  const summary =
       "Queen of Tears is a romantic drama about Baek Hyun-woo and Hong Hae-in. They rediscover their love while battling illness, family conflicts, and power struggles.";



let age = 19;
       // declare func
  const returnGenre = () => {
    const genre = "RomCom";
    return genre;
  };
//method 4: solution can be better as it prevents cluttering of variables outside anu encapsulates such logic inside a function.
//One another benefit is also that, you can also pass some dynamic values as Function
let canWatch = () => {
    if(age >= 18) return "watch Now";
    return "Not Avaialable";
};


//method 3: sometimes you might have very complex if conditions ,for that there are some solutions
//   let canWatch = "Not avalaible";
//   if(age >=18) canWatch = "Watch now";



//first method
//problem: but this violates dry(do not repeat)
//  if(age < 18){
// return (
//     <div>
//       <div>
//         <img
//           src="C:\Users\HP\OneDrive\Desktop\FULL-STACK\reactjs\react-blog\public\kim-soo-hyun-queen-of-tears-scaled.jpeg"
//           alt="queen of tears"
//           width="40%"
//           height="40%"
//         />
//       </div>
//       <h2>Name: {name} </h2>
//       <h3>Rating: {5+3.2} </h3>
//       <p>Summary: {summary}</p>
//       <p>Genre: {returnGenre() }</p>
//       <button>Not Available</button>
//     </div>
    
//   );
// }
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
      <h2>Name: {name} </h2>
      <h3>Rating: {5+3.2} </h3>
      <p>Summary: {summary}</p>
      <p>Genre: {returnGenre() }</p>

      {/* //2 method: ternary */}
      {/* <button>{age >= 18 ? "Watch Now" : "Not Avaliable"}</button> */}


{/* method 3 */}
      {/* <buttoon>{canWatch}</buttoon> */}

{/**method 4 */}
    <buttoon>{canWatch()}</buttoon>
    </div>
    
  );
}

export default App;




