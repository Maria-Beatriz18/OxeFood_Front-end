import React from 'react';
import { View } from 'react-native';
import { Button} from 'react-native-elements';

import { style } from './styles';


export function HomeScreen({  navigation  }) {
     return(
        <View>
           <Button 
            title='Entrar'
            containerStyle={{marginTop: 80}}
            onPress={()=>navigation.navigate('Restaurante')}
        />
        </View>
     )
}