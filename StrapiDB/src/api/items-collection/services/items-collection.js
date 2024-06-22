'use strict';

/**
 * items-collection service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::items-collection.items-collection');
