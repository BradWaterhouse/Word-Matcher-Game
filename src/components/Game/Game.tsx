import * as React from "react";
import { ReactElement, useEffect, useState } from "react";
import "../../assets/scss/App.scss";
import Square from "./Square";

interface GameSquare {
  id: number;
  text: string;
  found: boolean;
}

const Game = (): ReactElement => {
  const [gameInput, setGameInput] = useState<GameSquare[]>([
    { id: 1, text: "Cat", found: false },
    { id: 2, text: "Dog", found: false },
    { id: 3, text: "Cat", found: false },
    { id: 4, text: "Dog", found: false },
    { id: 5, text: "Fish", found: false },
    { id: 6, text: "Pig", found: false },
    { id: 7, text: "Pig", found: false },
    { id: 8, text: "Moose", found: false },
    { id: 9, text: "Fish", found: false },
    { id: 10, text: "Lizard", found: false },
    { id: 11, text: "Lizard", found: false },
    { id: 12, text: "Moose", found: false },
  ]);
  const [selected, setSelected] = useState<number[]>([]);
  const [lowestMoves, setLowestMoves] = useState<number>(0);
  const [currentMoves, setCurrentMoves] = useState<number>(0);

  useEffect((): void => {
    if (selected.length === 2) {
      isMatch();
    }

    if (
      gameInput.filter(
        (gameSquare: GameSquare): boolean => gameSquare.found === false
      ).length === 0
    ) {
      if (currentMoves < lowestMoves) {
        setLowestMoves(currentMoves);
      }
    }
  });

  const findIndexOfId = (id: number) => {
    return gameInput.findIndex(
      (gameSquare: GameSquare) => gameSquare.id === id
    );
  };

  const isMatch = (): void => {
    const firstIndex = findIndexOfId(selected[0]);
    const secondIndex = findIndexOfId(selected[1]);

    const newState = [...gameInput];

    if (gameInput[firstIndex].text === gameInput[secondIndex].text) {
      newState[firstIndex].found = true;
      newState[secondIndex].found = true;

      setGameInput(newState);
    }

    const newSelected = [selected[1]];
    setSelected([...newSelected]);
  };

  const handleSelected = (id: number) => {
    setSelected([...selected, id]);
    setCurrentMoves(currentMoves + 1);
  };

  const reset = (): void => {
    setSelected([]);
    setCurrentMoves(0);

    const reset = gameInput.reduce(
      (newGameSquare, gameSquare: GameSquare) => [
        ...newGameSquare,
        { ...gameSquare, found: false },
      ],
      []
    );

    setGameInput(reset);
  };

  return (
    <div className="container" style={{ marginTop: 100 }}>
      <div className="columns is-multiline">
        {gameInput.map((square: GameSquare) => (
          <Square
            key={square.id}
            id={square.id}
            text={square.text}
            found={square.found}
            selected={selected}
            handleSelected={handleSelected}
          />
        ))}
      </div>
      <h1 className="title mt-3">Number Picker Game</h1>
      <div className="columns is-multiline">
        <div className="column is-2">
          <button className="button mt-1" onClick={reset}>
            Reset
          </button>
        </div>
        <div className="column is-2">
          <h2 className="subtitle">Lowest Moves: {lowestMoves}</h2>
          <h2 className="subtitle">Current Moves: {currentMoves}</h2>
        </div>
      </div>
    </div>
  );
};

export default Game;
