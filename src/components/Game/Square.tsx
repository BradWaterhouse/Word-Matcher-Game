import * as React from "react";
import { FC, ReactElement } from "react";
import "../../assets/scss/App.scss";

interface Props {
  id: number;
  text: string;
  found: boolean;
  selected: number[];
  handleSelected: (index: number) => void;
}

const Square: FC<Props> = (props: Props): ReactElement => {
  const colour = (): string => {
    if (props.found) {
      return "game-square-found";
    }
    if (props.selected.includes(props.id)) {
      return "game-square-selected";
    }

    return "game-square";
  };

  return (
    <>
      <div
        className={"column is-3 " + colour()}
        onClick={() => props.handleSelected(props.id)}
      >
        {props.selected.includes(props.id) ? props.text : ""}
      </div>
    </>
  );
};

export default Square;
