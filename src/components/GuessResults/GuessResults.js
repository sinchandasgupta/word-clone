import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guessList, answer }) {
  return (
    <div className="guess-result">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
        return <Guess key={num} value={guessList[num]} answer={answer} />;
      })}
    </div>
  );
}

export default GuessResults;
