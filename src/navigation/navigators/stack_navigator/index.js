import { createStackNavigator } from 'react-navigation';
import AddConsumptioned from '../../../components/AddConsumptioned'
import TabNavigator from '../tab_navigator'

const StackNavigator = createStackNavigator(
  {
    Main: TabNavigator,
    AddC: AddConsumptioned,
  },
  {
    initialRouteName: 'Main',
  },
);

export default StackNavigator;
