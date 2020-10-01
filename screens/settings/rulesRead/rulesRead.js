import React from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    SectionList
} from "react-native";

import DrawerMenu from '../../../components/drawerMenu'


const DATA = [
    {
        title: "Daybook Write Rules",
        data: ["Maksimum yazabileceğiniz karakter sayısı 100.000 'dir.", "Yazınızı kaydettikten sonra silme şansınız yoktur.", "Sadece ama sadece kendiniz için doğruları yazın."]
    },
    {
        title: "Daybook Pages",
        data: ["Sayfaları silemezsiniz.", "Yazdığınız sayfaları değiştiremezsiniz."]

    },
    {
        title: "Notification",
        data: ["Bildirim zamanın seçimini siz belirlersiniz."]
    },
    {
        title: "Password",
        data: ["Değişim sırasında bağlı olduğunuz ağ ın güvenli olup olmadığını öğrenin."]
    },
    {
        title: "Image",
        data: ["Avatart resim seçimi size bırakılmıştır."]
    }
];

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const rulesRead = function ({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <DrawerMenu navigation={navigation} />

            <View style={{ width: '100%', alignItems: 'center', paddingBottom: 50 }}>
                <SectionList
                    sections={DATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <Item title={item} />}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.header}>{title}</Text>
                    )}
                />
            </View>
        </SafeAreaView>
    )
};

export default rulesRead;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff', //FF5050
    },
    item: {
        backgroundColor: "rgba(175, 175, 175, 0.36)",
        padding: 20,
        textAlign: 'center',
        marginVertical: 8,
        borderRadius: 10,
    },
    header: {
        padding: 10,
        fontSize: 20,
        color: 'whitesmoke',
        backgroundColor: "#FF5050",
        shadowOffset: { width: 0, height: 3 }, shadowOpacity: .3, shadowRadius: 3,
    },
    title: {
        fontSize: 16,
        color: '#333'
    }
});
