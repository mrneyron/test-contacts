import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Item = styled(Box)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#282c2d' : '#e1e1e1',
  padding: theme.spacing(0.5),
  textAlign: 'center',
  borderRadius: 4,
}));

interface IBudgetProps {
  budget: string;
}

export default function Budget({budget}: IBudgetProps) {
  return (
    <Grid item xs={2.5}>
      <Item>
        <Typography variant="subtitle2">{budget}</Typography>
      </Item>
    </Grid>
  );
}