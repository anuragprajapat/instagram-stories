/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
console.disableYellowBox = true;
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
  ProgressBarAndroid,
  View
} from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
var TIME_FOR_EACH_SLIDE=70;// 2seconds
var deviceWidth=Dimensions.get('window').width;
var deviceHeight=Dimensions.get('window').height;

import {Stories} from './customComponent/stories';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state={
      readLink:false
    }
  }

  startSlideShow(){
    
    this.setState({
      fullScreenMode:true,
    });
  }


  componentDidMount(){
    this.setState({
      fullScreenMode:false,
      data:{
        images:[
          "http://hdwallpaper.site/wp-content/uploads/2018/05/wallpaper-for-mobile-marvel-awesome-avengers-phone-wallpaper-hd-wallpapers-pinterest-of-wallpaper-for-mobile-marvel.png",
          "https://www.mordeo.org/files/uploads/2018/04/Thor-In-Avengers-Infinity-War-HD-Mobile-Wallpaper-950x1689.jpg",
          "https://www.wallpapermobi.com/storage/upload/user_id_17/thumbnail/avengers-vs-batman-2017-05-31-01-17-49.jpg",
          "https://i.pinimg.com/originals/e7/25/a0/e725a08e642d271e3920427544ea4555.jpg",
          "http://www.modafinilsale.com/data/out/543/231327123-wallpapers-for-lumia-630.jpg",
          "http://hdwallpaper.site/wp-content/uploads/2018/05/wallpaper-for-mobile-marvel-awesome-avengers-phone-wallpaper-hd-wallpapers-pinterest-of-wallpaper-for-mobile-marvel.png",
          "https://www.mordeo.org/files/uploads/2018/04/Thor-In-Avengers-Infinity-War-HD-Mobile-Wallpaper-950x1689.jpg",
          "https://www.wallpapermobi.com/storage/upload/user_id_17/thumbnail/avengers-vs-batman-2017-05-31-01-17-49.jpg",
          "https://i.pinimg.com/originals/e7/25/a0/e725a08e642d271e3920427544ea4555.jpg",
          "http://www.modafinilsale.com/data/out/543/231327123-wallpapers-for-lumia-630.jpg",
          "http://hdwallpaper.site/wp-content/uploads/2018/05/wallpaper-for-mobile-marvel-awesome-avengers-phone-wallpaper-hd-wallpapers-pinterest-of-wallpaper-for-mobile-marvel.png",
          "https://www.mordeo.org/files/uploads/2018/04/Thor-In-Avengers-Infinity-War-HD-Mobile-Wallpaper-950x1689.jpg",
          "https://www.wallpapermobi.com/storage/upload/user_id_17/thumbnail/avengers-vs-batman-2017-05-31-01-17-49.jpg",
          "https://i.pinimg.com/originals/e7/25/a0/e725a08e642d271e3920427544ea4555.jpg",
          "http://www.modafinilsale.com/data/out/543/231327123-wallpapers-for-lumia-630.jpg"
        ]
      },
    });
  }

  myCallBack(){
    console.log("close called");
      this.setState({
        fullScreenMode:false
      });
  }

  render() {
    
    var progressbarWidth=50;
    return (
      <View style={{flex:1,flexDirection:'column'}}>
          <View style={{flex:1}}>
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <ScrollView 
            contentContainerStyle={{alignItems:'center',justifyContent:'center'}}
            showsHorizontalScrollIndicator={false} horizontal={true}>
              <Image style={{height:((deviceHeight*0.8)/10),width:((deviceHeight*0.8)/10),marginRight:(5),marginLeft:(5),borderRadius:((deviceHeight*0.8)/10)}} resizeMode="contain" source={{uri:"http://kukusi.com/wp-content/uploads/2010/09/sp1-440x440.jpg"}}/>
              <Image style={{height:((deviceHeight*0.8)/10),width:((deviceHeight*0.8)/10),marginRight:(5),marginLeft:(5),borderRadius:((deviceHeight*0.8)/10)}} resizeMode="contain" source={{uri:"http://kukusi.com/wp-content/uploads/2010/09/sp1-440x440.jpg"}}/>
              <Image style={{height:((deviceHeight*0.8)/10),width:((deviceHeight*0.8)/10),marginRight:(5),marginLeft:(5),borderRadius:((deviceHeight*0.8)/10)}} resizeMode="contain" source={{uri:"http://kukusi.com/wp-content/uploads/2010/09/sp1-440x440.jpg"}}/>
              <Image style={{height:((deviceHeight*0.8)/10),width:((deviceHeight*0.8)/10),marginRight:(5),marginLeft:(5),borderRadius:((deviceHeight*0.8)/10)}} resizeMode="contain" source={{uri:"http://kukusi.com/wp-content/uploads/2010/09/sp1-440x440.jpg"}}/>
              <Image style={{height:((deviceHeight*0.8)/10),width:((deviceHeight*0.8)/10),marginRight:(5),marginLeft:(5),borderRadius:((deviceHeight*0.8)/10)}} resizeMode="contain" source={{uri:"http://kukusi.com/wp-content/uploads/2010/09/sp1-440x440.jpg"}}/>
              <Image style={{height:((deviceHeight*0.8)/10),width:((deviceHeight*0.8)/10),marginRight:(5),marginLeft:(5),borderRadius:((deviceHeight*0.8)/10)}} resizeMode="contain" source={{uri:"http://kukusi.com/wp-content/uploads/2010/09/sp1-440x440.jpg"}}/>
              <Image style={{height:((deviceHeight*0.8)/10),width:((deviceHeight*0.8)/10),marginRight:(5),marginLeft:(5),borderRadius:((deviceHeight*0.8)/10)}} resizeMode="contain" source={{uri:"http://kukusi.com/wp-content/uploads/2010/09/sp1-440x440.jpg"}}/>
              <Image style={{height:((deviceHeight*0.8)/10),width:((deviceHeight*0.8)/10),marginRight:(5),marginLeft:(5),borderRadius:((deviceHeight*0.8)/10)}} resizeMode="contain" source={{uri:"http://kukusi.com/wp-content/uploads/2010/09/sp1-440x440.jpg"}}/>
              <Image style={{height:((deviceHeight*0.8)/10),width:((deviceHeight*0.8)/10),marginRight:(5),marginLeft:(5),borderRadius:((deviceHeight*0.8)/10)}} resizeMode="contain" source={{uri:"http://kukusi.com/wp-content/uploads/2010/09/sp1-440x440.jpg"}}/>
            </ScrollView>
          </View>
          <TouchableHighlight onPress={()=>this.startSlideShow()} style={{flex:9}}>
          <Image style={{flex:1}} source={{uri:"http://hdwallpaper.site/wp-content/uploads/2018/05/wallpaper-for-mobile-marvel-awesome-avengers-phone-wallpaper-hd-wallpapers-pinterest-of-wallpaper-for-mobile-marvel.png"}}/>
          </TouchableHighlight>
        </View>
      {
        this.state.fullScreenMode==true &&
        <SlidingUpPanel
          style={{flex:1}}
          ref={instance => { this.child = instance; }}
          onDragEnd={(position)=>{
            if(position>(deviceHeight-(deviceHeight/20))){
              //programmatically go up
              this.child.transitionTo({toValue:deviceHeight,duration:100});
            }
            else{
              //programmatically go down
              this.child.transitionTo({toValue:0,duration:100});
            }
            console.log(position,deviceHeight);
          }}
          allowMomentum={true}
          visible={this.state.fullScreenMode}
          onRequestClose={() => {
            this.setState({fullScreenMode: false})
            //this.resetSlider();
          }}>

          <Stories 
          imagesArr={this.state.data.images}
          progressWidth={(deviceWidth*0.8)/this.state.data.images.length}
          callbackFromParent={()=>this.myCallBack()}
          />

        </SlidingUpPanel>
      }
      </View>
    );
  }
}