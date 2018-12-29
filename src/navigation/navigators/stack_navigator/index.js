import { createStackNavigator } from 'react-navigation'
import AddConsumption from '../../../containers/add_consumption'
import AddSymptom from '../../../components/AddSymptom'
import TabNavigator from '../tab_navigator'

const StackNavigator = createStackNavigator(
  {
    Main: {
      screen: TabNavigator,
    },
    add_consumption: {
      screen: AddConsumption,
      navigationOptions: {
        title: 'Add Consumption',
      },
    },
    add_symptom: {
      screen: AddSymptom,
      navigationOptions: {
        title: 'Add Symptom',
      },
    },
  },
);

export default StackNavigator
