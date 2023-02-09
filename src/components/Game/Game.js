import React from "react";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [status, setStatus] = React.useState("running");

  function handleAddGuess(guess) {
    const nextGuess = [...guessList, guess];
    setGuessList(nextGuess);

    if (guess.toUpperCase() === answer) {
      setStatus("won");
    } else if (nextGuess.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus("lost");
    }
  }
  return (
    <>
      <GuessResults guessList={guessList} answer={answer} />
      <GuessInput handleAddGuess={handleAddGuess} status={status} />
      {status === "won" && <WonBanner numOfGuesses={guessList.length} />}
      {status === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
