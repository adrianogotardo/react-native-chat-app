import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_TOKEN } from "../storageConfig";

export async function createToken(token: string) {
    try {
        await AsyncStorage.setItem(USER_TOKEN, token);
    } catch(error) {
        throw error;
    }
}