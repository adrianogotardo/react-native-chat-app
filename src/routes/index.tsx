import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './app.routes';
import { View, ViewStyle } from 'react-native';
import { AuthContext } from '../contexts/AuthContext';
import { ReactNode, useContext } from 'react';
import { Container } from './styles';
import { useAuth } from '../hooks/useAuth';

interface BackgroundProps {
    children: ReactNode;
};

const Background: React.FC<BackgroundProps> = ({ children }) => {
    return <Container>{children}</Container>;
};

export function Routes() {
    const { user } = useAuth();
    console.log(user);

    return(
        <View style={{flex: 1, backgroundColor: '#f1f1f1'}}>
            <NavigationContainer>
                <Background>
                    <AppRoutes />
                </Background>
            </NavigationContainer>
        </View>
    );
}