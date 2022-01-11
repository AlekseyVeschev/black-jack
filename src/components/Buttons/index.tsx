import React, { FC, useCallback } from "react";
import Button from "@material-ui/core/Button";
import { useStyles } from "./styles";

type ButtonsProps = {
  startGame: () => void;
  setAnswer: (answer: string) => void;
  isDisabledStart: boolean;
  isDisabled: boolean;
};

export const Buttons: FC<ButtonsProps> = ({
  startGame,
  setAnswer,
  isDisabledStart,
  isDisabled,
}) => {
  const classes = useStyles();

  const onChangeStart = useCallback(() => {
    startGame();
  }, [startGame]);

  const onChangeAddCard = useCallback(() => {
    setAnswer("card");
  }, [setAnswer]);
  const onChangeAddCardDealer = useCallback(() => {
    setAnswer("cardDealer");
  }, [setAnswer]);

  return (
    <div className={classes.root}>
      <Button
        disabled={isDisabledStart}
        onClick={onChangeStart}
        variant="contained"
        size="large"
        color="secondary"
      >
        Игра
      </Button>
      <Button
        disabled={isDisabled}
        onClick={onChangeAddCard}
        variant="contained"
        size="large"
        color="primary"
      >
        ЕЩЁ КАРТУ
      </Button>
      <Button
        focusRipple
        disabled={isDisabled}
        onClick={onChangeAddCardDealer}
        variant="contained"
        size="large"
        color="primary"
      >
        МНЕ ХВАТИТ
      </Button>
    </div>
  );
};
