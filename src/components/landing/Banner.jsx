import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import {Feather} from '@expo/vector-icons';

const Banner = () => {
    return (
        <View>
            <LinearGradient
                locations={[0, 1]}
                end={{ "x": 1, "y": 0 }}
                start={{ "x": 0, "y": 0 }}
                className='py-10 px-3 gap-6'
                colors={["#3D75ED", "#6FACFA"]}
            >
                <View className='items-center gap-3'>
                    <Text className='text-2xl font-bold text-white'>#1 Platform of Saudi Jobs</Text>
                    <Text className='text-[#DBEAFE] text-base text-center'>Apply for jobs in Saudi Arabia with verified employers. We connect Bangladeshi workforce with high-demand Saudi Jobs.</Text>
                </View>
                <View className='w-[90%] mx-auto pb-5 relative'>
                    <TextInput className='w-full border rounded-full border-white bg-white pl-5 py-4' placeholder='Search Job' placeholderTextColor={"#9ca3af"}/>
                    <TouchableOpacity className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-500 p-2 rounded-full active:bg-blue-600">
                        <Feather name="search" size={22} color="white" />
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>
    )
}

export default Banner