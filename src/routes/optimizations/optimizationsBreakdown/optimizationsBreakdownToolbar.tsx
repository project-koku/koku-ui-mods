import type { Query } from 'api/queries/query';
import type { RecommendationTerms } from 'api/ros/recommendations';
import messages from 'locales/messages';
import React from 'react';
import { PerspectiveSelect } from 'routes/components/perspective/perspectiveSelect';
import type { OptimizationType } from 'utils/recomendations';
import { hasNotification, hasRecommendation, Interval } from 'utils/recomendations';

interface OptimizationsBreakdownToolbarOwnProps {
  currentInterval?: string;
  isDisabled?: boolean;
  onSelect?: (value: string) => void;
  query?: Query;
  terms?: RecommendationTerms;
  optimizationType?: OptimizationType;
}

type OptimizationsBreakdownToolbarProps = OptimizationsBreakdownToolbarOwnProps;

const OptimizationsBreakdownToolbar: React.FC<OptimizationsBreakdownToolbarProps> = ({
  currentInterval,
  isDisabled,
  onSelect,
  terms,
  optimizationType,
}) => {
  const getOptions = () => {
    return [
      {
        isDisabled:
          !hasRecommendation(terms?.short_term?.recommendation_engines?.[optimizationType]?.config) &&
          !hasNotification(terms?.short_term),
        label: messages.optimizationsShortTerm,
        value: Interval.short_term,
      },
      {
        isDisabled:
          !hasRecommendation(terms?.medium_term?.recommendation_engines?.[optimizationType]?.config) &&
          !hasNotification(terms?.medium_term),
        label: messages.optimizationsMediumTerm,
        value: Interval.medium_term,
      },
      {
        isDisabled:
          !hasRecommendation(terms?.long_term?.recommendation_engines?.[optimizationType]?.config) &&
          !hasNotification(terms?.long_term),
        label: messages.optimizationsLongTerm,
        value: Interval.long_term,
      },
    ];
  };

  const options = getOptions();

  return (
    <PerspectiveSelect
      currentItem={currentInterval || options[0].value}
      isDisabled={isDisabled}
      onSelect={onSelect}
      options={options}
      title={messages.optimizationsPerspective}
    />
  );
};

export { OptimizationsBreakdownToolbar };
