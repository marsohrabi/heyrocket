import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Op, Sequelize } from "sequelize";
import { PurchaseEntity } from "./purchase.entity";
import { Purchase as GqlPurchase, InputPurchase, PurchaseConnection } from "../graphql.schema";

@Injectable()
export class PurchasesService {
    constructor(
        @Inject("PURCHASE_REPOSITORY") private readonly purchasesRepository: typeof PurchaseEntity,
    ) { }

    private readonly purchases: GqlPurchase[] = [];

    convertPurchaseEntityToGraphql(purchase: PurchaseEntity) {
        const gqlPurchase: GqlPurchase = {
            id: purchase.id,
            amount: purchase.amount,
            created_at: purchase.created_at,
        };
        return gqlPurchase;
    }

    async createPurchase(inputPurchase: InputPurchase) {
        const fields = {
            amount: inputPurchase.amount
        };
        const f = await this.purchasesRepository.create({
            id: this.purchases.length + 1, //
            amount: inputPurchase.amount,
        });

        this.purchases.push(f);

        return this.convertPurchaseEntityToGraphql(f);
    }

    async findAllPurchases() {
        const purchaseEntities = await this.purchasesRepository.findAll({
            order: [['created_at', 'ASC']],
        });

        return purchaseEntities.map(this.convertPurchaseEntityToGraphql);
    }
}
