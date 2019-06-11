import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

export interface ThemeOpts extends ThemeOptions {
  cardDetail: {
    marginLeft: number,
  },
};

export default createMuiTheme({
  cardDetail: {
    marginLeft: 45,
  }
} as ThemeOpts);