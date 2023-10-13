import { useQuestionStore } from '../store/questionsStore';

export const useQuestionData = () => {
	const questions = useQuestionStore((state) => state.questions);

	let correct = 0;
	let incorrect = 0;
	let unanswered = 0;

	questions.forEach((question) => {
		const { correctAnswer, userSelectedAnswer } = question;

		if (userSelectedAnswer == null) unanswered++;
		else if (userSelectedAnswer === correctAnswer) correct++;
		else incorrect++;
	});

	return {
		correct,
		incorrect,
		unanswered,
	};
};
