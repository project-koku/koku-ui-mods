import {
  ClipboardCopy,
  EmptyState,
  EmptyStateBody,
  EmptyStateHeader,
  EmptyStateIcon,
  EmptyStateVariant,
} from '@patternfly/react-core';
import messages from 'locales/messages';
import React from 'react';
import { useIntl } from 'react-intl';
import { OptimizationIcon } from 'routes/components/icons/optimizationIcon';

interface NotConfiguredStateOwnProps {
  // TBD...
}

type NotConfiguredStateProps = NotConfiguredStateOwnProps;

const NotConfiguredState: React.FC<NotConfiguredStateProps> = () => {
  const intl = useIntl();

  const getCliClipboard = () => {
    return (
      <ClipboardCopy
        clickTip={intl.formatMessage(messages.copyToClipboardSuccessfull)}
        hoverTip={intl.formatMessage(messages.copyToClipboard)}
        isCode
        toggleAriaLabel={intl.formatMessage(messages.copyToClipboard)}
      >
        oc label namespace NAMESPACE insights_cost_management_optimizations="true" --overwrite="true"
      </ClipboardCopy>
    );
  };

  const getNamespaceClipboard = () => {
    return (
      <ClipboardCopy
        clickTip={intl.formatMessage(messages.copyToClipboardSuccessfull)}
        hoverTip={intl.formatMessage(messages.copyToClipboard)}
        isCode
        toggleAriaLabel={intl.formatMessage(messages.copyToClipboard)}
      >
        insights_cost_management_optimizations="true"
      </ClipboardCopy>
    );
  };

  return (
    <EmptyState variant={EmptyStateVariant.lg} className="pf-m-redhat-font">
      <EmptyStateHeader
        titleText={intl.formatMessage(messages.notConfiguredTitle)}
        icon={<EmptyStateIcon icon={OptimizationIcon as any} />}
        headingLevel="h1"
      />
      <EmptyStateBody>{intl.formatMessage(messages.notConfiguredDesc)}</EmptyStateBody>
      <EmptyStateBody>
        {intl.formatMessage(messages.notConfiguredNamespace, { clipboard: getNamespaceClipboard() })}
      </EmptyStateBody>
      <EmptyStateBody>{intl.formatMessage(messages.notConfiguredCli, { clipboard: getCliClipboard() })}</EmptyStateBody>
      <EmptyStateBody>
        <a href={intl.formatMessage(messages.docsOptimizations)} rel="noreferrer" target="_blank">
          {intl.formatMessage(messages.learnMore)}
        </a>
      </EmptyStateBody>
    </EmptyState>
  );
};

export { NotConfiguredState };
