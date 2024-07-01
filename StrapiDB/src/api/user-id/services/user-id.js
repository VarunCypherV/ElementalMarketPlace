'use strict';

/**
 * user-id service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-id.user-id');
