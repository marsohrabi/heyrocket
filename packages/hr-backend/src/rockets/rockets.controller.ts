import { Controller, Get } from '@nestjs/common';
import { RocketConnection } from '../graphql.schema'
import { RocketsService } from './rockets.service';

@Controller('rockets')
export class RocketsController {
    constructor(private readonly rocketsService: RocketsService) {}

    @Get('page')
    async FindAll(): Promise<RocketConnection> {
        const toReturn = await this.rocketsService.pages({limit: 20, offset: 0});
        return toReturn;
    }
}