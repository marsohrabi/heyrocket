import { Controller, Get, Param } from '@nestjs/common';
import { Purchase, PurchaseConnection } from '../graphql.schema'
import { PurchasesService } from './purchases.service';

@Controller('purchase')
export class RocketsController {
    constructor(private readonly purchasesService: PurchasesService) {}

    @Get('page')
    async FindAll(): Promise<Purchase[]> {
        const toReturn = await this.purchasesService.findAllPurchases();
        return toReturn;
    }
}