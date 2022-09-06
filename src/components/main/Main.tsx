import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {getData, IGeoState, IPickPoint} from '../../utility/utility';
import Contacts from '../contacts/Contacts';
import Map from '../map/Map';

export default function Main() {
  const [data, setData] = React.useState<IGeoState | null>(null);
  const [pickupPoint, setPickupPoint] = React.useState<IPickPoint | null>(null);

  React.useEffect(() => {
    getData().then((res) => {
      setData(res);
    });
  }, []);

  const handleClickPickupPoint = (point: IPickPoint) => {
    setPickupPoint(point);
  };

  return (
    <Box sx={{flexGrow: 1, margin: 2}}>
      {data?.pickPoints && (
        <Grid container spacing={1}>
          <Grid item md={6} sm={12} xs={12}>
            <Contacts data={data} clickPickupPoint={handleClickPickupPoint}/>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Map pickupPoint={pickupPoint}/>
          </Grid>
        </Grid>
      )}
      
    </Box>
  );
}