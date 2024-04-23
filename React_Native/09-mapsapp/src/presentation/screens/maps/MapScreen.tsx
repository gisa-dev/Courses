import React, {useEffect} from 'react';
import {Map} from '../../components';
import {useLocationStore} from '../../store/location/useLocationStore';
import {LoadingScreen} from '../loading/LoadingScreen';

export const MapScreen = () => {
  const lastKnowLocation = useLocationStore(state => state.lastKnowLocation);
  const getLocation = useLocationStore(state => state.getLocation);

  useEffect(() => {
    if (lastKnowLocation === null) {
      getLocation();
    }
  }, []);

  if (lastKnowLocation === null) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Map initialLocation={lastKnowLocation} />
    </>
  );
};
