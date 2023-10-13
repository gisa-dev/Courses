import {
	Card,
	Typography,
	ListItem,
	List,
	ListItemButton,
	ListItemText,
	Stack,
	IconButton,
} from '@mui/material';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useQuestionStore } from '../store/questionsStore';
import { type Question as QuestionType } from '../types';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { Footer } from '../components/Footer';

const getBackgroundColor = (info: QuestionType, index: number) => {
	const { correctAnswer, userSelectedAnswer } = info;

	// usuario no ha seleccionado nada todavia
	if (userSelectedAnswer == null) return null;

	// si ya selecciono pero la solucion es incorrecta
	if (index !== correctAnswer && index !== userSelectedAnswer)
		return 'transparent';

	// si es la solucion correcta
	if (index === correctAnswer) return 'green';

	// si esta es la seleccion del usuario pero no es correcta
	if (index === userSelectedAnswer) return 'red';

	// si no es ninguna de las anteriores
	return 'transparent';
};

export const Game = () => {
	const questions = useQuestionStore((state) => state.questions);
	const currentQuestion = useQuestionStore((state) => state.currentQuestion);

	const goNextQuestion = useQuestionStore((state) => state.goNextQuestion);
	const goPreviousQuestion = useQuestionStore(
		(state) => state.goPreviousQuestion,
	);

	const questionInfo = questions[currentQuestion];

	return (
		<>
			<Stack
				direction='row'
				gap={2}
				alignItems='center'
				justifyContent='center'>
				<IconButton
					onClick={goPreviousQuestion}
					disabled={currentQuestion === 0}>
					<ArrowBackIosNew />
				</IconButton>
				{currentQuestion + 1} / {questions.length}
				<IconButton
					onClick={goNextQuestion}
					disabled={currentQuestion >= questions.length - 1}>
					<ArrowForwardIos />
				</IconButton>
			</Stack>
			<Question info={questionInfo} />

			<Footer />
		</>
	);
};

const Question = ({ info }: { info: QuestionType }) => {
	const selectAnswer = useQuestionStore((state) => state.selectAnswer);

	const createHandleClick = (answerIndex: number) => () => {
		selectAnswer(info.id, answerIndex);
	};

	return (
		<Card
			variant='outlined'
			sx={{
				textAlign: 'left',
				bgcolor: '#222',
				p: 2,
				borderRadius: 5,
				mt: 4,
			}}>
			<Typography variant='h5'>{info.question}</Typography>

			<SyntaxHighlighter language='javascript' style={monokai}>
				{info.code}
			</SyntaxHighlighter>

			<List sx={{ bgcolor: '#333' }} disablePadding>
				{info.answers.map((answer, index) => (
					<ListItem key={index} disablePadding divider>
						<ListItemButton
							disabled={info.userSelectedAnswer != null}
							onClick={createHandleClick(index)}
							sx={{
								bgcolor: getBackgroundColor(info, index),
							}}>
							<ListItemText primary={answer} sx={{ textAlign: 'center' }} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Card>
	);
};
