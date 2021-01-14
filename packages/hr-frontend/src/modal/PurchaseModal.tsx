import { Theme, makeStyles, createStyles, Modal, Button } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
    },
  }),
);

interface IPurchaseModal {
  open: boolean;
  handleClose: () => void
  handleOpen: () => void
}

export const PurchaseModal: React.FC<IPurchaseModal> = ({open,handleClose, handleOpen}: IPurchaseModal) => {
    const classes = useStyles();

   

    const body = (
        <div className={classes.paper}>
          <h2>Your Purchase is Complete</h2>
          <p>
            Thank you for using HeyRocket. Your rocket(s) will be sent towards you in 2-3 days.
          </p>
        </div>
      );

    return (
    <div>
        <Button variant="contained" onClick={handleOpen}>
            Complete Purchase
        </Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                {body}
            </Modal>
        </div>
    )
}