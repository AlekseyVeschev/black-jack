import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

export const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    root: {
      display: "flex",
      padding: theme.spacing(3),
      maxHeight: theme.spacing(20),
    },
    cards: {
      display: "flex",
      flex: 1,
    },
    title: {
      opacity: 0.4,
      marginRight: theme.spacing(2),
    },
    img: {
      margin: theme.spacing(0.5),
      boxShadow: "8px 8px 8px #000;",
    },
  })
);
