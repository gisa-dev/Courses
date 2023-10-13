import { Container, Stack, Typography } from '@mui/material';
import './App.css';
import { JavaScriptLogo } from './components/JavaScriptLogo';
import { Start } from './pages/Start';
import { useQuestionStore } from './store/questionsStore';
import { Game } from './pages/Game';

function App() {
	const questions = useQuestionStore((state) => state.questions);

	console.log(questions);

	return (
		<main>
			<Container maxWidth='sm'>
				<Stack
					direction='row'
					gap={2}
					alignItems='center'
					justifyContent='center'>
					<JavaScriptLogo />
					<Typography variant='h2' component='h1'>
						Javascript Quizz
					</Typography>
				</Stack>

				{questions.length === 0 && <Start />}
				{questions.length > 0 && <Game />}
			</Container>
		</main>
	);
}

export default App;
