import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    content: {
        flexGrow: 1, 
        justifyContent: "flex-start", 
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    logo: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16
    },
    icon: {
        fontSize: 24,
        marginHorizontal: 8,
    },
    logoutButton: {
        backgroundColor: '#e63946',
        borderRadius: 4,
        paddingVertical: 6,
        paddingHorizontal: 12,
    },
    logoutText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    hero: {
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333',
    },
    heroTitle: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    heroButton: {
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    heroButtonText: {
        color: '#333',
        fontSize: 16,
    },
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
    footer: {
        backgroundColor: "#333",
        alignItems: "center",
        padding: 16,
        position: "relative", // Pode ser absoluto dependendo da lógica
        bottom: 0,
        width: "100%",
    },
    footerText: {
        color: "#fff",
    },
})