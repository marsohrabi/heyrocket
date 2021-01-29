import { Module } from "@nestjs/common"
import { DatabaseModule } from "../database/database.module";
//import { RocketsController } from "./rockets.controller";
//import { RocketsGuard } from "./rockets.guard";
import { purchasesProviders } from "./purchases.providers";
import { PurchasesResolvers } from "./purchases.resolvers";
import { PurchasesService } from "./purchases.service";

@Module({
    imports: [DatabaseModule],
    controllers: [],
    providers: [PurchasesService, PurchasesResolvers, ...purchasesProviders]
})
export class PurchasesModule {}