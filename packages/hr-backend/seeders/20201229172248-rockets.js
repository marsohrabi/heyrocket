/* eslint-disable @typescript-eslint/no-var-requires */
"use strict";

var faker = require("faker");
var _ = require('lodash');

const imgs = [
    'WV7ZMt3RjsQ',
    'woWf_VJ7dNs',
    'UzOKDfoRrDU',
    '2lailvHTNbU',
    'OqSm1Dqo7zE',
    'Oz5ASaHuCm0',
]

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const count = 1000000;
        const rockets = _.times(count, () => {
            const now = new Date();
            return {
                price: _.random(100000, 2000000),
                model: faker.vehicle.model() + " " + _.random(1,9999),
                image_url: "https://source.unsplash.com/" +
                faker.helpers.randomize(imgs) +
                "/600x400",
                description: faker.lorem.paragraph(),
                updated_at: now,
                created_at: now
            };
        });
        return await queryInterface.bulkInsert("rockets", rockets, {});
    },

    down: async (queryInterface, Sequelize) => {
        return await queryInterface.bulkDelete("rockets", null, {});
    },
};