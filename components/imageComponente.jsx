import React from "react";
import{View, Image, Text} from "react-native"
import styles from "./styles";

export default function imageComponente(){
    return(
        <View styles={styles.container}>
            <Image style={styles.imagem}
            source={{uri:"https://picsum.photos/300"}}
            accessible
            accessibilityLabel="Imagem de exemplo"
            />
        </View>
    )
}