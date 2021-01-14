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
        console.log("Returning rocket data");
        return rocketsRemoteData
    }

    return rocketsRemoteData;

}

export const useRocketsPage = (pageNum: number) => {
    const dispatch = useDispatch();

    const rocketsPageRemoteData = useSelector((state: RootState) => state.rockets.rockets);

    if (rocketsPageRemoteData === "Initialized") {
        dispatch(actions.fetchRocketsPage(2))
    }

    if (rocketsPageRemoteData !== "Initialized" && rocketsPageRemoteData !== "Failure" && rocketsPageRemoteData !== "Pending") {
        console.log("Returning rocket page data");
        return rocketsPageRemoteData
    }

    return rocketsPageRemoteData;
}