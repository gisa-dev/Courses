import { HeroList } from "../components/HeroList";

export const DcPage = () => {
	return (
		<>
			<h1 className='title'>DC Comics</h1>
			<HeroList publisher='DC Comics' />
		</>
	);
};
