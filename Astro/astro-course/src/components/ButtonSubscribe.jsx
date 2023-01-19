import {useState} from 'react';

const ButtonSubscribe = () => {
	const [subscribe, setSubscribe] = useState(false);

	console.log(subscribe);

	return (
		<button onClick={() => setSubscribe(!subscribe)}>
			{subscribe ? 'already subscribed' : 'subscribe'}
		</button>
	);
};

export default ButtonSubscribe;
