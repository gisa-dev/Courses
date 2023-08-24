import { View, Text, SectionList } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import FlatListItemSeparator from '../components/FlatListItemSeparator';

interface Casas {
	casa: string;
	data: string[];
}

const casas: Casas[] = [
	{
		casa: 'DC Comics',
		data: [
			'Batman',
			'Superman',
			'Robin',
			'Batman',
			'Superman',
			'Robin',
			'Batman',
			'Superman',
			'Robin',
			'Batman',
			'Superman',
			'Robin',
			'Batman',
			'Superman',
			'Robin',
			'Batman',
			'Superman',
			'Robin',
			'Batman',
			'Superman',
			'Robin',
			'Batman',
			'Superman',
			'Robin',
			'Batman',
			'Superman',
			'Robin',
		],
	},
	{
		casa: 'Marvel Comics',
		data: [
			'Antman',
			'Thor',
			'Spiderman',
			'Antman',
			'Thor',
			'Spiderman',
			'Antman',
			'Thor',
			'Spiderman',
			'Antman',
			'Thor',
			'Spiderman',
			'Antman',
			'Thor',
			'Spiderman',
			'Antman',
			'Thor',
			'Spiderman',
			'Antman',
			'Thor',
			'Spiderman',
			'Antman',
			'Thor',
			'Spiderman',
			'Antman',
			'Thor',
			'Spiderman',
		],
	},
	{
		casa: 'Anime',
		data: [
			'Kenshin',
			'Goku',
			'Saitama',
			'Kenshin',
			'Goku',
			'Saitama',
			'Kenshin',
			'Goku',
			'Saitama',
			'Kenshin',
			'Goku',
			'Saitama',
			'Kenshin',
			'Goku',
			'Saitama',
			'Kenshin',
			'Goku',
			'Saitama',
			'Kenshin',
			'Goku',
			'Saitama',
			'Kenshin',
			'Goku',
			'Saitama',
			'Kenshin',
			'Goku',
			'Saitama',
			'Kenshin',
			'Goku',
			'Saitama',
			'Kenshin',
			'Goku',
			'Saitama',
			'Kenshin',
			'Goku',
			'Saitama',
			'Kenshin',
			'Goku',
			'Saitama',
			'Kenshin',
			'Goku',
			'Saitama',
			'Kenshin',
			'Goku',
			'Saitama',
		],
	},
];

const SectionListScreen = () => {
	return (
		<View style={{ ...styles.globalMargin, flex: 1, backgroundColor: 'white' }}>
			<SectionList
				sections={casas}
				ListHeaderComponent={() => <HeaderTitle title='Section List' />}
				ListFooterComponent={() => (
					<HeaderTitle title={`Total of houses ${casas.length}`} />
				)}
				renderSectionFooter={({ section }) => (
					<HeaderTitle title={`Total: ${section.data.length}`} />
				)}
				ItemSeparatorComponent={() => <FlatListItemSeparator />}
				stickySectionHeadersEnabled
				keyExtractor={(item, index) => item + index}
				renderItem={({ item }) => <Text>{item}</Text>}
				renderSectionHeader={({ section }) => (
					<View style={{ backgroundColor: 'white' }}>
						<HeaderTitle title={section.casa} />
					</View>
				)}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

export default SectionListScreen;
