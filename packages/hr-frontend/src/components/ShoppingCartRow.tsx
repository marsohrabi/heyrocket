import { List, ListItem, Theme, makeStyles, createStyles, ListItemAvatar, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: 400,
      maxWidth: 300,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

export const ShoppingCartRow: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Typography> Hello World </Typography>
    )
}