

const NetflixSeries = () => {
  const name = "Queen of Tears";
  const rating = 8.2;
  const summary =
    "Queen of Tears is a romantic drama about Baek Hyun-woo and Hong Hae-in. They rediscover their love while battling illness, family conflicts, and power struggles.";
  const age = 19;

  const canWatch = () => {
    if (age >= 18) return "Watch Now";
    return "Not Available";
  };

  const returnGenre = () => {
    const genre = "RomCom";
    return genre;
  };

  return (
    <div >
      <div>
        <img
          src="/kim-soo-hyun-queen-of-tears-scaled.jpeg"
          alt="Queen of Tears"
          width="40%"
          height="40%"
        />
      </div>

      <h2>Name: {name}</h2>
      <h3>Rating: {rating}</h3>
      <p>Summary: {summary}</p>
      <p>Genre: {returnGenre()}</p>
      <p>Status: {canWatch()}</p>
    </div>
  );
};

export default NetflixSeries;

