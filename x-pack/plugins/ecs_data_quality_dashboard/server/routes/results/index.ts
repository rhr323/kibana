/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { IRouter, Logger } from '@kbn/core/server';

import { postResultsRoute } from './post_results';
import { getResultsIndicesLatestRoute } from './get_results_indices_latest';
import type { DataQualityDashboardRequestHandlerContext } from '../../types';

export const resultsRoutes = (
  router: IRouter<DataQualityDashboardRequestHandlerContext>,
  logger: Logger
) => {
  postResultsRoute(router, logger);
  getResultsIndicesLatestRoute(router, logger);
};
