import { View, Text } from 'react-native'
import React from 'react'

const Labels = ({title}) => {
  return (
    <View className='bg-[#EFF6FF] py-3 px-4 rounded-full'>
      <Text className='text-[#374151] text-xl font-bold'>{title}</Text>
      
    </View>
  )
}

export default Labels