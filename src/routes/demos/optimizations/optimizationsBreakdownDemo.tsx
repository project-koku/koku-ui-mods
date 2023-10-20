import messages from 'locales/messages';
import React from 'react';
import { useIntl } from 'react-intl';
import { useLocation } from 'react-router-dom';
import { OptimizationsBreakdown } from 'routes/optimizations/optimizationsBreakdown';

interface OptimizationsBreakdownDemoOwnProps {
  // TBD...
}

type OptimizationsBreakdownDemoProps = OptimizationsBreakdownDemoOwnProps;

const OptimizationsBreakdownDemo: React.FC<OptimizationsBreakdownDemoProps> = () => {
  const intl = useIntl();
  const location = useLocation();

  return (
    <OptimizationsBreakdown
      id="59c5dd6a-d58d-4842-a9b7-2193a3b2e5c9"
      breadcrumbLabel={intl.formatMessage(messages.breakdownBackToOptimizations)}
      breadcrumbPath={location?.state?.optimizations ? location.state.optimizations.breadcrumbPath : undefined}
    />
  );
};

export default OptimizationsBreakdownDemo;
