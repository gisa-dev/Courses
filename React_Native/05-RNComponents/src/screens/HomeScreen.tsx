import { FlatList, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import FlatListMenuItem from '../components/FlatListMenuItem';
import FlatListHeader from '../components/FlatListHeader';
import FlatListItemSeparator from '../components/FlatListItemSeparator';
import { menuItems } from '../data/menuItems';

const HomeScreen = () => {
	return (
		<View style={{ ...styles.globalMargin, flex: 1 }}>
			<FlatList
				ListHeaderComponent={() => <FlatListHeader />}
				ItemSeparatorComponent={() => <FlatListItemSeparator />}
				data={menuItems}
				renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
				keyExtractor={(item) => item.name}
			/>
		</View>
	);
};

export default HomeScreen;
