import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import greenCarpet from "../../img/bgd_menu.png";

export const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    root: {
      display: "flex",
      backgroundImage: `url(${greenCarpet})`,
      backgroundSize: "cover",
      backgroundColor: "green",
      flex: 1,
      height: "100%",
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      flex: 1,
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 0,
    },
    logo: {
      fontWeight: 700,
      fontFamily: "cursive",
      textShadow: "0px 0px 12px #fff;",
    },
    info: {
      display: "flex",
      justifyContent: "space-around",
      textAlign: "center",
      fontWeight: 600,
    },
    result: {
      fontWeight: 600,
      fontFamily: "cursive",
      textShadow: "0px 0px 12px #fff;",
    },
    playerBlock: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-end",
    },
  })
);
