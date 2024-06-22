'use strict';

/**
 * user-collection service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-collection.user-collection');
