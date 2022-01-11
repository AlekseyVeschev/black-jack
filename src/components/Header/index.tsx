import React, { FC, useCallback } from "react";
import { Avatar } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import { TOKENS } from "../../constants";
import { useStyles } from "./styles";

type HeaderProps = {
  rate: number;
  purse: number;
  setPurse: (purse: number) => void;
};
export const Header: FC<HeaderProps> = ({ rate, purse, setPurse }) => {
  const classes = useStyles();

  const isShowIncrementPurse = purse === 0 && rate === 0;

  const onChangeIncrementPurse = useCallback(() => {
    setPurse(500);
  }, [setPurse]);

  return (
    <div className={classes.root}>
      <List className={classes.table}>
        <div className={classes.info}>
          <ListItemText primary="кошелёк" />
          <span>{purse}</span>
        </div>
        <div className={classes.info}>
          <ListItemText primary="ставка" />
          <span>{rate}</span>
        </div>
        {isShowIncrementPurse && (
          <div className={classes.IncrementPurse}>
            <ListItemText secondary="пополнить кошелёк" />
            <ListItemAvatar>
              <Avatar
                className={classes.token}
                onClick={onChangeIncrementPurse}
                src={TOKENS["500"]}
                alt="500"
              />
            </ListItemAvatar>
          </div>
        )}
      </List>
    </div>
  );
};
