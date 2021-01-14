import { Theme, makeStyles, createStyles, Typography } from "@material-ui/core";
import React from "react";
import { PurchaseModalContainer } from "../modal/containers/PurchaseModalContainer";

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

export interface ITotal {
  total: React.ReactNode;
}

export const PurchaseWindow: React.FC<ITotal> = ({total}) => {
    const classes = useStyles();

    const rocketPriceCurrency = Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
    }).format(total as number);

    return (
        <div className={classes.text}> 
        <Typography> Total: {rocketPriceCurrency} </Typography>
        <PurchaseModalContainer />
        </div>
    )
}