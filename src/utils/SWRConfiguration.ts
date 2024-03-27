import { AppState } from 'react-native';
import { fetcher } from './fetcher';
import NetInfo from '@react-native-community/netinfo';

export const SWRConfiguration = {
  fetcher,
  dedupingInterval: 2000,
  provider: () => new Map(),
  isOnline() {
    /* Customize the network state detector */
    return true;
  },
  isVisible() {
    /* Customize the visibility state detector */
    return true;
  },
  initFocus(callback) {
    let appState = AppState.currentState;

    const onAppStateChange = (nextAppState) => {
      /* If it's resuming from background or inactive mode to active one */
      if (appState.match(/inactive|background/) && nextAppState === 'active') {
        callback();
      }
      appState = nextAppState;
    };

    // Subscribe to the app state change events
    const subscription = AppState.addEventListener('change', onAppStateChange);

    return () => {
      subscription.remove();
    };
  },
  initReconnect(callback) {
    let networkAvailable = false;

    const unsubscribe = NetInfo.addEventListener((state) => {
      if (!networkAvailable && state.isConnected) {
        callback();
      }
      networkAvailable = state.isConnected;
    });

    return () => {
      unsubscribe();
    };
  },
};
