import React, { FC } from "react";
import { Avatar } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import { TOKENS } from "../../constants";
import { TToken } from "../../types";
import { useStyles } from "./styles";

type СhipsProps = {
  purse: number;
  onChangePurse: (token: number) => void;
};
export const Chips: FC<СhipsProps> = ({ purse, onChangePurse }) => {
  const classes = useStyles();

  const allTokens = Object.keys(TOKENS) as Array<TToken>;

  return (
    <div className={classes.tokens}>
      {allTokens.map(
        (token: TToken) =>
          Number(token) <= purse && (
            <ListItem key={token}>
              <ListItemAvatar>
                <Avatar
                  className={classes.token}
                  onClick={() => {
                    onChangePurse(Number(token));
                  }}
                  src={TOKENS[token]}
                  alt={token}
                >
                  {token}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={token} />
            </ListItem>
          )
      )}
    </div>
  );
};
