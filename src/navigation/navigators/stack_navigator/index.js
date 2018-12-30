import { createStackNavigator } from 'react-navigation'
import SelectConsumption from '../../../containers/select_consumption'
import AddConsumptionEvent from '../../../containers/add_consumption_event'
import AddSymptom from '../../../containers/add_symptom'
import TabNavigator from '../tab_navigator'

const StackNavigator = createStackNavigator(
  {
    Main: {
      screen: TabNavigator,
    },
    select_consumption: {
      screen: SelectConsumption,
      navigationOptions: {
        title: 'Valitse ruoka tai juoma',
      },
    },
    add_consumption_event: {
      screen: AddConsumptionEvent,
      navigationOptions: {
        title: 'Lisää ruoka tai juoma',
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
