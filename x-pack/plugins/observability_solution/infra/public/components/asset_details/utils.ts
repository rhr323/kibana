/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { InventoryItemType } from '@kbn/metrics-data-access-plugin/common';
import type { InfraMetadata } from '../../../common/http_api';
import { INTEGRATIONS, APM_FILTER_FIELD_PER_ASSET_TYPE } from './constants';

export const toTimestampRange = ({ from, to }: { from: string; to: string }) => {
  const fromTs = new Date(from).getTime();
  const toTs = new Date(to).getTime();

  return { from: fromTs, to: toTs };
};

const DEFAULT_FROM_IN_MILLISECONDS = 15 * 60000;
export const getDefaultDateRange = () => {
  const now = Date.now();

  return {
    from: new Date(now - DEFAULT_FROM_IN_MILLISECONDS).toISOString(),
    to: new Date(now).toISOString(),
  };
};

export const getIntegrationsAvailable = (metadata?: InfraMetadata | null) => {
  if (!metadata) {
    return [];
  }

  return Object.entries(INTEGRATIONS)
    .filter(([_, fields]) => metadata?.features?.some((f) => fields.includes(f.name)))
    .map(([name]) => name);
};

export const getApmField = (assetType: InventoryItemType): string => {
  switch (assetType) {
    case 'host':
      return APM_FILTER_FIELD_PER_ASSET_TYPE.host;
    case 'container':
      return APM_FILTER_FIELD_PER_ASSET_TYPE.container;
    default:
      return '';
  }
};
