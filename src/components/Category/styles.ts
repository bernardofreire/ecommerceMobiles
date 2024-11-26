import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    section: {
        padding: 16,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    category: {
        marginRight: 16,
        alignItems: 'center',
    },
    categoryImage: {
        width: 150,
        height: 150,
        borderRadius: 8,
    },
    categoryText: {
        marginTop: 8,
        fontSize: 16,
        fontWeight: 'bold',
    },
    containerItem:{
        width: "100%",
    },
    containerItemDetail:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    categoryPrice:{
        marginTop: 8,
        color: 'red'
    },
    icon: {
        fontSize: 16,
        marginTop: 8,
    },
})