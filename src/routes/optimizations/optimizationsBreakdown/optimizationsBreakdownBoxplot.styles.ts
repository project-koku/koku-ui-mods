import global_spacer_md from '@patternfly/react-tokens/dist/js/global_spacer_md';
import global_spacer_sm from '@patternfly/react-tokens/dist/js/global_spacer_sm';

export const styles = {
  cardContainer: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
  },
  dividerContainer: {
    marginRight: `-${global_spacer_sm.value}`,
    paddingBottom: global_spacer_md.value,
    paddingTop: global_spacer_md.value,
  },
} as { [className: string]: React.CSSProperties };
