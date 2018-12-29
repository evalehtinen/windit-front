import { createStackNavigator } from 'react-navigation';
import AddConsumption from '../../../containers/add_consumption'
import TabNavigator from '../tab_navigator'

const StackNavigator = createStackNavigator(
  {
    Main: {
      screen: TabNavigator,
    },
    AddC: {
      screen: AddConsumption,
      navigationOptions: {
        title: 'Add Consumption',
        tabBarVisible: true,
      },
    },
  },
);

export default StackNavigator
