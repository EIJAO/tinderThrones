import React from 'react';
import { 
    StyleSheet, 
    Button, 
    View, 
    SafeAreaView, 
    Text, 
    Image,
    TouchableWithoutFeedback,
    Alert } from 'react-native';

import axios from 'axios';
import { useState } from 'react';

export default function Card()
{
    const [personagem, setPersonagem] = useState({fullName: "", imageUrl: ""});

    async function carregar()
    {
        let cod = Math.round(Math.random() * 52);
        const result = await axios.get('https://thronesapi.com/api/v2/Characters/' + cod);
        setPersonagem(result.data);
    }

    return (
        <View>
            <Text>Nome: { personagem.fullName } </Text>
            <TouchableWithoutFeedback onPress={carregar}>
                <Image 
                    source={{ uri: personagem.imageUrl }}
                    style={ css.foto }                                 
                />
            </TouchableWithoutFeedback>
            
            
        </View>

    );
}

const css = StyleSheet.create({
    foto: {
        width: 300,
        height: 400,
        borderColor: "#000",
     //   borderStyle: "solid",
        borderWidth: 1
    }
});