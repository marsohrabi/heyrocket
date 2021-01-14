import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../common/redux/reducers/index"
import { actions, PageParams } from "./model"

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

export const useRocketsPage = ({ limit, offset }: PageParams) => {
    const dispatch = useDispatch();

    const rocketsPageRemoteData = useSelector((state: RootState) => state.rockets.rocketsConnection);

    useEffect(() => {
        dispatch(actions.fetchRocketsPage({ limit, offset }))
    }, [limit, offset])

    if (rocketsPageRemoteData === "Initialized") {
        dispatch(actions.fetchRocketsPage({ limit, offset }))
    }

    if (rocketsPageRemoteData !== "Initialized" && rocketsPageRemoteData !== "Failure" && rocketsPageRemoteData !== "Pending") {
        console.log("Returning rocket page data");
        return rocketsPageRemoteData
    }

    return rocketsPageRemoteData;
}
