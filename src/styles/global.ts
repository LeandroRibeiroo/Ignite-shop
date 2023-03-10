import { globalCss } from './index';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0
  },
  body: {
    '-webkit-font-smoothing': 'antialased',
    backgroundColor: '$gray900',
    color: '$gray100'
  },
  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400
  }
});
