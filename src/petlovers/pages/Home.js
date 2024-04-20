import * as React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import FormButton from '../components/FormButton';
import { Ionicons } from '@expo/vector-icons';
import CardPet from "./CardPet";
import { useNavigation } from '@react-navigation/native';




export default function Home() {

    const navigation = useNavigation();

    const goToCadastro = () => {
        navigation.navigate('Cadastro');
    };
    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.tittle}>Cadastre o seu pet na nossa comunidade</Text>
                    <FormButton onPress={goToCadastro} style={styles.btn}><Text style={styles.textButton}>Cadastrar</Text></FormButton>
                </View>

                <Text style={styles.text}>Raças mais procuradas</Text>

                <View style={styles.minicards}>
                    <View style={styles.minicards1}>
                        <Image style={styles.imgminicards} source={require('../assets/image/caramelo.jpg')} />
                        <Text style={styles.text1}>Chiwawa</Text>
                    </View>

                    <View style={styles.minicards1}>
                        <Image style={styles.imgminicards} source={require('../assets/image/caramelo.jpg')} />
                        <Text style={styles.text1}>Labrador</Text>
                    </View>

                    <View style={styles.minicards1}>
                        <Image style={styles.imgminicards} source={require('../assets/image/caramelo.jpg')} />
                        <Text style={styles.text1}>Golden</Text>
                    </View>

                </View>

                <View style={styles.align}>
                    <Text style={styles.text}>Encontre o par ideal</Text>
                    <Text style={styles.text1}>ver mais</Text>
                </View>

                <CardPet />



            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({

    header: {
        width: 320,
        height: 120,
        borderRadius: 7.53,
        backgroundColor: '#827397',
    },
    tittle: {
        marginLeft: 20,
        color: '#ffffff',
        fontSize: 20,
        marginTop: 20,
    },
    btn: {
        backgroundColor: '#ffffff',
        width: 120,
        height: 30,
        marginLeft: 20,
        marginTop: 10,
        borderRadius: 7.53,
    },
    textButton: {
        color: '#827397',

    },
    text: {
        color: '#5F5B5B',
        fontSize: 20,
        marginTop: 40,
        fontWeight: 'bold',

    },
    text1: {
        color: '#5F5B5B',
        fontSize: 12,
        marginLeft: 5,
        marginTop: 5,
    },
    align: {
        alignSelf: 'stretch',
    },

    minicards: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 15,
    },
    minicards1: {
        width: 100,
        height: 30,
        borderRadius: 20,
        backgroundColor: '#ffffff',
        marginRight: 15,
        flexDirection: 'row',
    },
    imgminicards: {
        width: 20,
        height: 20,
        borderRadius: 30,
        marginLeft: 5,
        marginTop: 5,
    },
    cards: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 15,
        alignSelf: 'flex-start',
        marginBottom: 15,

    },

    cards1: {
        width: 180,
        borderRadius: 5,
        backgroundColor: '#ffffff',
        marginRight: 10,


    },
    imgcards: {
        width: 180,
        height: 180,
        borderRadius: 5,
        borderBottomRightRadius: 25,
    },



})


