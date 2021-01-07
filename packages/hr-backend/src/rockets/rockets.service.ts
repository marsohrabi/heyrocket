import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Sequelize } from "sequelize";
import { RocketEntity } from "./rocket.entity";
import { Rocket, PageParams, RocketConnection } from "../graphql.schema";

@Injectable()
export class RocketsService {
    constructor(
        @Inject("ROCKET_REPOSITORY")
        private readonly rocketsRepository: typeof RocketEntity,
    ) {}

    private readonly rockets: Rocket[] = [{ id: 1, name: "Zoomer", price: 500000 }];

    async pages(params: PageParams): Promise<RocketConnection> {

        const page = await this.rocketsRepository.findAndCountAll({
            order: Sequelize.literal("id DESC"),
            limit: params.limit,
            offset: params.offset,
            logging: false
        })

        const gqlRockets: Rocket[] = page.rows.map((c) => {
            return {
                name: c.name,
                id: c.id,
                price: c.price,
            };
        });

        return { totalCount: page.count, rockets: gqlRockets };
    }

    create(rocket: Rocket): Rocket {
        rocket.id = this.rockets.length + 1;
        this.rockets.push(rocket);
        return rocket;
    }

    async findAll(): Promise<Rocket[]> {
        const allCats = await this.rocketsRepository.findAll({
            limit: 20
        });
        const gqlRockets: Rocket[] = allCats.map((c) => {
            return {
                name: c.name,
                id: c.id,
                price: c.price,
            };
        });
        return gqlRockets;
    }

    findOneById(id: number): Rocket {
        const found = this.rockets.find((rocket) => rocket.id === id);

        if (!found) {
            throw new NotFoundException("Rocket not found");
        }

        return found;
    }



}

