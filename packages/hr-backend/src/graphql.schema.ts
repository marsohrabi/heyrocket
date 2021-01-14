
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

export class Rocket {
    id: number;
    model?: string;
    price?: number;
    description?: string;
    image_url?: string;
}

export class RocketConnection {
    totalCount: number;
    rockets?: Rocket[];
}

export abstract class IQuery {
    abstract getRockets(): Rocket[] | Promise<Rocket[]>;

    abstract getRocketPages(params?: PageParams): RocketConnection | Promise<RocketConnection>;

    abstract rocket(id: string): Rocket | Promise<Rocket>;

    abstract findPage(pageNum: number): Rocket[] | Promise<Rocket[]>;
}
