import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

export const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    root: {
      display: "flex",
      "& > *": {
        width: theme.spacing(11),
        height: theme.spacing(11),
        borderRadius: "50%",
        padding: theme.spacing(2),
        flex: 1,
        margin: theme.spacing(1.5),
        color: theme.palette.text.primary,
        boxShadow: "8px 8px 8px #000;",
        transition: "2s",
      },
    },
  })
);
