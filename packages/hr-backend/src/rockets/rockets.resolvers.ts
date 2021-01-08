import { ParseIntPipe, UseGuards, UseInterceptors } from "@nestjs/common";
import { Args, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";
import { PubSub } from "graphql-subscriptions";
import { TransformHeadersInterceptor } from "src/common/interceptors/headers.interceptor";
import { Rocket, RocketConnection, PageParams } from "../graphql.schema";
import { RocketsGuard } from "./rockets.guard";
import { RocketsService } from "./rockets.service";

const pubSub = new PubSub();

@Resolver("Rocket")
export class RocketsResolvers {
    constructor(private readonly rocketsService: RocketsService) {}

    @Query()
    @UseGuards(RocketsGuard)
    async getRockets(): Promise<Rocket[]> {
        return this.rocketsService.findAll();
    }

    @UseInterceptors(TransformHeadersInterceptor)
    @Query()
    @UseGuards(RocketsGuard)
    async pages(@Args("params") params: PageParams): Promise<RocketConnection> {
        console.time('page');
        const toReturn = await this.rocketsService.pages(params);
        console.timeEnd('page');

        return toReturn
    }

    @Query("rocket")
    async findOneById(
        @Args("id", ParseIntPipe)
        id: number
    ): Promise<Rocket> {
        return this.rocketsService.findOneById(id)
    }

    @Mutation("createRocket")
    async create(@Args("createRocketInput") args: Rocket): Promise<Rocket> {
        const createdRocket = await this.rocketsService.create(args);
        pubSub.publish("rocketCreated", { rocketCreated: createdRocket });
        return createdRocket;
    }

}