import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./Styles.jsx";
import moment from "moment"
import { getTimestamp } from 'react-native-reanimated/lib/reanimated2/core.js';



function Timer ({interval, style}){
  const pad = (n) => n < 10 ? "0" + n : n
  const duration = moment.duration(interval)
  return(
    <View style={{flexDirection:"row"}}>
      <Text style={style}> {pad(duration.hours())}:</Text>
      <Text style={style}> {pad(duration.minutes())}: </Text>
      <Text style={style}> {pad(duration.seconds())}</Text>
    </View>
    )
 }

function RoundButton ({
  title, color, background, onPress, disabled}) {
  return(
    <TouchableOpacity onPress= {()=> !disabled && onPress()} activeOpacity={disabled ? 1.0 : 0.7} style={[styles.button,{ backgroundColor:background }]}>
      <View style={styles.buttonBorder}>
        <Text style={[styles.buttonTitle,{color}]}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
 }

function ButtonsRow({children}){
  return(
    <View style={styles.buttonsRow}>{children}</View>
  )
 }


function Lap({number,interval, fastest, slowest}){
 
  const lapStyle=[
    styles.lapText,
    fastest && styles.fastest,
    slowest && styles.slowest
  ]
  return(
    <View style={styles.lap}>
      <Text style={lapStyle}>Lap {number} </Text>
      <Timer style={[lapStyle, styles.lapTimer]} interval ={interval}/>
    </View>
  )
}

function LapsTable({ laps, timer }){
  const finishedLaps = laps.slice(1)
  let min = Number.MAX_SAFE_INTEGER
  let max = Number.MIN_SAFE_INTEGER
  if (finishedLaps.length >= 2) {
    finishedLaps.forEach(lap => {
      if (lap < min) min = lap
      if (lap > max) max = lap
    })
  }
  return(
    <ScrollView style={styles.scrollView}>
      {laps.map((lap, index)=>(
        <Lap number={laps.length - index} 
        key={laps.length - index}
        interval={index === 0 ? timer + lap : lap} 
        fastest={lap === min}
        slowest={lap === max}
        />
      ))}
    </ScrollView>
  )
}
 
export default class UlazScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      start: 0,
      now:0,
      laps:[  ]
    }
  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }

  start=()=>{
    const now = new Date().getTime()
    this.setState({
      start: now,
      now,
      laps: [0]
    })
    this.timer = setInterval(()=> {
      this.setState({now: new Date().getTime()})
    }, 100)
  }
  lap =()=> {
    const timestamp = new Date().getTime()
    const {laps, now , start}= this.state
    const [firstLap, ...other]= laps
    this.setState({
      laps:[0, firstLap + now - start, ...other],
      start: timestamp,
      now: timestamp
    })
  }


  stop = ()=> {
    clearInterval(this.timer)
    const {laps, now , start}= this.state
    const [firstLap, ...other]= laps
    this.setState({
      laps:[firstLap + now - start, ...other],
      start: 0,
      now: 0
    })
  }

  reset = () => {
    this.setState({
      laps: [],
      start: 0,
      now: 0
        })
  }

  resume = ()=> {
    const now = new Date().getTime()
    this.setState({
      start: now,
      now,
    })
    this.timer = setInterval(()=> {
      this.setState({now: new Date().getTime()})
    }, 100)
  }


  render(){
    const {now, start, laps} = this.state
    const timer = now - start
    return (
      <View style= {styles.timerContainer} >
        <Timer 
        interval={laps.reduce((total, curr) => total + curr , 0) + timer} 
        style={styles.timer}
        />
        {laps.length === 0&& 
          (
            <ButtonsRow>
              <RoundButton 
              title="Break" 
              color ="#8b8b90" 
              background="#151515"
              disabled
              />
              <RoundButton
              title="Start" 
              color ="#fff" 
              background="#f60564"
              onPress= {this.start}
              />
            </ButtonsRow>
          )
      }
      {start > 0 && (
         <ButtonsRow>
         <RoundButton 
          title="Break"
          color ="#fff" 
          background="#3d3d3d"
          onPress ={this.lap}
         />
         <RoundButton
          title="Stop" 
          color ="#e33935" 
          background="#3c1715"
          onPress= {this.stop}
          />
       </ButtonsRow>
      )}
      {laps.length > 0 && start === 0 &&(
         <ButtonsRow>
         <RoundButton 
          title="Reset"
          color ="#fff" 
          background="#3d3d3d"
          onPress ={this.reset}
         />
         <RoundButton
          title="Start" 
          color ="#fff" 
          background="#f60564"
          onPress= {this.resume}
          />
       </ButtonsRow>
      )}
       
        <LapsTable laps={laps} timer={timer}/>
      </View>
    );
  }
};

export { UlazScreen };

