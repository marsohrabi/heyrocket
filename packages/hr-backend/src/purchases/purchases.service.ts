import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Op, Sequelize } from "sequelize";
import { PurchaseEntity } from "./purchase.entity";
import { Purchase as GqlPurchase, InputPurchase, PurchaseConnection } from "../graphql.schema";

@Injectable()
export class PurchasesService {
    constructor(
        @Inject("PURCHASE_REPOSITORY") private readonly purchasesRepository: typeof PurchaseEntity,
    ) { }

    convertPurchaseEntityToGraphql(purchase: PurchaseEntity) {
        const gqlPurchase: GqlPurchase = {
            id: purchase.id,
            amount: purchase.amount
        };
        return gqlPurchase;
    }

    //private readonly purchases: Purchase[] = [];

    async createPurchase(inputPurchase: InputPurchase) {
        const fields = {
            amount: inputPurchase.amount
        };
        const f = await this.purchasesRepository.create({
            amount: inputPurchase.amount,
        });

        return this.convertPurchaseEntityToGraphql(f);
    }

    /* async create(purchase: Purchase): Promise<Purchase> {
        console.log(purchase);

        this.purchases.push(purchase);
        return purchase;
    } */

    async findAllPurchases() {
        const purchaseEntities = await this.purchasesRepository.findAll({
            order: [['name', 'ASC']],
        });

        return purchaseEntities.map(this.convertPurchaseEntityToGraphql);
    }


    /* async findAll(): Promise<Purchase[]> {
        const allPurchases = await this.purchasesRepository.findAll({
            order: Sequelize.literal("id ASC"),
            offset: 0,
        });
        const gqlPurchases: Purchase[] = allPurchases.map((c) => {
            return {
                id: c.id,
                amount: c.amount,
                created_at: c.created_at,
            };
        });
        return gqlPurchases;
    } */

}
