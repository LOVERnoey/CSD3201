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
        alignSelf: 'flex-start',
    },

    subtitle: {
        fontSize: 14,
        color: '#333',
        marginBottom: 30,
        alignSelf: 'flex-start',
    },

    input: {
        width: '100%',
        paddingVertical: 14,
        paddingHorizontal: 16,
        backgroundColor: '#e3dada', // สีพื้นหลังเทาอ่อน
        borderRadius: 12,
        fontSize: 16,
        color: '#333',
        marginBottom: 20,
    },

    button: {
        width: '100%',
        paddingVertical: 14,
        backgroundColor: '#63009E', // ปุ่มสีม่วง
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 10,
    },

    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },

    linkText: {
        marginTop: 20,
        color: '#63009E', // สีม่วงเข้ม (เหมือนปุ่ม)
        fontSize: 16,
    },
});

export default styles;
