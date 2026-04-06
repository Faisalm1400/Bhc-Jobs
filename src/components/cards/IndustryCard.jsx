import { getIndustryImageUrl } from '@/src/services/api'
import { View, Text, Image, TouchableOpacity } from 'react-native'

const IndustryCard = ({ image, title, subtitle }) => {

    const imageUrl = getIndustryImageUrl(image)
    return (
        <TouchableOpacity 
        className='flex-1 m-2 bg-white rounded-3xl p-4 shadow-sm border border-gray-100 active:bg-gray-50 items-center'
        >
            <Image source={{ uri: imageUrl }} className="w-12 h-12 rounded-2xl" />
            <View className="flex-1 items-center gap-1">
                <Text className='font-semibold text-base' numberOfLines={1} ellipsizeMode='tail'>{title}</Text>
                <Text className='text-[#6B7280] text-sm'>{subtitle}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default IndustryCard