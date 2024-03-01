import { Location } from './../interfaces/appInterfaces';
import {
	Accuracy,
	LocationSubscription,
	getCurrentPositionAsync,
	watchPositionAsync,
} from 'expo-location';
import { useEffect, useRef, useState } from 'react';

export const useLocation = () => {
	const [hasLocation, setHasLocation] = useState(false);
	const [routeLines, setRouteLines] = useState<Location[]>([]);
	const [initialPosition, setInitialPosition] = useState<Location>({
		latitude: 0,
		longitude: 0,
	});
	const [userLocation, setUserLocation] = useState<Location>({
		latitude: 0,
		longitude: 0,
	});

	const watchSuscription = useRef<LocationSubscription>();
	const isMounted = useRef(true);

	const getUserCurrentPosition = async () => {
		const info = await getCurrentPositionAsync({
			accuracy: Accuracy.High,
		});
		const { coords } = info;

		return coords;
	};

	const followUserLocation = async () => {
		const info = await watchPositionAsync(
			{
				accuracy: Accuracy.High,
				distanceInterval: 1,
			},
			({ coords }) => {

				if (!isMounted.current) return;
				
				const location: Location = {
					latitude: coords.latitude,
					longitude: coords.longitude,
				};
				setUserLocation(location);

				setRouteLines((routes) => [...routes, location]);
			},
		);

		watchSuscription.current = info;
	};

	const stopFollowUserLocation = () => {
		if (watchSuscription.current) {
			watchSuscription.current.remove();
		}
	};

	useEffect(() => {
		return () => {
			isMounted.current = false;
		};
	}, []);

	useEffect(() => {
		getUserCurrentPosition().then((userLocation) => {
			const location: Location = {
				latitude: userLocation.latitude,
				longitude: userLocation.longitude,
			};

			if (!isMounted.current) return;

			setInitialPosition(location);
			setUserLocation(location);
			setRouteLines((routes) => [...routes, location]);
			setHasLocation(true);
		});
	}, []);

	return {
		hasLocation,
		initialPosition,
		getUserCurrentPosition,
		followUserLocation,
		userLocation,
		stopFollowUserLocation,
		routeLines,
	};
};
