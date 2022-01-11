import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

export const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    tokens: {
      display: "flex",
      flex: 1,
      flexWrap: "wrap",
      "& > *": {
        marginLeft: theme.spacing(2),
        flex: 1,
        textAlign: "center",
        maxWidth: theme.spacing(13),
      },
    },
    token: {
      boxShadow: "8px 8px 8px #000;",
      cursor: "pointer",
    },
  })
);
