import {View, Text, TextInput, Pressable} from 'react-native';
import tailwind from 'twrnc';
import {useState} from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../firebase.js';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        console.log('bro?');
        await signInWithEmailAndPassword(auth, email, password);
    };

    return (<View style={tailwind`flex-1 items-center justify-center bg-black`}>
        <View style={tailwind`p-8 w-full max-w-sm`}>
            <Text style={tailwind`text-5xl font-bold mb-6 text-white`}>Login</Text>

            <TextInput
                style={tailwind`w-full bg-white rounded-md h-12 px-4 mb-4`}
                placeholderTextColor="#000" onChangeText={setEmail}
                placeholder="Enter email address"
            />

            <TextInput
                style={tailwind`w-full bg-white rounded-md h-12 px-4`}
                placeholderTextColor="#000" onChangeText={setPassword}
                placeholder="Enter password"
            />

            <View style={tailwind`flex flex-row justify-between items-center my-8`}>
                <View style={tailwind`flex-row items-center`}>
                    <Pressable style={tailwind`bg-white h-6 w-6 rounded-sm mr-2`}/>
                    <Text style={tailwind`text-white`}>Remember me</Text>
                </View>
                <Pressable>
                    <Text style={tailwind`text-white font-bold`}>Reset password</Text>
                </Pressable>
            </View>

            <Pressable
                onPress={handleSubmit}
                style={tailwind`h-12 border-2 border-white rounded-md flex flex-row justify-center items-center px-6`}
            >
                <View style={tailwind`flex-1 flex items-center`}>
                    <Text style={tailwind`text-white text-base font-medium`}>Login</Text>
                </View>
            </Pressable>
        </View>
    </View>);
}