import { SafeAreaView } from "react-native-safe-area-context";
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const StyledInput = styled.TextInput`
  width: 100%;
  height: 40px;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 4px;
  margin-bottom: 12px;
  padding: 0 8px 0 8px;
`;

export const ToggleForm = styled.Text`
  margin-top: 16px;
  color: blue;
  text-decoration-line: underline;
`;
