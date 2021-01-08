import { Module } from "@nestjs/common"
import { DatabaseModule } from "../database/database.module";
import { RocketsController } from "./rockets.controller";
import { RocketsGuard } from "./rockets.guard";
import { rocketsProviders } from "./rockets.providers";
import { RocketsResolvers } from "./rockets.resolvers";
import { RocketsService } from "./rockets.service";

@Module({
    imports: [DatabaseModule],
    controllers: [RocketsController],
    providers: [RocketsService, RocketsResolvers, ...rocketsProviders]
})
export class RocketsModule {}