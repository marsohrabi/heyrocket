import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Sequelize } from "sequelize";
import { RocketEntity } from "./rocket.entity";
import { Rocket, PageParams, RocketConnection } from "../graphql.schema";

@Injectable()
export class RocketsService {
    constructor(
        @Inject("ROCKET_REPOSITORY") private readonly rocketsRepository: typeof RocketEntity,
    ) { }

    private readonly rockets: Rocket[] = [];

    create(rocket: Rocket): Rocket {
        rocket.id = this.rockets.length + 1;
        this.rockets.push(rocket);
        return rocket;
    }

    async findAll(): Promise<Rocket[]> {



        // const allRockets = await this.rocketsRepository.findAll({
        //     limit: 20
        // });
        // const gqlRockets: Rocket[] = allRockets.map((c) => {
        //     return {
        //         model: c.model,
        //         id: c.id,
        //         price: c.price,
        //         description: c.description
        //     };
        // });
        // return gqlRockets;


        //TEMP


        const gqlRockets: Rocket[] = [
            {
                model: "sample model",
                id: 1,
                price: 1000,
                description: "sample description"
            }
        ]

        return gqlRockets


    }

    async pages(params: PageParams): Promise<RocketConnection> {

        const page = await this.rocketsRepository.findAndCountAll({
            order: Sequelize.literal("id DESC"),
            limit: params.limit,
            offset: params.offset,
            logging: false
        })

        const gqlRockets: Rocket[] = page.rows.map((c) => {
            return {
                model: c.model,
                id: c.id,
                price: c.price,
                description: c.description
            };
        });

        return { totalCount: page.count, rockets: gqlRockets };
    }

    findOneById(id: number): Rocket {
        const found = this.rockets.find((rocket) => rocket.id === id);

        if (!found) {
            throw new NotFoundException("Rocket not found");
        }

        return found;
    }



}

