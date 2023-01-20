import {useState} from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ButtonSubscribe = () => {
	const [subscribe, setSubscribe] = useState(false);

	return (
		<>
			<button
				onClick={() => {
					toast.success('congratulations you are already subscribed');
					setSubscribe(!subscribe);
				}}
			>
				{subscribe ? 'already subscribed' : 'subscribe'}
			</button>
			<ToastContainer />
		</>
	);
};

export default ButtonSubscribe;
