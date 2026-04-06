import { View, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import Labels from '../shared/Labels';
import { getIndustries } from "@/src/services/api";
import IndustryCard from "@/src/components/cards/IndustryCard";

const PopularIndustries = () => {
    const [industries, setIndustries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getIndustries()
            .then((data) => {
                if (data?.status) {
                    setIndustries(data.data);
                }
            })
            .catch((error) => {
                console.error("Error fetching industries:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <View className="py-10">
                <ActivityIndicator size="large" color="#3D75ED" />
            </View>
        );
    }

    return (
        <View className="py-10">

            
            <View className="mx-auto mb-6">
                <Labels title="Popular Industries" />
            </View>

            {/* 2 Column Grid */}
            <View className="flex-row flex-wrap justify-between gap-2 px-6">
                {industries.map((item) => (
                    <View 
                        key={item.id} 
                        className="flex-1 h-[20%] min-w-[36%]"
                    >
                        <IndustryCard
                            image={item.image}
                            title={item.name}
                            subtitle={`${item.jobs_count} Available Jobs`}
                        />
                    </View>
                ))}
            </View>
        </View>
    );
};

export default PopularIndustries;