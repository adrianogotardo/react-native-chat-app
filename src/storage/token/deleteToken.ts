import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_TOKEN } from "../storageConfig";

export async function deleteToken() {
    try {
        await AsyncStorage.removeItem(USER_TOKEN);
    } catch(error) {
        throw error;
    }
}