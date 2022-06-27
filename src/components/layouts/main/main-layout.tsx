import {FC} from 'react';

import Footer from '@/src/components/layouts/main/footer';
import Header from '@/src/components/layouts/main/header';
import type {GetLayout, LayoutProps} from '@/types/main';

import * as S from './main-layout.styled';

const DefaultLayout: FC<LayoutProps> = ({children}) => (
  <S.Wrapper>
    <Header />
    <S.Container>{children}</S.Container>
    <Footer />
  </S.Wrapper>
);

export default DefaultLayout;

export const getDefaultLayout: GetLayout = (page, deviceType) => (
  <DefaultLayout deviceType={deviceType}>{page}</DefaultLayout>
);
