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
var TIME_FOR_EACH_SLIDE=70;
var LONG_PRESS_TRESHOLD=300;
var deviceWidth=Dimensions.get('window').width;
var deviceHeight=Dimensions.get('window').height;
var firstInterval,secondInterval,thirdInterval,fourthInterval,fifthInterval,sixthInterval,seventhInterval,eightInterval,ninethInterval,tenthInterval,eleventhInterval,twelvthInterval,thirteenthInterval,fourteenthInterval,fifteenthInterval;
var press,pressDuration=0,isPaused=false;
export class Stories extends Component {

  constructor(props){
    super(props);
    this.state={
      indeterminate:false,
      progress:0,
      progress2:0,
      progress3:0,
      progress4:0,
      progress5:0,
      progress6:0,
      progress7:0,
      progress8:0,
      progress9:0,
      progress10:0,
      progress11:0,
      progress12:0,
      progress13:0,
      progress14:0,
      progress15:0,
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
    console.log("-----slider reset----");
    this.setState({
      progress:0,
      progress2:0,
      progress3:0,
      progress4:0,
      progress5:0,
      progress6:0,
      progress7:0,
      progress8:0,
      progress9:0,
      progress10:0,
      progress11:0,
      progress12:0,
      progress13:0,
      progress14:0,
      progress15:0,
      readLink:false
    });

    clearInterval(firstInterval);
    clearInterval(secondInterval); 
    clearInterval(thirdInterval);
    clearInterval(fourthInterval);
    clearInterval(fifthInterval);

    clearInterval(sixthInterval);
    clearInterval(seventhInterval); 
    clearInterval(eightInterval);
    clearInterval(ninethInterval);
    clearInterval(tenthInterval);

    clearInterval(eleventhInterval);
    clearInterval(twelvthInterval); 
    clearInterval(thirteenthInterval);
    clearInterval(fourteenthInterval);
    clearInterval(fifteenthInterval);

  }

  animate() {
    let progress = 0;
    console.log("animating 1 start");
    this.setState({ progress:0 });
    var self=this;
    if(this.props.imagesArr.length==1){
      self.setState({
        readLink:true
      });
    }
    self.setState({
      activeImage:self.props.imagesArr[0],
      activeIndex:1
    });
     firstInterval=setInterval(() => {
       if(isPaused==false)
          progress += 1 / 50;
        //console.log("");
        if (progress > 1) {
          progress = 1;
          clearInterval(firstInterval);
          if(this.props.imagesArr.length==1){
            self.resetSlider();
            console.log("animation 1 stop");
            console.log("closing panel");
            self.props.callbackFromParent();
          }
          else{
            console.log("animation 1 stop");
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
      activeImage:this.props.imagesArr[1],
      activeIndex:2
    });
    if(this.props.imagesArr.length==2){
      self.setState({
        readLink:true
      });
    }
     secondInterval=setInterval(() => {
      if(isPaused==false)
        progress2 += 1 / 50;
        if (progress2 > 1) {
          progress2 = 1;
          if(this.props.imagesArr.length==2){
            self.resetSlider();
            self.props.callbackFromParent();
          }
          else{
              self.animate3();
          }
          clearInterval(secondInterval);
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
      activeImage:this.props.imagesArr[2],
      activeIndex:3
    });
    if(this.props.imagesArr.length==3){
      self.setState({
        readLink:true
      });
    }
     thirdInterval=setInterval(() => {
      if(isPaused==false)
        progress3 += 1 / 50;
        if (progress3 > 1) {
          progress3 = 1;
          if(this.props.imagesArr.length==3){
            self.resetSlider();
            self.props.callbackFromParent();
          }
          else{
              self.animate4();
          }
          clearInterval(thirdInterval);
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
      activeImage:this.props.imagesArr[3],
      activeIndex:4
    });
    if(this.props.imagesArr.length==4){
      self.setState({
        readLink:true
      });
    }
     fourthInterval=setInterval(() => {
      if(isPaused==false)
        progress4+= 1 / 50;
        if (progress4 > 1) {
          progress4 = 1;
          if(this.props.imagesArr.length==4){
            self.resetSlider();
            self.props.callbackFromParent();
          }
          else{
              self.animate5();
          }
          clearInterval(fourthInterval);
          
         
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
      activeImage:this.props.imagesArr[4],
      activeIndex:5
    });
    if(this.props.imagesArr.length==5){
      self.setState({
        readLink:true
      });
    }
     fifthInterval=setInterval(() => {
      if(isPaused==false)
        progress5+= 1 / 50;
        //console.log("");
        if (progress5 > 1) {
          progress5 = 1;
          if(this.props.imagesArr.length==5){
            self.resetSlider();
            self.props.callbackFromParent();
          }
          else{
              self.animate6();
          }
          clearInterval(fifthInterval);
        }
        this.setState({ progress5 :progress5});
      }, TIME_FOR_EACH_SLIDE); 
  }

  animate6() {
    let progress6 = 0;
    console.log("animating 4");
    this.setState({ progress6:0 });
    var self=this;
    self.setState({
      activeImage:this.props.imagesArr[5],
      activeIndex:6
    });
    if(this.props.imagesArr.length==6){
      self.setState({
        readLink:true
      });
    }
     sixthInterval=setInterval(() => {
      if(isPaused==false)
        progress6+= 1 / 50;
        //console.log("");
        if (progress6 > 1) {
          progress6 = 1;
          if(this.props.imagesArr.length==6){
            self.resetSlider();
            self.props.callbackFromParent();
          }
          else{
              self.animate7();
          }
          clearInterval(sixthInterval);
        }
        this.setState({ progress6 :progress6});
      }, TIME_FOR_EACH_SLIDE); 
  }
  animate7() {
    let progress7 = 0;
    console.log("animating 7");
    this.setState({ progress7:0 });
    var self=this;
    self.setState({
      activeImage:this.props.imagesArr[6],
      activeIndex:7
    });
    if(this.props.imagesArr.length==7){
      self.setState({
        readLink:true
      });
    }
     seventhInterval=setInterval(() => {
      if(isPaused==false)
        progress7+= 1 / 50;
        //console.log("");
        if (progress7 > 1) {
          progress7 = 1;
          if(this.props.imagesArr.length==7){
            self.resetSlider();
            self.props.callbackFromParent();
          }
          else{
              self.animate8();
          }
          clearInterval(seventhInterval);
        }
        this.setState({ progress7 :progress7});
      }, TIME_FOR_EACH_SLIDE); 
  }
  animate8() {
    let progress8 = 0;
    console.log("animating 8");
    this.setState({ progress8:0 });
    var self=this;
    self.setState({
      activeImage:this.props.imagesArr[7],
      activeIndex:8
    });
    if(this.props.imagesArr.length==8){
      self.setState({
        readLink:true
      });
    }
     eightInterval=setInterval(() => {
      if(isPaused==false)
        progress8+= 1 / 50;
        //console.log("");
        if (progress8 > 1) {
          progress8 = 1;
          if(this.props.imagesArr.length==8){
            self.resetSlider();
            self.props.callbackFromParent();
          }
          else{
              self.animate9();
          }
          clearInterval(eightInterval);
        }
        this.setState({ progress8 :progress8});
      }, TIME_FOR_EACH_SLIDE); 
  }
  animate9() {
    let progress9 = 0;
    console.log("animating 9");
    this.setState({ progress9:0 });
    var self=this;
    self.setState({
      activeImage:this.props.imagesArr[8],
      activeIndex:9
    });
    if(this.props.imagesArr.length==9){
      self.setState({
        readLink:true
      });
    }
     ninethInterval=setInterval(() => {
      if(isPaused==false)
        progress9+= 1 / 50;
        //console.log("");
        if (progress9 > 1) {
          progress9 = 1;
          if(this.props.imagesArr.length==9){
            self.resetSlider();
            self.props.callbackFromParent();
          }
          else{
              self.animate10();
          }
          clearInterval(ninethInterval);
        }
        this.setState({ progress9 :progress9});
      }, TIME_FOR_EACH_SLIDE); 
  }
  animate10() {
    let progress10 = 0;
    console.log("animating 10");
    this.setState({ progress10:0 });
    var self=this;
    self.setState({
      activeImage:this.props.imagesArr[9],
      activeIndex:10
    });
    if(this.props.imagesArr.length==10){
      self.setState({
        readLink:true
      });
    }
     tenthInterval=setInterval(() => {
      if(isPaused==false)
        progress10+= 1 / 50;
        //console.log("");
        if (progress10 > 1) {
          progress10 = 1;
          if(this.props.imagesArr.length==10){
            self.resetSlider();
            self.props.callbackFromParent();
          }
          else{
              self.animate11();
          }
          clearInterval(tenthInterval);
        }
        this.setState({ progress10 :progress10});
      }, TIME_FOR_EACH_SLIDE); 
  }
  animate11() {
    let progress11 = 0;
    console.log("animating 11");
    this.setState({ progress11:0 });
    var self=this;
    self.setState({
      activeImage:this.props.imagesArr[10],
      activeIndex:11
    });
    if(this.props.imagesArr.length==11){
      self.setState({
        readLink:true
      });
    }
     eleventhInterval=setInterval(() => {
      if(isPaused==false)
        progress11+= 1 / 50;
        //console.log("");
        if (progress11 > 1) {
          progress11 = 1;
          if(this.props.imagesArr.length==11){
            self.resetSlider();
            self.props.callbackFromParent();
          }
          else{
              self.animate12();
          }
          clearInterval(eleventhInterval);
        }
        this.setState({ progress11 :progress11});
      }, TIME_FOR_EACH_SLIDE); 
  }
  animate12() {
    let progress12 = 0;
    console.log("animating 12");
    this.setState({ progress12:0 });
    var self=this;
    self.setState({
      activeImage:this.props.imagesArr[11],
      activeIndex:12
    });
    if(this.props.imagesArr.length==12){
      self.setState({
        readLink:true
      });
    }
     twelvthInterval=setInterval(() => {
      if(isPaused==false)
      progress12+= 1 / 50;
        //console.log("");
        if (progress12 > 1) {
            progress12 = 0;
          if(this.props.imagesArr.length==12){
            self.resetSlider();
            self.props.callbackFromParent();
          }
          else{
              self.animate13();
          }
          clearInterval(twelvthInterval);
        }
        this.setState({ progress12 :progress12});
      }, TIME_FOR_EACH_SLIDE); 
  }
  animate13() {
    let progress13 = 0;
    console.log("animating 13");
    this.setState({ progress13:0 });
    var self=this;
    self.setState({
      activeImage:this.props.imagesArr[12],
      activeIndex:13
    });
    if(this.props.imagesArr.length==13){
      self.setState({
        readLink:true
      });
    }
     thirteenthInterval=setInterval(() => {
      if(isPaused==false)
        progress13+= 1 / 50;
        //console.log("");
        if (progress13 > 1) {
          progress13 = 1;
          if(this.props.imagesArr.length==13){
            self.resetSlider();
            self.props.callbackFromParent();
          }
          else{
              self.animate14();
          }
          clearInterval(thirteenthInterval);
        }
        this.setState({ progress13 :progress13});
      }, TIME_FOR_EACH_SLIDE); 
  }
  animate14() {
    let progress14 = 0;
    console.log("animating 14");
    this.setState({ progress14:0 });
    var self=this;
    self.setState({
      activeImage:this.props.imagesArr[13],
      activeIndex:14
    });
    if(this.props.imagesArr.length==14){
      self.setState({
        readLink:true
      });
    }
     fourteenthInterval=setInterval(() => {
      if(isPaused==false)
        progress14+= 1 / 50;
        //console.log("");
        if (progress14 > 1) {
          progress14 = 1;
          if(this.props.imagesArr.length==14){
            self.resetSlider();
            self.props.callbackFromParent();
          }
          else{
              self.animate15();
          }
          clearInterval(fourteenthInterval);
        }
        this.setState({ progress14 :progress14});
      }, TIME_FOR_EACH_SLIDE); 
  }
  animate15() {
    let progress15 = 0;
    console.log("animating 15");
    this.setState({ progress15:0 });
    var self=this;
    self.setState({
      activeImage:this.props.imagesArr[14],
      activeIndex:15
    });
    if(this.props.imagesArr.length==15){
      self.setState({
        readLink:true
      });
    }
     fifteenthInterval=setInterval(() => {
      if(isPaused==false)
        progress15+= 1 / 50;
        //console.log("");
        if (progress15 > 1) {
          progress15 = 0;
          if(this.props.imagesArr.length==15){
            self.resetSlider();
            self.props.callbackFromParent();
          }
          else{
              // no further animation supported
          }
          clearInterval(fifteenthInterval);
        }
        this.setState({ progress15 :progress15});
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
        case 6:
          clearInterval(sixthInterval);
          this.setState({
            progress6:0
          });
          this.animate5();
        break;
        case 7:
          clearInterval(seventhInterval);
          this.setState({
            progress7:0
          });
          this.animate6();
        break;
        case 8:
          clearInterval(eightInterval);
          this.setState({
            progress8:0
          });
          this.animate7();
        break;
        case 9:
          clearInterval(ninethInterval);
          this.setState({
            progress9:0
          });
          this.animate8();
        break;
        case 10:
          clearInterval(tenthInterval);
          this.setState({
            progress10:0
          });
          this.animate9();
        break;
        case 11:
          clearInterval(eleventhInterval);
          this.setState({
            progress11:0
          });
          this.animate10();
        break;
        case 12:
          clearInterval(twelvthInterval);
          this.setState({
            progress12:0
          });
          this.animate11();
        break;
        case 13:
          clearInterval(thirteenthInterval);
          this.setState({
            progress13:0
          });
          this.animate12();
        break;
        case 14:
          clearInterval(fourteenthInterval);
          this.setState({
            progress14:0
          });
          this.animate13();
        break;
        case 15:
          clearInterval(fifteenthInterval);
          this.setState({
            progress15:0
          });
          this.animate14();
        break;
        default:
        break;
      }
    }
  }

  slideForward(){
    if(this.state.activeIndex!=this.props.imagesArr.length){
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
        case 5:
          clearInterval(fifthInterval);
          this.setState({
            progress5:1
          });
          this.animate6();
        break;
        case 6:
          clearInterval(sixthInterval);
          this.setState({
            progress6:1
          });
          this.animate7();
        break;
        case 7:
          clearInterval(seventhInterval);
          this.setState({
            progress7:1
          });
          this.animate8();
        break;
        case 8:
          clearInterval(eightInterval);
          this.setState({
            progress8:1
          });
          this.animate9();
        break;
        case 9:
          clearInterval(ninethInterval);
          this.setState({
            progress9:1
          });
          this.animate10();
        break;
        case 10:
          clearInterval(tenthInterval);
          this.setState({
            progress10:1
          });
          this.animate11();
        break;
        case 11:
          clearInterval(eleventhInterval);
          this.setState({
            progress11:1
          });
          this.animate12();
        break;
        case 12:
          clearInterval(twelvthInterval);
          this.setState({
            progress12:1
          });
          this.animate13();
        break;
        case 13:
          clearInterval(thirteenthInterval);
          this.setState({
            progress13:1
          });
          this.animate14();
        break;
        case 14:
          clearInterval(fourteenthInterval);
          this.setState({
            progress14:1
          });
          this.animate15();
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

      if(pressDuration>LONG_PRESS_TRESHOLD){
        //Alert.alert("hey");
        isPaused=true
      }
        pressDuration+=20;
    },20);
  }

  decideTimerFate(action){
    //Alert.alert("heyy");
    isPaused=false
    clearInterval(press);
    if(pressDuration<LONG_PRESS_TRESHOLD){
      if(action=='b')
      this.slideBack();
      if(action=='f')
      this.slideForward();
    }
    pressDuration=0;
    
  }


  componentDidMount(){
      console.log(this.props.imagesArr);
      this.startSlideShow();
  }

  componentWillUnmount(){
      this.resetSlider();
  }


  render() {
    
    var progressbarWidth=50;
    return (
        <View style={{flex:1,backgroundColor:'#ccc',padding:isPaused==true?30:0,height:500}}>
          {/* <ImageBackground style={{flex:1}}  source={this.state.activeImage==1?require('./resources/img/1.jpg'):this.state.activeImage==2?require('./resources/img/2.jpg'):this.state.activeImage==3?require('./resources/img/3.jpg'):this.state.activeImage==4?require('./resources/img/4.jpg'):require('./resources/img/2.jpg')} > */}
          <Image style={{flex:1}} source={{uri:this.state.activeImage}}/>
          <View style={{position:'absolute',left:0,top:0,bottom:0,right:0}}>
          {
            isPaused==false &&
            <View style={{flex:1,paddingLeft:(17),flexDirection:'row',alignItems:'center'}}>
              <Image style={{height:((deviceHeight*0.8)/10),width:((deviceHeight*0.8)/10),marginRight:(5),borderRadius:((deviceHeight*0.8)/10)}} resizeMode="contain" source={{uri:"https://cdn.dribbble.com/users/223408/screenshots/2134810/me-dribbble-size-001-001_1x.png"}}/>
              <Text style={{color:'#fff',fontWeight:'bold',fontSize:(14),textAlignVertical:'center',paddingLeft:(10)}}>Avinash Solanki</Text>
            </View>
          }
            <View style={{flex:9,flexDirection:'column'}}>
              <View style={{flex:8}}>
              <View style={{flex:1}}>
                   {
              this.state.readLink && isPaused==false &&
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
                this.props.imagesArr.length>0 &&
                <ProgressBarAndroid 
                styleAttr="Horizontal" 
                height={2}
                animating={true}
                width={this.props.progressWidth}
                color="#fff"
                indeterminate={false} 
                progress={this.state.progress}
              />
              }
              {
                this.props.imagesArr.length>1 &&
                <ProgressBarAndroid 
                styleAttr="Horizontal" 
                height={2}
                animating={true}
                width={this.props.progressWidth}
                color="#fff"
                indeterminate={false} 
                progress={this.state.progress2}
                />
              }
              {
                this.props.imagesArr.length>2 &&
                <ProgressBarAndroid 
                styleAttr="Horizontal" 
                height={2}
                animating={true}
                width={this.props.progressWidth}
                color="#fff"
                indeterminate={false} 
                progress={this.state.progress3}
                />
              }
              {
                this.props.imagesArr.length>3 &&
                <ProgressBarAndroid 
                styleAttr="Horizontal" 
                height={2}
                animating={true}
                width={this.props.progressWidth}
                color="#fff"
                indeterminate={false} 
                progress={this.state.progress4}
                />
              }
              {
                this.props.imagesArr.length>4 &&
                <ProgressBarAndroid 
                styleAttr="Horizontal" 
                height={2}
                animating={true}
                width={this.props.progressWidth}
                color="#fff"
                indeterminate={false} 
                progress={this.state.progress5}
                /> 
              }
              {
                this.props.imagesArr.length>5 &&
                <ProgressBarAndroid 
                styleAttr="Horizontal" 
                height={2}
                animating={true}
                width={this.props.progressWidth}
                color="#fff"
                indeterminate={false} 
                progress={this.state.progress6}
                /> 
              }
              {
                this.props.imagesArr.length>6 &&
                <ProgressBarAndroid 
                styleAttr="Horizontal" 
                height={2}
                animating={true}
                width={this.props.progressWidth}
                color="#fff"
                indeterminate={false} 
                progress={this.state.progress7}
                /> 
              }
              {
                this.props.imagesArr.length>7 &&
                <ProgressBarAndroid 
                styleAttr="Horizontal" 
                height={2}
                animating={true}
                width={this.props.progressWidth}
                color="#fff"
                indeterminate={false} 
                progress={this.state.progress8}
                /> 
              }
              {
                this.props.imagesArr.length>8 &&
                <ProgressBarAndroid 
                styleAttr="Horizontal" 
                height={2}
                animating={true}
                width={this.props.progressWidth}
                color="#fff"
                indeterminate={false} 
                progress={this.state.progress9}
                /> 
              }
              {
                this.props.imagesArr.length>9 &&
                <ProgressBarAndroid 
                styleAttr="Horizontal" 
                height={2}
                animating={true}
                width={this.props.progressWidth}
                color="#fff"
                indeterminate={false} 
                progress={this.state.progress10}
                /> 
              }
              {
                this.props.imagesArr.length>10 &&
                <ProgressBarAndroid 
                styleAttr="Horizontal" 
                height={2}
                animating={true}
                width={this.props.progressWidth}
                color="#fff"
                indeterminate={false} 
                progress={this.state.progress11}
                /> 
              }
              {
                this.props.imagesArr.length>11 &&
                <ProgressBarAndroid 
                styleAttr="Horizontal" 
                height={2}
                animating={true}
                width={this.props.progressWidth}
                color="#fff"
                indeterminate={false} 
                progress={this.state.progress12}
                /> 
              }
              {
                this.props.imagesArr.length>12 &&
                <ProgressBarAndroid 
                styleAttr="Horizontal" 
                height={2}
                animating={true}
                width={this.props.progressWidth}
                color="#fff"
                indeterminate={false} 
                progress={this.state.progress13}
                /> 
              }
              {
                this.props.imagesArr.length>13 &&
                <ProgressBarAndroid 
                styleAttr="Horizontal" 
                height={2}
                animating={true}
                width={this.props.progressWidth}
                color="#fff"
                indeterminate={false} 
                progress={this.state.progress14}
                /> 
              }
              {
                this.props.imagesArr.length>14 &&
                <ProgressBarAndroid 
                styleAttr="Horizontal" 
                height={2}
                animating={true}
                width={this.props.progressWidth}
                color="#fff"
                indeterminate={false} 
                progress={this.state.progress15}
                /> 
              }
            </View>
            }
            </View>
          </View>
        
        </View>
       
    );
  }
}
export default Stories;