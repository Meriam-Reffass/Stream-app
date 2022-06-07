import { makeStyles } from "@material-ui/core";

export const postStyles = makeStyles((theme) => ({
  responsiveImg: {
    width: "100%",
    height: "auto",
  },
  cardImageContainer: {
    width: "100%",
    height: "auto",
    maxHeight: "300px",
    overflowY: "hidden",
    
  },
  Link: {
    textDecoration: "none",
  },
}));
