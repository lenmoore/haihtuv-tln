import {SafeAreaView, View, Text, Pressable, Image} from 'react-native';
import tailwind from 'twrnc';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {signOut} from 'firebase/auth';
import {auth} from '../../firebase.js';

export default function UserProfile() {
    // todo get user info from auth
    // todo HOW can i give users roles?
    const handleLogout = async () => {
        console.log('logout');
        await signOut(auth);
    }
    return (
        <SafeAreaView style={tailwind`flex-1 bg-black`}>
            <View style={tailwind`flex-1 items-center justify-center gap-8`}>
                <Image
                    source={{uri: 'https://source.unsplash.com/random'}}
                    style={tailwind`w-24 h-24 rounded-full`}
                    resizeMode="cover"
                />
                <View style={tailwind`gap-2 items-center`}>
                    <Text style={tailwind`text-white text-3xl font-bold`}>Joe Bloggs</Text>
                    <Text style={tailwind`text-white text-lg`}>joe@bloggs.com</Text>
                </View>
            </View>
            <View style={tailwind`flex-1 justify-center gap-8`}>
                <Pressable style={tailwind`flex-row items-center gap-2 px-8`}>
                    <Ionicons name="settings-outline" size={24} color="#fff"/>
                    <Text style={tailwind`text-white text-lg`}>Settings</Text>
                </Pressable>
                <Pressable style={tailwind`flex-row items-center gap-2 px-8`}>
                    <Ionicons name="help-buoy-outline" size={24} color="#fff"/>
                    <Text style={tailwind`text-white text-lg`}>Help</Text>
                </Pressable>
                <Pressable onPress={handleLogout}
                           style={tailwind`flex-row items-center gap-2 px-8`}>
                    <MaterialIcons name="logout" size={24} color="#fff"/>
                    <Text style={tailwind`text-white text-lg`}>Logout</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}