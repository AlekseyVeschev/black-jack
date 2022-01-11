import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

export const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    table: {
      marginLeft: theme.spacing(3),
    },

    info: {
      display: "flex",
      flex: 1,
      alignItems: "center",
      "& > span": {
        color: theme.palette.primary.light,
        fontSize: 24,
        fontWeight: 700,
        marginLeft: theme.spacing(2),
        textShadow: "4px 4px 6px #000;",
      },
    },
    IncrementPurse: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& > :hover": {
        transform: "scale(1.15) ",
        transition: "1s",
      },
    },
  })
);
