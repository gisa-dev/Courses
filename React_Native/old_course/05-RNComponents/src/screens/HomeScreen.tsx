import { FlatList, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import FlatListMenuItem from '../components/FlatListMenuItem';

import FlatListItemSeparator from '../components/FlatListItemSeparator';
import { menuItems } from '../data/menuItems';
import HeaderTitle from '../components/HeaderTitle';

const HomeScreen = () => {
	return (
		<View style={{ ...styles.globalMargin, flex: 1 }}>
			<FlatList
				ListHeaderComponent={() => <HeaderTitle title='Menu Options' />}
				ItemSeparatorComponent={() => <FlatListItemSeparator />}
				data={menuItems}
				renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
				keyExtractor={(item) => item.name}
			/>
		</View>
	);
};

export default HomeScreen;
