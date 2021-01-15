
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class InputPurchase {
    id?: number;
    amount: number;
}

export class PageParams {
    limit: number;
    offset: number;
}

export class Purchase {
    id: number;
    amount: number;
    created_at?: Date;
}

export class PurchaseConnection {
    totalCount: number;
    purchases?: Purchase[];
}

export abstract class IQuery {
    abstract getPurchases(): Purchase[] | Promise<Purchase[]>;

    abstract getPurchase(id: number): Purchase | Promise<Purchase>;

    abstract getRockets(): Rocket[] | Promise<Rocket[]>;

    abstract getRocketPages(params?: PageParams): RocketConnection | Promise<RocketConnection>;

    abstract rocket(id: string): Rocket | Promise<Rocket>;

    abstract findPage(pageNum: number): Rocket[] | Promise<Rocket[]>;
}

export abstract class IMutation {
    abstract createPurchase(inputPurchase: InputPurchase): Purchase | Promise<Purchase>;
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
