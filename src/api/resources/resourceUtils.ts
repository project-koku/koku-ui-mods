import { runResource as runOcpResource } from './ocpResource';
import { ResourcePathsType, ResourceType } from './resource';

// Temporary check until typeahead is implemented for all filters
export function isResourceTypeValid(resourcePathsType: ResourcePathsType, resourceType: ResourceType) {
  let result = false;

  if (resourcePathsType === ResourcePathsType.ocp || resourcePathsType === ResourcePathsType.ocpCloud) {
    switch (resourceType) {
      case ResourceType.account:
      case ResourceType.aws_category:
      case ResourceType.cluster:
      case ResourceType.gcpProject:
      case ResourceType.node:
      case ResourceType.payerTenantId:
      case ResourceType.productService:
      case ResourceType.project:
      case ResourceType.region:
      case ResourceType.resourceLocation:
      case ResourceType.service:
      case ResourceType.serviceName:
      case ResourceType.subscriptionGuid:
        result = true;
        break;
    }
  }
  return result;
}

export function runResource(resourcePathsType: ResourcePathsType, resourceType: ResourceType, query: string) {
  let result;
  switch (resourcePathsType) {
    case ResourcePathsType.ocp:
    case ResourcePathsType.ocpCloud:
      result = runOcpResource(resourceType, query);
      break;
  }
  return result;
}
