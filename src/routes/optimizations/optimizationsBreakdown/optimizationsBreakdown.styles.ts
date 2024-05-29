import global_BackgroundColor_light_100 from '@patternfly/react-tokens/dist/js/global_BackgroundColor_light_100';
import global_spacer_lg from '@patternfly/react-tokens/dist/js/global_spacer_lg';
import global_spacer_md from '@patternfly/react-tokens/dist/js/global_spacer_md';
import type React from 'react';

export const styles = {
  alertContainer: {
    marginBottom: global_spacer_lg.value,
  },
  codeBlock: {
    display: 'flex',
  },
  container: {
    minHeight: '100vh',
  },
  currentActions: {
    height: '36px',
  },
  optimizedState: {
    minHeight: '285px',
  },
  pagination: {
    backgroundColor: global_BackgroundColor_light_100.value,
    paddingBottom: global_spacer_md.value,
    paddingTop: global_spacer_md.value,
  },
  tabs: {
    backgroundColor: global_BackgroundColor_light_100.value,
    paddingLeft: global_spacer_lg.value,
  },
  utilizationContainer: {
    backgroundColor: global_BackgroundColor_light_100.value,
    marginTop: global_spacer_lg.value,
  },
} as { [className: string]: React.CSSProperties };
