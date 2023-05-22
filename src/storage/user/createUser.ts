import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_INFO } from "../storageConfig";
import { getUser } from "./getUser";

interface UserInfo {
    name: string,
    email: string,
    password: string
}

export async function userCreate(newUser: UserInfo) {
    try {
        const storedUser = await getUser();
        await AsyncStorage.setItem(USER_INFO, JSON.stringify(newUser));
    } catch(error) {
        throw error;
    }
}