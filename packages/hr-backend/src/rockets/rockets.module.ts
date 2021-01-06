import { Module } from "@nestjs/common"
import { DatabaseModule } from "../database/database.module";
import { RocketsService } from "./rockets.service";

@Module({
    imports: [DatabaseModule],
    controllers: [],
    providers: [RocketsService]
})
export class RocketsModule {}