import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from './useForm';
import { startCreatingUserWithEmailPassword } from '../store/auth';

const formData = {
	displayName: '',
	email: '',
	password: '',
};

const formValidations = {
	email: [(value) => value.includes('@'), 'Email should have an @'],
	password: [
		(value) => value.trim().length >= 6,
		'Password should be at least 6 characters',
	],
	displayName: [(value) => value.trim().length >= 1, 'Name is required'],
};

export const useRegisterPage = () => {
	const { status, errorMessage } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const [formSubmitted, setFormSubmitted] = useState(false);
	const isCheckingAuthentication = useMemo(
		() => status === 'checking',
		[status],
	);

	const {
		formState,
		displayName,
		email,
		password,
		onInputChange,
		isFormValid,
		displayNameValid,
		emailValid,
		passwordValid,
	} = useForm(formData, formValidations);

	const onSubmit = (event) => {
		event.preventDefault();
		setFormSubmitted(true);

		if (!isFormValid) return;

		dispatch(startCreatingUserWithEmailPassword(formState));
	};

	return {
		onSubmit,
		displayName,
		onInputChange,
		displayNameValid,
		formSubmitted,
		email,
		emailValid,
		password,
		passwordValid,
		errorMessage,
		isCheckingAuthentication,
	};
};
