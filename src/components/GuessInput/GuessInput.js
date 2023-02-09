import React from "react";

function GuessInput({ handleAddGuess, status }) {
  const [guess, setGuess] = React.useState("");
  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(e) => {
          e.preventDefault();
          if (guess.length !== 5) {
            window.alert("Please enter exactly 5 characters");
            return;
          }
          handleAddGuess(guess);
          setGuess("");
        }}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          disabled={status !== "running"}
          minLength={5}
          maxLength={5}
          id="guess-input"
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value.toUpperCase())}
        />
      </form>
    </>
  );
}

export default GuessInput;
