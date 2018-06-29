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
import {scale,verticalScale} from './resources/scaling';
import * as Progress from 'react-native-progress';
import SlidingUpPanel from 'rn-sliding-up-panel';
var TIME_FOR_EACH_SLIDE=70;// 2seconds
var deviceWidth=Dimensions.get('window').width;
var deviceHeight=Dimensions.get('window').height;
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
      visible:false,
      readLink:false
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
      progress5:0,
      readLink:false
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
    if(self.state.data.images.length==1){
      self.setState({
        readLink:true
      });
    }
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
    if(self.state.data.images.length==2){
      self.setState({
        readLink:true
      });
    }
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
    if(self.state.data.images.length==3){
      self.setState({
        readLink:true
      });
    }
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
    if(self.state.data.images.length==4){
      self.setState({
        readLink:true
      });
    }
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
    if(self.state.data.images.length==5){
      self.setState({
        readLink:true
      });
    }
     fifthInterval=setInterval(() => {
      if(isPaused==false)
        progress5+= 1 / 50;
        //console.log("");
        if (progress5 > 1) {
          progress5 = 0;
          self.resetSlider();
          self.setState({fullScreenMode: false});
          clearInterval(fifthInterval);
          //todo conditional

          
          
         
          
        }
        this.setState({ progress5 :progress5});
      }, TIME_FOR_EACH_SLIDE); 
  }

  slideBack(){
    this.setState({
      readLink:false
    })
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
          "Hello World, this is the second image",
          "Hello World, this is the third image",
          "Hello World, this is the fourth image",
          "Hello World, this is the fifth image",
        ],
        images:[
          // "https://pre00.deviantart.net/66e2/th/pre/f/2016/240/a/c/the_new_avengers_hd_mobile_wallpaper_by_theincrediblejake-dafkr67.jpg",
          // "https://www.mordeo.org/files/uploads/2018/04/Thor-In-Avengers-Infinity-War-HD-Mobile-Wallpaper-950x1689.jpg",
          // "https://www.wallpapermobi.com/storage/upload/user_id_17/thumbnail/avengers-vs-batman-2017-05-31-01-17-49.jpg",
          // "https://i.pinimg.com/originals/e7/25/a0/e725a08e642d271e3920427544ea4555.jpg",
          // "http://www.modafinilsale.com/data/out/543/231327123-wallpapers-for-lumia-630.jpg"
          1,2,3,4,5
        ]
      },
    });

  }


  render() {
    var self=this;
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
          allowMomentum={true}
          visible={this.state.fullScreenMode}
          onRequestClose={() => {
            this.setState({fullScreenMode: false})
            this.resetSlider();
          }}>
        <View style={{flex:1,backgroundColor:'#ccc',padding:isPaused==true?30:0}}>
          <ImageBackground style={{flex:1}}  source={this.state.activeImage==1?require('./resources/img/1.jpg'):this.state.activeImage==2?require('./resources/img/2.jpg'):this.state.activeImage==3?require('./resources/img/3.jpg'):this.state.activeImage==4?require('./resources/img/4.jpg'):require('./resources/img/2.jpg')} >
          <View style={{position:'absolute',left:0,top:0,bottom:0,right:0}}>
          {
            isPaused==false &&
            <View style={{flex:1,paddingLeft:verticalScale(20),flexDirection:'row',alignItems:'center'}}>
              <Image style={{height:((deviceHeight*0.8)/10),width:((deviceHeight*0.8)/10),marginRight:(5),borderRadius:((deviceHeight*0.8)/10)}} resizeMode="contain" source={{uri:"https://cdn.dribbble.com/users/223408/screenshots/2134810/me-dribbble-size-001-001_1x.png"}}/>
              <Text style={{color:'#fff',fontWeight:'bold',fontSize:(14),textAlignVertical:'center',paddingLeft:(10)}}>Avinash Solanki</Text>
            </View>
          }
            <View style={{flex:9,flexDirection:'column'}}>
              <View style={{flex:8}}>
              <View style={{flex:1}}>
                   {
              this.state.readLink &&
              <View style={{height:(20),flex:1}}>
                <Text style={{color:'#000',fontSize:(18),textAlign:'right',paddingRight:(20)}} onPress={()=>Alert.alert("TODO","Map with local screen logic")}>Read More </Text>
              </View>
            }
                </View>
                <View style={{flex:9,flexDirection:'row'}}>
                <TouchableOpacity 
                style={{flex:1}}
                onPressIn={()=>this.startTimerAction()}
                onPressOut={()=>{this.decideTimerFate('b')}}
                style={{flex:1}}>
                  <View style={{flex:1}}></View>
                </TouchableOpacity>
                <TouchableOpacity 
                style={{flex:1}}
                onPressIn={()=>this.startTimerAction()}
                onPressOut={()=>{this.decideTimerFate('f')}}
                style={{flex:1}}>
                  <View style={{flex:1}}></View>
                </TouchableOpacity>
                </View>
                
              </View>

              {
              isPaused==false &&
              <View style={{flex:1,marginBottom:10,flexDirection:'row',width:deviceWidth,alignItems:'center',justifyContent:'space-around'}}>
              {
                // this.state.data.images.length>0 &&
                // <Progress.Bar
                // color="#fff"
                // //animated={false}
                // style={{backgroundColor:'#939393',opacity:0.8,height:(5)}}
                // borderWidth={0}
                // width={(deviceWidth/(7))}
                // progress={this.state.progress}
                // indeterminate={this.state.indeterminate}
                // />
              <ProgressBarAndroid 
              styleAttr="Horizontal" 
              height={2}
              animating={true}
              width={(deviceWidth/(7))}
              color="#fff"
              indeterminate={false} 
              progress={this.state.progress}
              />
              }
              
              {
                this.state.data.images.length>1 &&
                <ProgressBarAndroid 
              styleAttr="Horizontal" 
              height={2}
              animating={true}
              width={(deviceWidth/(7))}
              color="#fff"
              indeterminate={false} 
              progress={this.state.progress2}
              />
                // <Progress.Bar
                // color="#fff"
                // //animated={false}
                // borderWidth={0}
                // style={{backgroundColor:'#939393',opacity:0.8,height:(5)}}
                // width={(deviceWidth/7)}
                // progress={this.state.progress2}
                // indeterminate={this.state.indeterminate}
                // />
              }
              {
                <ProgressBarAndroid 
                styleAttr="Horizontal" 
                height={2}
                animating={true}
                width={(deviceWidth/(7))}
                color="#fff"
                indeterminate={false} 
                progress={this.state.progress3}
                />
                // this.state.data.images.length>2 &&
                // <Progress.Bar
                // color="#fff"
                // //animated={false}
                // borderWidth={0}
                // style={{backgroundColor:'#939393',opacity:0.8,height:(5)}}
                // width={(deviceWidth/7)}
                // progress={this.state.progress3}
                // indeterminate={this.state.indeterminate}
                // />
              }
              {
                <ProgressBarAndroid 
                styleAttr="Horizontal" 
                height={2}
                animating={true}
                width={(deviceWidth/(7))}
                color="#fff"
                indeterminate={false} 
                progress={this.state.progress4}
                />
                // this.state.data.images.length>3 &&
                // <Progress.Bar
                // color="#fff"
                // //animated={false}
                // borderWidth={0}
                // style={{backgroundColor:'#939393',opacity:0.8,height:(5)}}
                // width={(deviceWidth/7)}
                // progress={this.state.progress4}
                // indeterminate={this.state.indeterminate}
                // />
              }
              {
                <ProgressBarAndroid 
                styleAttr="Horizontal" 
                height={2}
                animating={true}
                width={(deviceWidth/(7))}
                color="#fff"
                indeterminate={false} 
                progress={this.state.progress5}
                />
                // this.state.data.images.length>4 &&
                // <Progress.Bar
                // color="#fff"
                // //animated={false}
                // borderWidth={0}
                // style={{backgroundColor:'#939393',opacity:0.8,height:(5)}}
                // width={(deviceWidth/7)}
                // progress={this.state.progress5}
                // indeterminate={this.state.indeterminate}
                // />
              }
              
            </View>
            }
            </View>
          

           
           
            
            
          </View>
          </ImageBackground>
        </View>
        </SlidingUpPanel>
      }
      </View>
    );
  }
}