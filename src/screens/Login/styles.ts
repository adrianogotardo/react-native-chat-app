import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: #0f0f0f;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  color: white;
`;

export const StyledInput = styled.TextInput.attrs((props) => ({
  placeholderTextColor: '#c6c6c6'
}))`
  width: 100%;
  height: 40px;
  color: white;
  margin-bottom: 12px;
  padding: 0 8px 0 8px;
  background-color: #141715;
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

export const ToggleForm = styled.Text`
  margin-top: 16px;
  color: white;
`;
