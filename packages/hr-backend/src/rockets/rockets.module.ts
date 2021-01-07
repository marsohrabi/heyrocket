import { Module } from "@nestjs/common"
import { DatabaseModule } from "../database/database.module";
import { RocketsController } from "./rockets.controller";
import { rocketsProviders } from "./rockets.providers";
import { RocketsService } from "./rockets.service";

@Module({
    imports: [DatabaseModule],
    controllers: [RocketsController],
    providers: [RocketsService, ...rocketsProviders]
})
export class RocketsModule {}