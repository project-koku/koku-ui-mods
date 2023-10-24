import React from 'react';
import { OptimizationsBreakdown } from 'routes/optimizations/optimizationsBreakdown';

interface OptimizationsDetailsDemoOwnProps {
  // TBD...
}

type OptimizationsDetailsDemoProps = OptimizationsDetailsDemoOwnProps;

const OptimizationsDetailsDemo: React.FC<OptimizationsDetailsDemoProps> = () => {
  return <OptimizationsBreakdown />;
};

export default OptimizationsDetailsDemo;
