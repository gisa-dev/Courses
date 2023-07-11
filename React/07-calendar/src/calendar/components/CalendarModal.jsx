import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};

Modal.setAppElement('#root');

export const CalendarModal = () => {
	const [isOpen, setIsOpen] = useState(true);
	const onCloseModal = () => {
		console.log('close modal');
		setIsOpen(false);
	};
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onCloseModal}
			// style={customStyles}
			className='absolute p-[10px] bg-white rounded-xl left-[50%] top-[50%] mr-[-50%] transform translate-x-[-50%] translate-y-[-50%] max-w-xl h-[620px] '
			overlayClassName='bg-black/[0.3]  left-0 right-0 top-0 bottom-0 fixed outline-none'
			closeTimeoutMS={200}
		>
			<h1 className='pb-3 mb-3 text-3xl font-semibold border-b-2 border-b-slate-300'>
				Hello world
			</h1>

			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
				perspiciatis!
			</p>
		</Modal>
	);
};
