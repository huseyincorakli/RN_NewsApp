import { Component } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import newsbanner from "../../datas/news_banner_data.json";

class BannerImage extends Component {
    render() {
        return (
            <ScrollView  horizontal showsHorizontalScrollIndicator={false}  endFillColor={"purple"}>
                  {newsbanner.map((item)=>{
                    return(
                        <Image key={item.id} style= {styles.banner} source={{ uri: item.imageUrl }} ></Image>
                    )
                  })}
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    banner:{
     width:Dimensions.get('window').width/2,
     height:Dimensions.get('window').height/4,
    }
   
   })
export default BannerImage;