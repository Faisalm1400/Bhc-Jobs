import { View, Text } from 'react-native'
import { Tabs } from 'expo-router'
import { Entypo, FontAwesome5 } from '@expo/vector-icons'



const TabIcon = ({ focused, icon: IconComponent, name, title }) => {
    return (
        <View className="items-center py-1 my-auto">
            <IconComponent
                name={name}
                size={24}
                color={focused ? '#000000' : '#808080'}
            />
            <Text
                className={`text-xs capitalize w-full ${focused ? 'text-black' : 'text-[#A0A0A0]'
                    }`}
            >
                {title}
            </Text>
        </View>
    )
}

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#FFFFFF',
                    borderTopColor: '#E5E5E5',
                    borderTopWidth: 1,
                    height: 60,
                    paddingBottom: 8,
                },
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: "Home",
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={Entypo}
                            name="home"
                            title="Home"
                        />
                    ),
                }} />

            <Tabs.Screen
                name='profile'
                options={{
                    title: "Profile",
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={FontAwesome5}
                            name="user-alt"
                            title="Profile"
                        />
                    ),
                }} />

            <Tabs.Screen
                name='jobs'
                options={{
                    title: "Jobs",
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={FontAwesome5}
                            name="briefcase"
                            title="Jobs"
                        />
                    ),
                }} />
        </Tabs>
    )
}

export default TabsLayout