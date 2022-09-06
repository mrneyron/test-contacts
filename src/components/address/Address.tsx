import * as React from 'react';
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {IPickPoint} from '../../utility/utility';
import Budget from '../budget/Budget';

const Item = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#3a3d3e' : '#fff',
  padding: theme.spacing(1),
  textAlign: 'center',
  cursor: 'pointer',
  backgroundImage: 'none',
  color: theme.palette.text.secondary,
}));

interface IAddressProps {
  pickupPoint: IPickPoint;
  clickPickupPoint: (pickupPoint: IPickPoint) => void;
}

export default function Address({pickupPoint, clickPickupPoint}: IAddressProps) {
  return (
    <Grid item xs={12}>
      <Item onClick={() => clickPickupPoint(pickupPoint)}>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{textAlign: "left"}}>
            <Typography variant="body1">{pickupPoint.address}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {pickupPoint.budgets.map((budget) => (
                <Budget key={budget} budget={budget}/>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Item>
    </Grid>
  );
}