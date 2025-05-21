import {View, Text, Image} from 'react-native';

export default function Header() {
    return (
        <View style={{
            backgroundColor: '#000000cc',
            paddingVertical: 20,
            borderTopWidth: 8,
            borderTopColor: 'rgb(208, 180, 10)',
            alignItems: 'center'
        }}>
            <Image
                source={require('')}
                style={{width: 120, height: 50, resizeMode: 'contain'}}
            />
        </View>
    );
}