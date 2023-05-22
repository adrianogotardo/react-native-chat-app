import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_INFO } from "../storageConfig";

interface UserInfo {
    name: string,
    email: string,
    password: string
}

export async function getUser() {
    const storage = await AsyncStorage.getItem(USER_INFO);

    const user: UserInfo | null = storage ? JSON.parse(storage) : null;

    return user;
}