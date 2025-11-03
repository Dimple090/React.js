const App = () => {
  return (
    <div>
      <NetflixSeries />
      <NetflixSeries />
    </div>
  );
};

//variables:You can embed any JavaScript variable within JSX by enclosing it in curly braces. The value of the variable will be inserted into the DOM-at-the-respective-location
//Expression:JSX allows you to write JavaScript expressions inside curly braces. This includes operations, function calls, and other JavaScript expressions that produce a value.
//Function Calls: Function , especially those that return jsx, can be invoked directly within your jsx
const NetflixSeries = () => {
  const name = "Queen of tears";
  const rating = "8.2";
  const summary =
       "Queen of Tears is a romantic drama about Baek Hyun-woo and Hong Hae-in. They rediscover their love while battling illness, family conflicts, and power struggles.";
// declare func
  const returnGenre = () => {
    const genre = "RomCom";
    return genre;
  };

 
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
{/*  dynamic value using expression */ }
      <h3>Rating: {5+3.2} </h3>
      <p>
        Summary: {summary}</p>
{/* call function */}
        <p>Genre: {returnGenre() }</p>
    </div>
    
  );
};

export default App;


