/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image,
  ScrollView,
  Text,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
  View
} from 'react-native';
import {scale,verticalScale} from './resources/scaling';
import * as Progress from 'react-native-progress';
import SlidingUpPanel from 'rn-sliding-up-panel';
var TIME_FOR_EACH_SLIDE=100;// 2seconds
var deviceWidth=Dimensions.get('window').width;
var firstInterval,secondInterval,thirdInterval,fourthInterval,fifthInterval;
var press,pressDuration=0,isPaused=false;
export default class App extends Component {

  

  constructor(props){
    super(props);
    this.state={
      indeterminate:false,
      progress:0,
      progress2:0,
      progress3:0,
      progress4:0,
      progress5:0,
      visible:false
    }
  }



  startSlideShow(){
    
    this.setState({
      fullScreenMode:true,
      currentSlide:1
    });
    this.animate();
    // setInterval(()=>{
      
    // },TIME_FOR_EACH_SLIDE*100)
  }

  resetSlider(){
    this.setState({
      progress:0,
      progress2:0,
      progress3:0,
      progress4:0,
      progress5:0
    });
    clearInterval(firstInterval);
    clearInterval(secondInterval); 
    clearInterval(thirdInterval);
    clearInterval(fourthInterval);
    clearInterval(fifthInterval);
  }

  animate() {
    let progress = 0;
    console.log("animating");
    this.setState({ progress:0 });
    var self=this;
    self.setState({
      activeImage:self.state.data.images[0],
      activeIndex:1
    });
     firstInterval=setInterval(() => {
       if(isPaused==false)
          progress += 1 / 50;
        //console.log("");
        if (progress > 1) {
          progress = 1;

          clearInterval(firstInterval);

          if(self.state.data.images.length>1){
            self.animate2();
          } 
          
        }
        this.setState({ progress:progress });
      }, TIME_FOR_EACH_SLIDE); 
  }

  animate2() {
    let progress2 = 0;
    console.log("animating 2");
    this.setState({ progress2:0 });
    var self=this;
    self.setState({
      activeImage:self.state.data.images[1],
      activeIndex:2
    });
     secondInterval=setInterval(() => {
      if(isPaused==false)
        progress2 += 1 / 50;
        //console.log("");
        if (progress2 > 1) {
          progress2 = 1;
          clearInterval(secondInterval);
          if(self.state.data.images.length>2){
            self.animate3();
          } 
        }
        this.setState({ progress2:progress2 });
      }, TIME_FOR_EACH_SLIDE); 
  }

  animate3() {
    let progress3 = 0;
    console.log("animating 3");
    this.setState({ progress3:0});
    var self=this;
    self.setState({
      activeImage:self.state.data.images[2],
      activeIndex:3
    });
     thirdInterval=setInterval(() => {
      if(isPaused==false)
        progress3 += 1 / 50;
        //console.log("");
        if (progress3 > 1) {
          progress3 = 1;
          clearInterval(thirdInterval);
          if(self.state.data.images.length>3){
            self.animate4();
          } 
        }
        this.setState({ progress3:progress3 });
      }, TIME_FOR_EACH_SLIDE); 
  }

  animate4() {
    let progress4 = 0;
    console.log("animating 4");
    this.setState({ progress4:0 });
    var self=this;
    self.setState({
      activeImage:self.state.data.images[3],
      activeIndex:4
    });
     fourthInterval=setInterval(() => {
      if(isPaused==false)
        progress4+= 1 / 50;
        //console.log("");
        if (progress4 > 1) {
          progress4 = 1;
          clearInterval(fourthInterval);
          if(self.state.data.images.length>4){
            self.animate5();
          } 
        }
        this.setState({ progress4:progress4 });
      }, TIME_FOR_EACH_SLIDE); 
  }

  animate5() {
    let progress5 = 0;
    console.log("animating 4");
    this.setState({ progress5:0 });
    var self=this;
    self.setState({
      activeImage:self.state.data.images[4],
      activeIndex:5
    });
     fifthInterval=setInterval(() => {
      if(isPaused==false)
        progress5+= 1 / 50;
        //console.log("");
        if (progress5 > 1) {
          progress5 = 1;
          clearInterval(fifthInterval);
        }
        this.setState({ progress5 :progress5});
      }, TIME_FOR_EACH_SLIDE); 
  }

  slideBack(){
    if(this.state.activeIndex!=1){
      switch(this.state.activeIndex){
        case 2:
          clearInterval(secondInterval);
          this.setState({
            progress2:0,
          });
          this.animate();
        break;
        case 3:
          clearInterval(thirdInterval);
          this.setState({
            progress3:0
          });
          this.animate2();
        break;
        case 4:
          clearInterval(fourthInterval);
          this.setState({
            progress4:0
          });
          this.animate3();
        break;
        case 5:
          clearInterval(fifthInterval);
          this.setState({
            progress5:0
          });
          this.animate4();
        break;
        default:
        break;
      }
    }
  }

  slideForward(){
    if(this.state.activeIndex!=this.state.data.images.length){
      switch(this.state.activeIndex){
        case 1:
          clearInterval(firstInterval);
          this.setState({
            progress:1
          });
          this.animate2();
        break;
        case 2:
          clearInterval(secondInterval);
          this.setState({
            progress2:1
          });
          this.animate3();
        break;
        case 3:
          clearInterval(thirdInterval);
          this.setState({
            progress3:1
          });
          this.animate4();
        break;
        case 4:
          clearInterval(fourthInterval);
          this.setState({
            progress4:1
          });
          this.animate5();
        break;
        default:
        break;
      }
    }
  }

  controllerOfInstagramSlider(){

  }

  startTimerAction(){
    var self=this;
    press=setInterval(()=>{

      if(pressDuration>200){
        //Alert.alert("hey");
        isPaused=true
      }
        pressDuration+=100;
    },100);
  }

  decideTimerFate(action){
    //Alert.alert("heyy");
    isPaused=false
    clearInterval(press);
    if(pressDuration<199){
      if(action=='b')
      this.slideBack();
      if(action=='f')
      this.slideForward();
    }
    pressDuration=0;
    
  }


  componentDidMount(){
    this.setState({
      fullScreenMode:false,
      data:{
        titles:[
          "Hello World, this is the forst image",
          // "Hello World, this is the second image",
          // "Hello World, this is the third image",
          // "Hello World, this is the fourth image",
          "Hello World, this is the fifth image",
        ],
        images:[
          "https://pre00.deviantart.net/66e2/th/pre/f/2016/240/a/c/the_new_avengers_hd_mobile_wallpaper_by_theincrediblejake-dafkr67.jpg",
          "https://upload.wikimedia.org/wikipedia/ta/1/13/Avengers-Age-of-Ultron-2.jpg",
          "https://www.mordeo.org/files/uploads/2018/04/Thor-In-Avengers-Infinity-War-HD-Mobile-Wallpaper-950x1689.jpg",
          "https://www.wallpapermobi.com/storage/upload/user_id_17/thumbnail/avengers-vs-batman-2017-05-31-01-17-49.jpg",
          "https://i.pinimg.com/originals/e7/25/a0/e725a08e642d271e3920427544ea4555.jpg"
        ]
      },
    });
  }


  render() {
    return (
      <View style={{flex:1,flexDirection:'column'}}>
          <View style={{flex:1}}>
            <View style={{height:verticalScale(100)}}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{margin:scale(10)}}>
              
              <Image style={{height:verticalScale(70),width:verticalScale(70),marginRight:verticalScale(5),borderRadius:verticalScale(70)}} resizeMode="contain" source={{uri:"http://kukusi.com/wp-content/uploads/2010/09/sp1-440x440.jpg"}}/>
              <Image style={{height:verticalScale(70),width:verticalScale(70),marginRight:verticalScale(5),borderRadius:verticalScale(70)}} resizeMode="contain" source={{uri:"http://kukusi.com/wp-content/uploads/2010/09/sp1-440x440.jpg"}}/>
              <Image style={{height:verticalScale(70),width:verticalScale(70),marginRight:verticalScale(5),borderRadius:verticalScale(70)}} resizeMode="contain" source={{uri:"http://kukusi.com/wp-content/uploads/2010/09/sp1-440x440.jpg"}}/>
              <Image style={{height:verticalScale(70),width:verticalScale(70),marginRight:verticalScale(5),borderRadius:verticalScale(70)}} resizeMode="contain" source={{uri:"http://kukusi.com/wp-content/uploads/2010/09/sp1-440x440.jpg"}}/>
              <Image style={{height:verticalScale(70),width:verticalScale(70),marginRight:verticalScale(5),borderRadius:verticalScale(70)}} resizeMode="contain" source={{uri:"http://kukusi.com/wp-content/uploads/2010/09/sp1-440x440.jpg"}}/>
              <Image style={{height:verticalScale(70),width:verticalScale(70),marginRight:verticalScale(5),borderRadius:verticalScale(70)}} resizeMode="contain" source={{uri:"http://kukusi.com/wp-content/uploads/2010/09/sp1-440x440.jpg"}}/>
              <Image style={{height:verticalScale(70),width:verticalScale(70),marginRight:verticalScale(5),borderRadius:verticalScale(70)}} resizeMode="contain" source={{uri:"http://kukusi.com/wp-content/uploads/2010/09/sp1-440x440.jpg"}}/>
              <Image style={{height:verticalScale(70),width:verticalScale(70),marginRight:verticalScale(5),borderRadius:verticalScale(70)}} resizeMode="contain" source={{uri:"http://kukusi.com/wp-content/uploads/2010/09/sp1-440x440.jpg"}}/>
              <Image style={{height:verticalScale(70),width:verticalScale(70),marginRight:verticalScale(5),borderRadius:verticalScale(70)}} resizeMode="contain" source={{uri:"http://kukusi.com/wp-content/uploads/2010/09/sp1-440x440.jpg"}}/>
              <Image style={{height:verticalScale(70),width:verticalScale(70),marginRight:verticalScale(5),borderRadius:verticalScale(70)}} resizeMode="contain" source={{uri:"http://kukusi.com/wp-content/uploads/2010/09/sp1-440x440.jpg"}}/>
              <Image style={{height:verticalScale(70),width:verticalScale(70),marginRight:verticalScale(5),borderRadius:verticalScale(70)}} resizeMode="contain" source={{uri:"http://kukusi.com/wp-content/uploads/2010/09/sp1-440x440.jpg"}}/>
              <Image style={{height:verticalScale(70),width:verticalScale(70),marginRight:verticalScale(5),borderRadius:verticalScale(70)}} resizeMode="contain" source={{uri:"http://kukusi.com/wp-content/uploads/2010/09/sp1-440x440.jpg"}}/>
            </ScrollView>
          </View>
          <TouchableHighlight onPress={()=>this.startSlideShow()} style={{flex:1}}>
            <Image style={{flex:1}} source={{uri:"http://hdwallpaper.site/wp-content/uploads/2018/05/wallpaper-for-mobile-marvel-awesome-avengers-phone-wallpaper-hd-wallpapers-pinterest-of-wallpaper-for-mobile-marvel.png"}}/>
          </TouchableHighlight>
        </View>
      {
        this.state.fullScreenMode==true &&
        <SlidingUpPanel
          
          allowMomentum={true}
          visible={this.state.fullScreenMode}
          onRequestClose={() => {
            this.setState({fullScreenMode: false})
            this.resetSlider();
          }}>
        <View style={{flex:1,backgroundColor:'#fff'}}>
          <Image style={{flex:1}} source={{uri:this.state.activeImage}}/>
          <View style={{position:'absolute',flex:1,flexDirection:'column'}}>
            <View>
            <Image style={{height:verticalScale(50),width:verticalScale(50),marginRight:verticalScale(5),borderRadius:verticalScale(50)}} resizeMode="contain" source={{uri:"http://kukusi.com/wp-content/uploads/2010/09/sp1-440x440.jpg"}}/>
            </View>
            
            <View style={{backgroundColor:'transparent',flex:1,flexDirection:'row'}}>
              <TouchableOpacity 
              onPressIn={()=>this.startTimerAction()}
              onPressOut={()=>{this.decideTimerFate('b')}}
              style={{flex:1}}>
                <View style={{height:verticalScale(540)}}></View>
              </TouchableOpacity>
              <TouchableOpacity 
              onPressIn={()=>this.startTimerAction()}
              onPressOut={()=>{this.decideTimerFate('f')}}
              style={{flex:1}}>
                <View style={{height:verticalScale(540)}}></View>
              </TouchableOpacity>
            </View>
            {
              isPaused==false &&
              <View style={{backgroundColor:'transparent',flex:1,flexDirection:'row',height:verticalScale(50),width:deviceWidth,alignItems:'center',justifyContent:'space-around'}}>
              {
                this.state.data.images.length>0 &&
                <Progress.Bar
                color="#fff"
                animated={false}
                style={{backgroundColor:'#939393',opacity:0.8,height:verticalScale(5)}}
                borderWidth={0}
                width={scale(deviceWidth/(this.state.data.images.length+1))}
                progress={this.state.progress}
                indeterminate={this.state.indeterminate}
                />
              }
              {
                this.state.data.images.length>1 &&
                <Progress.Bar
                color="#fff"
                animated={false}
                borderWidth={0}
                style={{backgroundColor:'#939393',opacity:0.8,height:verticalScale(5)}}
                width={scale(deviceWidth/(this.state.data.images.length+1))}
                progress={this.state.progress2}
                indeterminate={this.state.indeterminate}
                />
              }
              {
                this.state.data.images.length>2 &&
                <Progress.Bar
                color="#fff"
                animated={false}
                borderWidth={0}
                style={{backgroundColor:'#939393',opacity:0.8,height:verticalScale(5)}}
                width={scale(deviceWidth/this.state.data.images.length)}
                progress={this.state.progress3}
                indeterminate={this.state.indeterminate}
                />
              }
              {
                this.state.data.images.length>3 &&
                <Progress.Bar
                color="#fff"
                animated={false}
                borderWidth={0}
                style={{backgroundColor:'#939393',opacity:0.8,height:verticalScale(5)}}
                width={scale(deviceWidth/(this.state.data.images.length+1))}
                progress={this.state.progress4}
                indeterminate={this.state.indeterminate}
                />
              }
              {
                this.state.data.images.length>4 &&
                <Progress.Bar
                color="#fff"
                animated={false}
                borderWidth={0}
                style={{backgroundColor:'#939393',opacity:0.8,height:verticalScale(5)}}
                width={scale(deviceWidth/(this.state.data.images.length+1))}
                progress={this.state.progress5}
                indeterminate={this.state.indeterminate}
                />
              }
              
            </View>
            }
          </View>
        </View>
        </SlidingUpPanel>
      }
      </View>
    );
  }
}