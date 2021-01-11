import { useDispatch, useSelector } from "react-redux"

import { RootState } from "../../common/redux/reducers/index"

import { actions } from "./model"

export const useRockets = () => {

    const dispatch = useDispatch();

    const rocketsRemoteData = useSelector((state: RootState) => state.rockets.rockets);

    if (rocketsRemoteData === "Initialized") {
        dispatch(actions.fetchRockets())
    }

    if (rocketsRemoteData !== "Initialized" && rocketsRemoteData !== "Failure" && rocketsRemoteData !== "Pending") {
        return rocketsRemoteData
    }

    return rocketsRemoteData;

}