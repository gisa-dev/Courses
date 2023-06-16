import { HeroList } from "../components/HeroList";

export const MarvelPage = () => {
	return (
		<>
			<h1 className='title'>Marvel Comics</h1>
			<HeroList publisher='Marvel Comics' />
		</>
	);
};
