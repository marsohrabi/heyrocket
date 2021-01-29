import {ActionType as ActionT, action} from 'typesafe-actions';

interface IModel {
    openModal: boolean;
    modalChild: React.FC<{}>;
}

const Init: React.FC = () => {
    return null;
};

const initialState: IModel = {
    openModal: false,
    modalChild: Init,
};

export const actions = {
   openModal: () => action("OPEN_MODAL"),
   closeModal: () => action("CLOSE_MODAL")
}

export type ActionType = ActionT<typeof actions>;

export const reducer = (
    state: IModel = initialState,
    action: ActionType
): IModel => {
    switch (action.type) {
        case "OPEN_MODAL":
            return {
                ...state,
                openModal: true
            }

        case "CLOSE_MODAL":
            return { 
                ...state, 
                openModal: false };
        default:
            return state;
    }
};
