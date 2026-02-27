import { View, Text, Image, Pressable, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { product as ProductType } from '../(tabs)/home';
import { useLocalSearchParams, useRouter } from 'expo-router';
import axios from 'axios';
import { FontAwesome } from '@expo/vector-icons';

export default function Product() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [product, setProduct] = useState<ProductType>();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const { data } = await axios.get(
          `http://192.168.56.1:8001/api/product/${id}`
        );
        setProduct(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    if (id) fetchdata();
  }, [id]);

  return (
    <View className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="relative w-full h-96 bg-slate-200">
          <Image 
            className="w-full h-full"
            resizeMode="cover" 
            source={{ uri: `http://192.168.56.1:8001/storage/${product?.image}` }} 
          />

          <Pressable 
            onPress={() => router.navigate('/home')}
            className="absolute top-4 left-3 flex-row items-center bg-white/90 p-2 rounded-full px-4 shadow-md"
          >
            <Text className="text-lg font-bold text-slate-900">
              <FontAwesome size={17} name='arrow-left' /> Back
            </Text>
          </Pressable>
        </View>
        <View className="p-6 -mt-8 bg-white flex-1 min-h-[500px]">
          <View className="flex-row justify-between items-start">
            <Text className="text-3xl font-extrabold text-slate-900 flex-1 mr-4">
              {product?.name?.toUpperCase()}
            </Text>
            <Text className="text-2xl font-black text-green-600 bg-slate-200 p-1 rounded-lg">
              ₱{product?.price}
            </Text>
          </View>
          <View className="mt-6">
            <Text className="text-xl uppercase tracking-[2px] font-bold text-slate-400 mb-2">
             Description
            </Text>
            <Text className="text-base text-slate-500 leading-7">
              {product?.description}
            </Text>
            <View className="h-20" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}