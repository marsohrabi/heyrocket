import { Theme, makeStyles, createStyles, Typography } from "@material-ui/core";
import React from "react";
import { PurchaseModal } from "./PurchaseModal";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      width: '100%',
      backgroundColor: '#fffaed',
      padding: '16px',
      textAlign: 'center',
      border: '1px solid #000',
    },
  }),
);

export const PurchaseWindow: React.FC = () => {
    const classes = useStyles();

    const total = '1,000,000'

    return (
        <div className={classes.text}> 
        <Typography> Total: ${total} </Typography>
        <PurchaseModal />
        </div>
    )
}