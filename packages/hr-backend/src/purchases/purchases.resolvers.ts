import { ParseIntPipe, UseGuards, UseInterceptors } from "@nestjs/common";
import { Args, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";
import { create } from "domain";
import { PubSub } from "graphql-subscriptions";
import { Purchase as GqlPurchase, InputPurchase, PurchaseConnection } from "../graphql.schema";
import { PurchaseEntity } from "./purchase.entity";
import { PurchasesGuard } from "./purchases.guard";
import { PurchasesService } from "./purchases.service";

const pubSub = new PubSub();

@Resolver(PurchaseEntity)
export class PurchasesResolvers {
    constructor(private readonly purchasesService: PurchasesService) {}

    @Query(() => [GqlPurchase])
    async getPurchases() {
        return this.purchasesService.findAllPurchases();
    }


    @Mutation(() => GqlPurchase)
    async createPurchase(@Args("inputPurchase") inputPurchase: InputPurchase) {
        return this.purchasesService.createPurchase(inputPurchase);
    }
}