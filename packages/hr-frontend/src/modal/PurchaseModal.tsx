import { Theme, makeStyles, createStyles, Modal, Button } from "@material-ui/core";
import React from "react";
import { actions as modalActions } from "./redux/model";
import { actions as shoppingCartActions } from "../shopping-cart/redux/model"
import { useDispatch } from "react-redux";
import { useModal } from "./redux/hooks";

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

export const PurchaseModal: React.FC = () => {
    const dispatch = useDispatch();
    const modal = useModal();
    const classes = useStyles();

    const handleOpen = () => {
        // dispatch(shoppingCartActions.addTransaction());
        dispatch(shoppingCartActions.emptyCart)();
        dispatch(modalActions.openModal());
    }

    const handleClose = () => {
        dispatch(modalActions.closeModal());
    };


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
                open={modal.openModal}
                onClose={handleClose}
            >
                {body}
            </Modal>
        </div>
    )
}