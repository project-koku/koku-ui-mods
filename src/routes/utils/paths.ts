import { getQueryRoute } from 'api/queries/query';
import { breadcrumbLabelKey, breakdownDescKey, breakdownTitleKey } from 'utils/props';

export const getBreakdownPath = ({
  basePath,
  description,
  groupBy,
  id,
  isPlatformCosts,
  isOptimizationsPath,
  isOptimizationsTab,
  title,
}: {
  basePath: string;
  description?: string; // Used to display a description in the breakdown header
  groupBy: string | number;
  id: string | number; // group_by[account]=<id> param in the breakdown page
  isPlatformCosts?: boolean;
  isOptimizationsPath?: boolean;
  isOptimizationsTab?: boolean;
  title?: string | number; // Used to display a title in the breakdown header
}) => {
  const newQuery: any = {
    ...(description && description !== title && { [breakdownDescKey]: description }),
    ...(title && { [breakdownTitleKey]: title }),
    optimizationsPath: isOptimizationsPath ? true : undefined,
    optimizationsTab: isOptimizationsTab ? true : undefined, // Clear query params
    ...(groupBy && {
      group_by: {
        [groupBy]: isPlatformCosts ? '*' : id, // Use ID here -- see https://github.com/project-koku/koku-ui/pull/2821
      },
    }),
    id,
    isPlatformCosts: isPlatformCosts ? true : undefined,
  };
  return `${basePath}?${getQueryRoute(newQuery)}`;
};

export const getOptimizationsBreakdownPath = ({
  basePath,
  breadcrumbLabel,
  id,
  title,
}: {
  basePath?: string;
  breadcrumbLabel?: string; // Used to display a breadcrumb in the breakdown header
  id: string | number; // group_by[account]=<id> param in the breakdown page
  title: string | number; // Used to display a title in the breakdown header
}) => {
  const newQuery: any = {
    id,
    ...(title && { [breakdownTitleKey]: title }),
    ...(breadcrumbLabel && { [breadcrumbLabelKey]: breadcrumbLabel }),
  };
  return `${basePath}?${getQueryRoute(newQuery)}`;
};
