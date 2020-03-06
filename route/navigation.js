import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../screen/profile';
import Registration from '../screen/register';
import Login from '../screen/login';


const Route = createStackNavigator ({
    profile : {
        screen : HomeScreen
    },
    registering : {
        screen : Registration
    },
    log_in : {
        screen : Login
    }
});

export default createAppContainer(Route);