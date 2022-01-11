import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { getRandomCard } from "../../utils/getRandomCard";
import { getSum } from "../../utils/getSumCards";
import { TCard } from "../../types";
import { Header } from "../../components/Header";
import { Buttons } from "../../components/Buttons";
import { Cards } from "../../components/Cards";
import { Chips } from "../../components/Сhips";
import { useStyles } from "./styles";

export const App: FC = () => {
  const classes = useStyles();

  const [dealerCards, setDealerCards] = useState([] as Array<TCard>);
  const [playerCards, setPlayerCards] = useState([] as Array<TCard>);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");

  const [purse, setPurse] = useState(500);
  const [rate, setRate] = useState(0);

  let isDisabled = true;
  if (playerCards.length !== 0 && result.length === 0) {
    isDisabled = false;
  }
  let isDisabledStart = false;
  if (rate <= 0 || playerCards.length > 0) {
    isDisabledStart = true;
  }

  const isShowCards = !result || (isDisabled && isDisabledStart);

  let isShowChips = false;
  if (purse > 0) {
    isShowChips = true;
  }

  const startGame = useCallback(() => {
    setDealerCards([getRandomCard()]);
    setPlayerCards([getRandomCard(), getRandomCard()]);
    setResult("");
  }, []);

  const sumPlayer = useMemo(() => getSum(playerCards), [playerCards]);
  const sumDealer = useMemo(() => getSum(dealerCards), [dealerCards]);

  const getResult = useCallback(() => {
    if (sumPlayer > sumDealer) {
      setPurse(purse + rate * 2);
      setRate(0);
      setResult("ПОБЕДА!!!");
    } else if (sumPlayer === sumDealer) {
      setPurse(purse + rate);
      setRate(0);
      setResult("УВЫ НИЧЬЯ!");
    } else if (sumDealer > 21) {
      setPurse(purse + rate * 2);
      setRate(0);
      setResult("У ДИЛЕРА ПЕРЕБОР!");
    } else if (sumDealer === 21) {
      setRate(0);
      setResult("У ДИЛЕРА BLACK JACK!");
    } else {
      setRate(0);
      setResult("ПРОИГРЫШ!");
    }
  }, [purse, rate, sumPlayer, sumDealer]);

  useEffect(() => {
    if (answer === "card") {
      setPlayerCards([...playerCards, getRandomCard()]);
      setAnswer(" ");
    }
  }, [answer, playerCards]);

  useEffect(() => {
    if (sumPlayer === 21) {
      setPurse(purse + rate * 2);
      setRate(0);
      setResult("BLACK JACK!!!");
      setAnswer("");
    } else if (sumPlayer > 21) {
      setRate(0);
      setResult("ПЕРЕБОР");
      setAnswer("");
    }
  }, [sumPlayer, purse, rate]);

  useEffect(() => {
    let sumDealer = getSum(dealerCards);

    if (answer === "cardDealer") {
      if (sumDealer < 17) {
        setDealerCards([...dealerCards, getRandomCard()]);
      } else {
        setAnswer("");
        getResult();
      }
    }
  }, [answer, dealerCards, getResult]);

  const onChangePurse = useCallback(
    (token) => {
      setDealerCards([]);
      setPlayerCards([]);
      setResult("");
      if (purse >= token) {
        setPurse(purse - token);
        setRate((prevRate: number) => prevRate + token);
      }
    },
    [purse, setResult, setPlayerCards, setDealerCards, setRate, setPurse]
  );

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Toolbar className={classes.header}>
          <Typography className={classes.logo} variant="h4">
            BLACK JACK
          </Typography>
          <Header rate={rate} purse={purse} setPurse={setPurse} />
        </Toolbar>
        <Cards
          cards={dealerCards}
          title="Карты дилера"
          isShowCards={isShowCards}
        />

        <div className={classes.info}>
          <Typography color="textPrimary" variant="h6">
            {!!result && `У вас:  ${sumPlayer}`}
          </Typography>
          <Typography className={classes.result} variant="h5">
            {result}
          </Typography>
          <Typography color="textPrimary" variant="h6">
            {!!result && `У дилера:  ${sumDealer}`}
          </Typography>
        </div>
        <Cards
          cards={playerCards}
          title="Ваши карты"
          isShowCards={isShowCards}
        />
        <div className={classes.playerBlock}>
          {isShowChips && <Chips purse={purse} onChangePurse={onChangePurse} />}
          <Buttons
            startGame={startGame}
            setAnswer={setAnswer}
            isDisabledStart={isDisabledStart}
            isDisabled={isDisabled}
          />
        </div>
      </Container>
    </div>
  );
};
