import { RocketEntity } from "./rocket.entity";

export const rocketsProviders = [
    {
        provide: "ROCKET_REPOSITORY",
        useValue: RocketEntity
    }
]