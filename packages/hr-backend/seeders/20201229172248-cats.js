/* eslint-disable @typescript-eslint/no-var-requires */
"use strict";

var faker = require("faker");
var _ = require('lodash');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const count = 1000000;
        const rockets = _.times(count, () => {
            const now = new Date();
            return {
                price: _.random(100000, 2000000),
                name: faker.name.findName(),
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
