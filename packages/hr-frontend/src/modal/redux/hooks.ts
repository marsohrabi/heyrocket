import { useSelector } from "react-redux";
import { RootState } from "../../common/redux/reducers/index"


export const useModal = () => {
    return useSelector((state: RootState) => state.modal);
};

export const useOpen = () => {
    return useSelector((state: RootState) => state.modal.openModal);
};
