
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class PageParams {
    limit: number;
    offset: number;
}

export abstract class IQuery {
    abstract getRockets(): Rocket[] | Promise<Rocket[]>;

    abstract pages(params?: PageParams): RocketConnection | Promise<RocketConnection>;

    abstract rocket(id: string): Rocket | Promise<Rocket>;
}

export class Rocket {
    id?: number;
    model?: string;
    price?: number;
    description?: string;
    image_url?: string;
}

export class RocketConnection {
    totalCount: number;
    rockets?: Rocket[];
}
