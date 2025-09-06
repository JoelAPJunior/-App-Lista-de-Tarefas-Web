import{StylesSheet} from "react-native";

export default StylesSheet.create({
    container:{
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alingItems: 'center'},

    texto: {
        fontSize:16,
        color: '#111111'
    },
    imagem: {
        width: 300,
        height: 300,
        borderRadius: 8,
        margin: 12,
        resizeMode: "cover"
    }
});