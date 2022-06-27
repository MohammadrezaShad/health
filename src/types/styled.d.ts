import {theme} from '@/src/providers/theme/ui-theme';

import 'styled-components';

type Theme = typeof theme;
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
