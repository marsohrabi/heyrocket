import { ActionType as ActionT, action } from "typesafe-actions";

export class Rocket {
    id!: number;
    model?: string;
    price?: number;
    description?: string;
    image_url?: string;
}

export class PageParams {
    limit!: number;
    offset!: number;
}

export class RocketConnection {
    totalCount!: number;
    rockets?: Rocket[];
}


export type RemoteData<T> = "Initialized" | "Pending" | "Failure" | T;

interface IModel {
    readonly rockets: RemoteData<Rocket[]>;
    readonly rocketsConnection: RemoteData<RocketConnection>;
}

const initialState: IModel = {
    rockets: "Initialized",
    rocketsConnection: "Initialized"
}


export const actions = {
    fetchRockets: () => action("FETCH_ROCKETS", {}),
    recieveRockets: (rockets: Rocket[]) => action("RECEIVE_ROCKETS", { rockets }),
    fetchRocketsFailure: (e: string) => action("FETCH_ROCKET_FAILURE", { e }),

    fetchRocketsPage: (params: PageParams) => action("FETCH_ROCKETS_PAGE", { params }),
    recieveRocketsPage: (getRocketPages: RocketConnection) => action("RECEIVE_ROCKETS_PAGE", { getRocketPages }),
    fetchRocketsPageFailure: (e: string) => action("FETCH_ROCKET_PAGE_FAILURE", { e }),

    resetRocketsPage: () => action("RESET_ROCKETS_PAGE", {})
}

export type ActionType = ActionT<typeof actions>


export const reducer = (state: IModel = initialState, action: ActionType): IModel => {

    switch (action.type) {

        case "FETCH_ROCKETS": {
            return {
                ...state,
                rockets: "Pending"
            }
        }
        case "FETCH_ROCKET_FAILURE": {
            return {
                ...state,
                rockets: "Failure"
            }
        }
        case "RECEIVE_ROCKETS": {
            return {
                ...state,
                rockets: action.payload.rockets
            }
        }


        case "FETCH_ROCKETS_PAGE": {
            return {
                ...state,
                rocketsConnection: "Pending"
            }
        }
        case "FETCH_ROCKET_PAGE_FAILURE": {
            return {
                ...state,
                rocketsConnection: "Failure"
            }
        }
        case "RECEIVE_ROCKETS_PAGE": {
            return {
                ...state,
                rocketsConnection: action.payload.getRocketPages
            }
        }

        case "RESET_ROCKETS_PAGE":{
            return {
                ...state,
                rocketsConnection: "Initialized"
            }
        }
        default: {
            return state
        }
    }
}