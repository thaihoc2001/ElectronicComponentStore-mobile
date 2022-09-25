import { } from '@react-native-material/core';
import React from 'react';
import { StyleSheet, View, TextInput, SafeAreaView} from 'react-native';
import Icon from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../constants/RootStackParamList';
import Carousel from 'react-native-snap-carousel';

type mainScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function Home() {
    const navigation = useNavigation<mainScreenProp>();
    return (
        <View style={{position: 'relative', height: '100%'}}>
            <HeaderHome></HeaderHome>
            <FooterHome></FooterHome>
        </View>
    )
}

const HeaderHome = () => {
    const [text, onChangeText] = React.useState("");
    return (
        <View style={styles.header}>
            <View style={styles.iconBars}>
                <Icon name="bars" size={30} color="#F16529" />
            </View>
            <View style = {{width: '70%',}}> 
            <TextInput
                style={styles.inputSearch}
                onChangeText={onChangeText}
                value={text}
                placeholder="Search"
            />
            <Icon style={styles.iconSearch} name="search" size={18} color="#F16529"/>
            </View>
            <View style={styles.iconCart}>
                <Icon name="shopping-cart" size={30} color="#F16529" />
            </View>
        </View>
    )
}

const FooterHome = () => {
    return (
        <View style={styles.footer}>
            <View style={styles.iconHome}>
                <Icon name="home" size={30} color="#F16529" />
            </View>
            <View style={styles.iconOrder}>
                <Icon name="clipboard-list" size={30} color="#F16529" />
            </View>
            <View style={styles.iconUser}>
                <Icon name="user" size={30} color="#F16529" />
            </View>
        </View>
    )
}
  
const styles = StyleSheet.create({
    header: {
        paddingTop: '12%',
        width: '100%',
        flexDirection: 'row',
        flexWrap: "wrap",
        position: 'absolute',
        top: 0,
     },
    iconBars: {
        marginLeft: '5%',
    },
    inputSearch: {
        alignItems: 'center',
        marginLeft: '5%',
        borderWidth: 1,
        borderColor: '#F16529',
        padding: 10,
        paddingVertical: 6,
        borderRadius: 10,
    },
    iconCart: {
        marginLeft: '4%',
    },
    iconSearch: {
        position: 'absolute',
        right: 10,
        top: 5
    },
    footer: {
        position: 'absolute',
        bottom: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconHome: {
        paddingLeft: '8%',
    },
    iconOrder: {},
    iconUser: {
        paddingRight: '8%',
    }
})