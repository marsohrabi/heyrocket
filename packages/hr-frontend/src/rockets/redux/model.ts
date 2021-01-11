import { ActionType as ActionT, action } from "typesafe-actions";


export class Rocket {
    id?: number;
    model?: string;
    price?: number;
    description?: string;
    image_url?: string;
}

export type RemoteData<T> = "Initialized" | "Pending" | "Failure" | T;

interface IModel {
    readonly rockets: RemoteData<Rocket[]>
}

const initialState: IModel = {
    rockets: "Initialized"
}


export const actions = {
    fetchRockets: () => action("FETCH_ROCKETS", {}),
    recieveRockets: (rockets: Rocket[]) => action("RECEIVE_ROCKETS",  {rockets} ),
    fetchRocketsFailure: (e: string) => action("FETCH_ROCKET_FAILURE", { e })
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
        default: {
            return state
        }
    }
}