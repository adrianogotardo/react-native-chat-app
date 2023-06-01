import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: #141715;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  color: white;
`;

export const StyledButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: black;
  border-radius: 4px;
`;

export const ButtonText = styled.Text`
  background-color: white;
  color: black;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
`;