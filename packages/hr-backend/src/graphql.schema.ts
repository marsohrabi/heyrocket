
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class InputRocket {
    id: number;
    name: string;
    price: number;
}

export class PageParams {
    limit: number;
    offset: number;
}

export abstract class IQuery {
    abstract getRockets(): Rocket[] | Promise<Rocket[]>;

    abstract pages(params?: PageParams): RocketConnection | Promise<RocketConnection>;

    abstract Rocket(id: string): Rocket | Promise<Rocket>;
}

export class Rocket {
    id: number;
    name: string;
    price: number;
}

export class RocketConnection {
    totalCount: number;
    rockets?: Rocket[];
}

export abstract class IMutation {
    abstract createRocket(inputRocket?: InputRocket): Rocket | Promise<Rocket>;
}
