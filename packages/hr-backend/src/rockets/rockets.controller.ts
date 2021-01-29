import { Controller, Get, Param } from '@nestjs/common';
import { Rocket, RocketConnection } from '../graphql.schema'
import { RocketsService } from './rockets.service';

@Controller('rockets')
export class RocketsController {
    constructor(private readonly rocketsService: RocketsService) {}

    @Get('page/:pageNum')
    async FindPage(@Param('pageNum') pageNum: number): Promise<Rocket[]> {
        //const toReturn = await this.rocketsService.pages({limit: 20, offset: 20*(pageNum-1)});
        const toReturn = await this.rocketsService.findPage(pageNum);      
        return toReturn;
    }

    @Get('page')
    async FindAll(): Promise<RocketConnection> {
        const toReturn = await this.rocketsService.pages({limit: 20, offset: 0});
        return toReturn;
    }
}