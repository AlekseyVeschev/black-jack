import React, { FC } from "react";
import Typography from "@material-ui/core/Typography";
import { Zoom } from "@material-ui/core";
import { CARDS } from "../../constants";
import { TCard } from "../../types";
import { useStyles } from "./styles";

type CardsProps = {
  cards: Array<TCard>;
  title?: string;
  isShowCards?: boolean;
};

export const Cards: FC<CardsProps> = ({ cards = [], title, isShowCards }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="inherit">
        {title}
      </Typography>

      {cards.map((card: TCard, i: number) => {
        return (
          <div className={classes.cards} key={i}>
            <Zoom in={isShowCards} timeout={1000}>
              <img className={classes.img} src={CARDS[card]} alt={card} />
            </Zoom>
          </div>
        );
      })}
    </div>
  );
};
