import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Route, router } from "expo-router";

export type product = {
  id:number;
  image: string;
  name: string;
  description: string;
  price: number;
};

export default function Home() {
  const [product, setProduct] = useState<product[]>([]);


  useEffect(()=>{
    const fetchdata = async () =>{
      const {data} = await axios.get(
        'http://192.168.56.1:8001/api/products'
      );
      setProduct(data);
    }
    fetchdata();
  },[])

  return (
    <View
      style={{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
      }}
    >
      <ScrollView>
      {product.map((prod)=>(
       <View className="bg-white m-3 p-4 rounded-2xl shadow-lg border border-slate-100">
  <Image className="h-52 w-full rounded-xl self-center"
    resizeMode="cover" source={{ uri: `http://192.168.56.1:8001/storage/${prod.image}` }}/>
    <View className="mt-4">
      <Text className="text-xl font-bold text-slate-800">{prod?.name?.toUpperCase()}</Text>
      <Text className="text-green-600 font-semibold text-lg mt-1">₱{prod.price}</Text>
      <Text className="text-slate-500 mt-2 leading-5" numberOfLines={2}>{prod.description}</Text>
      <Link className="mt-4 bg-blue-600 p-3 rounded-lg text-center overflow-hidden"
        href={{
          pathname: '/page/[id]',
          params: { id: prod.id }
        }}>
        <Text className="text-white font-bold text-center">View Product</Text>
      </Link>
      </View>
    </View>
      ))}
      </ScrollView>

    </View>
  );
}



























// export default function Home() {
//   const [blogs, setBlogs] = useState<BlogProps[]>([]);

//   useEffect(() => {
//     const getBlog = async () => {
//       try {
//         const { data } = await axios.get("http://172.20.10.2:8000/api/blogs");
//         setBlogs(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getBlog();
//   }, []);

//   return (
//     <View>
//       {blogs.map((blog) => (
//         <View key={blog.id}>
//           <Image style={{
//             height: 60
//           }} source={{
//             uri: `http://172.20.10.2:8000/storage/${blog.image}`
//           }} />
//           <Text>{blog.title}</Text>
//         </View>
//       ))}
//     </View>
//   );
// }


