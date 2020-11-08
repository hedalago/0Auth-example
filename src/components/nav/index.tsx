import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { RootState } from '../../store';
import { AppBar, Wrapper, Box } from './style';

export default function Nav(): JSX.Element {
  const { menu } = useSelector((state: RootState) => state.menu);

  return (
    <AppBar>
      <Wrapper>
        <Box>
          <Link style={{ color: 'black', textDecoration: 'none' }} to="/">
            <span
              style={
                menu === 'NEWS'
                  ? {
                      color: 'black',
                      textDecoration: 'underline',
                      fontWeight: 'bold',
                    }
                  : { color: '#bbb' }
              }
            >
              News
            </span>
          </Link>
        </Box>
        <Box>
          <Link style={{ color: 'black', textDecoration: 'none' }} to="/saved">
            <span
              style={
                menu === 'SAVED'
                  ? {
                      color: 'black',
                      textDecoration: 'underline',
                      fontWeight: 'bold',
                    }
                  : { color: '#bbb' }
              }
            >
              Saved
            </span>
          </Link>
        </Box>
      </Wrapper>
    </AppBar>
  );
}
