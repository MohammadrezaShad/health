import React, {FC} from 'react';
import {Box, Grid, Typography} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import * as S from './header.styled';

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: FC<HeaderProps> = props => {
  const {children} = props;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 1,
        boxShadow: 2,
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: '#fff',
      }}
    >
      <Grid container spacing={5} sx={{width: 'auto'}}>
        <Grid item>
          <Link href='#contact'>
            <a>
              <Typography variant='subtitle2' color='MenuText'>
                تماس با ما
              </Typography>
            </a>
          </Link>
        </Grid>
      </Grid>
      <Box sx={{marginLeft: 8}}>
        <Image src='/images/logo.png' width={340} height={100} />
      </Box>
    </Box>
  );
};

export default Header;
