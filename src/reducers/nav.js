import { AppNavigator } from './../components/navigator/AppNavigator';

// UNCOMMENT THIS LINE TO GET ON LOGIN SCREEN FIRST
// const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Login'));

// INITIAL STATE OF OUR NAVIGATION
const initialState = null;

const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};

export default navReducer;
