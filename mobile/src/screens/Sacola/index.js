import React from 'react';
import { Text, View } from 'react-native';
import { Button, Image } from 'react-native-elements';
import { ListItem, Avatar } from 'react-native-elements'
import { styles } from './styles';




const list = [
  {
    name: 'Combo Big Mac',
    avatar_url: 'https://revistamenu.com.br/wp-content/uploads/2020/03/doublebigmac-1024x566.jpg',
    subtitle: 'R$ 30,00'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  }
]



export function Sacola({  navigation  }) {
    return (
        <View style={styles.container}>

<Avatar
  rounded
  size="small"
  source={require('../../assets/mc.png')}

/>
<Text style={styles.title}>Mc Donalds</Text>

{
    list.map((l, i) => (
      <ListItem key={i} bottomDivider>
        <Avatar source={{uri: l.avatar_url}} />
        <ListItem.Content>
          <ListItem.Title>{l.name}</ListItem.Title>
          <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    ))
  }






          
         

          <Button 
            title="Entrar"
            buttonStyle={styles.button}
            containerStyle={{marginBottom:16, borderRadius:16}}
            titleStyle={{color:'#000'}}
            onPress={()=>navigation.navigate('Sacola')}
          />

          <Button 
            title="Cadastrar-se"
            buttonStyle={styles.button}
            titleStyle={{color:'#000'}}
          />
        </View>
      );
}