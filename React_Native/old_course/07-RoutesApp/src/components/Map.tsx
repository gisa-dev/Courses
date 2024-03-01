import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { useLocation } from '../hooks/useLocation';
import LoadingScreen from '../screens/LoadingScreen';
import Fab from './Fab';
import { useEffect, useRef, useState } from 'react';

interface Props {
	markers?: (typeof Marker)[];
}

const Map = ({ markers }: Props) => {
	const [showPolyline, setShowPolyline] = useState(true);
	const {
		initialPosition,
		hasLocation,
		getUserCurrentPosition,
		followUserLocation,
		userLocation,
		stopFollowUserLocation,
		routeLines,
	} = useLocation();
	const mapViewRef = useRef<MapView>();
	const following = useRef<boolean>(true);

	useEffect(() => {
		followUserLocation();

		return () => {
			stopFollowUserLocation();
		};
	}, []);

	useEffect(() => {
		if (!following.current) return;
		const { latitude, longitude } = userLocation;

		mapViewRef.current?.animateCamera({
			center: {
				latitude,
				longitude,
			},
		});
	}, [userLocation]);

	const centerPosition = async () => {
		const { latitude, longitude } = await getUserCurrentPosition();

		following.current = true;

		mapViewRef.current?.animateCamera({
			center: {
				latitude,
				longitude,
			},
		});
	};

	if (!hasLocation) {
		return <LoadingScreen />;
	}

	return (
		<>
			<MapView
				ref={(el) => (mapViewRef.current = el!)}
				style={styles.map}
				showsUserLocation
				initialRegion={{
					latitude: initialPosition.latitude,
					longitude: initialPosition.longitude,
					latitudeDelta: 0,
					longitudeDelta: 0,
				}}
				onTouchStart={() => (following.current = false)}
			>
				{showPolyline && (
					<Polyline
						coordinates={routeLines}
						strokeColor='blue'
						strokeWidth={3}
					/>
				)}
				{/* <Marker
					image={require('../../assets/img/custom-marker.png')}
					coordinate={{
						latitude: 18.4962086,
						longitude: -69.8530472,
					}}
					title='Marker title'
					description='Marker description'
				/> */}
			</MapView>
			<Fab
				iconName='compass-outline'
				onPress={centerPosition}
				style={{ position: 'absolute', bottom: 20, right: 20 }}
			/>
			<Fab
				iconName='brush-outline'
				onPress={() => setShowPolyline(!showPolyline)}
				style={{ position: 'absolute', bottom: 90, right: 20 }}
			/>
		</>
	);
};

export default Map;

const styles = StyleSheet.create({
	map: {
		flex: 1,
	},
});
