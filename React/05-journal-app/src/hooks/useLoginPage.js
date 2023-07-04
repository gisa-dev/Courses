import { useDispatch, useSelector } from 'react-redux';
import { useForm } from './useForm';
import { useMemo } from 'react';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../store/auth';

const formData = {
	email: '',
	password: '',
};

export const useLoginPage = () => {
	const { status, errorMessage } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const { email, password, onInputChange } = useForm(formData);

	const isAuthenticating = useMemo(() => status === 'checking', [status]);

	const onSubmit = (event) => {
		event.preventDefault();

		dispatch(startLoginWithEmailPassword({ email, password }));
	};

	const onGoogleSignIn = () => {
		dispatch(startGoogleSignIn());
	};

	return {
		errorMessage,
		email,
		password,
		onInputChange,
		isAuthenticating,
		onSubmit,
		onGoogleSignIn,
	};
};
