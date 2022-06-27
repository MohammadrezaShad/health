import React, {FC} from 'react';
import {Box, Typography} from '@mui/material';

import * as S from './footer.styled';

interface FooterProps {
  children?: React.ReactNode;
}

const Footer: FC<FooterProps> = props => {
  const {children} = props;
  return (
    <Box sx={{backgroundColor: '#30154b', padding: 3, textAlign: 'center'}}>
      <Box>
        <Typography sx={{color: '#fff'}}>
          صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
