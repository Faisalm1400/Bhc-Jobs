import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather, FontAwesome6 } from '@expo/vector-icons'

const Header = () => {
  
  return (
    <View className='px-4 py-3 flex-row items-center justify-between'>
      {/* logo */}
      <View className='flex-row items-center gap-2'>
        <View className='bg-[#2178F7] p-2 rounded-full'>
          <FontAwesome6 name="user" size={16} color="white" />
        </View>
        <View className='flex-row items-center'>
          <Text className='font-bold text-xl'>BHC</Text>
          <Text className='text-xl'>JOBS</Text>
        </View>
      </View>

      {/* buttons */}
      <View className='flex-row items-center gap-3'>
        <TouchableOpacity className='border border-[#3B82F6] p-2 rounded-full'>
          <Text className='capitalize text-[#3B82F6]'>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity className='border border-[#3B82F6] p-1 rounded-full'>
          <Feather name="moon" size={20} color="#3B82F6" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header