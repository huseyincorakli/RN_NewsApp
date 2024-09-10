import { Component } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import newsdata from "../../datas/news_data.json";
class NewsCard extends Component<{data:any }> {
    render() {
        return (
            <View style={styles.news_container}>
                <Image style={styles.news_image} source={{ uri: this.props.data.imageUrl }}></Image>
                <Text style={styles.news_title}>{this.props.data.title}</Text>
                <Text style={styles.news_description}>{this.props.data.description}</Text>
                <Text style={styles.news_author}>~{this.props.data.author}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    news_container:{
        paddingHorizontal:10,
        marginTop:10
    },
    news_image:{
        height:Dimensions.get('window').height/4,
        borderRadius:10
    },
    news_title:{
        fontSize:18,
        fontWeight:'bold'
    },
    news_description:{
        fontSize:14,
        textAlign:'auto',
    },
    news_author:{
        fontSize:12,
        textAlign:'right',
        margin:10,
        fontStyle:'italic'
    }
})

export default NewsCard;
