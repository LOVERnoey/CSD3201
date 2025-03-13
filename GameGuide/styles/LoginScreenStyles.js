import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#ffffff', // พื้นหลังขาว
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'flex-start', // ชิดซ้าย
    },

    subtitle: {
        fontSize: 14,
        color: '#333',
        marginBottom: 30,
        alignSelf: 'flex-start', // ชิดซ้าย
    },

    inputContainer: {
        width: '100%',
        marginBottom: 20,
        position: 'relative', // สำหรับวาง SignUp ด้านในช่อง Password
    },

    input: {
        width: '100%',
        paddingVertical: 14,
        paddingHorizontal: 16,
        backgroundColor: '#e3dada', // สีพื้นหลัง input
        borderRadius: 12,
        fontSize: 16,
        color: '#333',
    },

    signUpLink: {
        position: 'absolute',
        right: 16,
        top: '35%', // ขึ้นอยู่กับขนาด input
        color: '#63009E',
        fontSize: 14,
    },

    button: {
        width: '100%',
        paddingVertical: 14,
        backgroundColor: '#63009E', // ปุ่มสีม่วง
        borderRadius: 30, // โค้งมนมาก
        alignItems: 'center',
        marginTop: 10,
    },

    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default styles;
