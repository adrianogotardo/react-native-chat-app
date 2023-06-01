import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_TOKEN } from "../storageConfig";

export async function getToken() {
    const storage = await AsyncStorage.getItem(USER_TOKEN);

    const token: string | null = storage ? storage : null;

    return token;
}