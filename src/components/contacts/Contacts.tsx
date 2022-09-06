import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Address from '../address/Address';
import {IGeoState, IPickPoint} from '../../utility/utility';

interface IContactsProps {
  data: IGeoState;
  clickPickupPoint: (pickupPoint: IPickPoint) => void;
}

export default function Contacts({data, clickPickupPoint}: IContactsProps) {
  return (
    <Box sx={{flexGrow: 1}}>
      <Grid container spacing={2}>
        {data.pickPoints.map((point) => (
          <Address pickupPoint={point} key={point.address} clickPickupPoint={clickPickupPoint}/>
        ))}
      </Grid>
    </Box>
  );
}