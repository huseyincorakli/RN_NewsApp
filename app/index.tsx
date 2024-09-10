import { Dimensions, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BannerImage from "./components/banner_image";
import NewsCard from "./components/news";
import newsdata from "../datas/news_data.json";

export default function Index() {
  const renderNews = ({ item }) => <NewsCard  data={item} />; 

  return (
    <SafeAreaView style={{flex:1}}>
      <FlatList 
        ListHeaderComponent={BannerImage}
        data={newsdata}
        renderItem={renderNews}
        keyExtractor={(item) => item.u_id.toString()} 
      />
    </SafeAreaView>
  );
}

