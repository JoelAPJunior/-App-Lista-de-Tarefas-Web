import react from "react";
import { SafeAreaView,  Text } from "react-native";
import styles from "./styles";


export default function SafeAreaView(){
    return(
        <SafeAreaView styles={styles.container}>
        <Text> SafeAreaView Ativo </Text>
        </SafeAreaView>
    );
};