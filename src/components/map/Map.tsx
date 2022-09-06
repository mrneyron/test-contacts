import * as React from 'react';
import Box from '@mui/material/Box';
import {YMaps, Map, Placemark} from "react-yandex-maps";
import {IPickPoint} from '../../utility/utility';

interface IMapProps {
  pickupPoint: IPickPoint | null;
}

export default function MapComponent({pickupPoint}:IMapProps) {
  const latitude = pickupPoint?.latitude || 55.751574;
  const longitude = pickupPoint?.longitude || 37.573856;

  return (
    <Box sx={{flexGrow: 1}}>
      <YMaps>
        <Map
          width={"100%"}
          height={'484px'}
          state={{center: [latitude, longitude], zoom: 16}}
        >
          {pickupPoint && (<Placemark geometry={[latitude, longitude]} />)}
        </Map>
      </YMaps>
    </Box>
  );
}