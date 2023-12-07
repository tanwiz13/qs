import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Storage {
  static add = async (key: string, value: string) =>
    AsyncStorage.setItem(key, value);

  static remove = async (key: string) => AsyncStorage.removeItem(key);

  static get = async (key: string) => AsyncStorage.getItem(key);
}
