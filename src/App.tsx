import React, { useState } from 'react'
import './scss/App.scss'
import { ContextObject } from './context'
import TopMenuBar from './components/common/TopMenuBar'
import MultiActionBar from './components/common/MultiActionBar'
import MainView from './components/MainView'
import moment from 'moment'

const currentDate:any = moment().format("YYYY/MM/DD")

interface State {
  inputLog : boolean
  viewLog: boolean
  heartRate: boolean
  currentDisplay : string
  currentDate: string
  currentSession: any
}
// STATE: 全体で使うstate
const initialState: State = {
  // 表示系
  inputLog : false,
  viewLog: false,
  heartRate: false,
  currentDisplay: "",
  // 日付
  currentDate: currentDate,
  currentSession: {
    name: "SESSION1",
    date: currentDate,
    totalTrimp: "value", // TODO: calculate
    contents: [{
      trimp: "", // TODO: calculate
      type: 1, // 1:boat, 2:athletic, 3:gym
      subType: null, // null , 1:run, 2:bike, 3:ergo, 4:swim
      method: 1, // 0(only if type = 3:gym), 1:time, 2:interval, 3:distance, 4:other
      time: 90, // null, 1 ~ 480,
      ineterval: [
        {
          on: null, // null, 1~60
          onStrength: null, // null, 1:R5, 2:R4, 3:R3, 4:R2, 5:R1, 6:R1F
          off: null, // null, 1~60
          offStrength: null, // null, 1:R5, 2:R4, 3:R3, 4:R2, 5:R1, 6:R1F
          loop: null, // null, 1~100
          rest: null, // null, 1~60
          set: null, // null, 1~100
        }
      ],
      distance: [
        {
          on: null, // null, 1 ~ 100000
          onPace: null, // null, 1~60 (sec/100m)
          onStrength: null, // null, 1:R5, 2:R4, 3:R3, 4:R2, 5:R1, 6:R1F
          off: null, // null, 1 ~ 100000
          offPace: null, // null, 1~60 (sec/100m)
          offStrength: null, // null, 1:R5, 2:R4, 3:R3, 4:R2, 5:R1, 6:R1F
          loop: null, // null, 1~100
          rest: null, // null, 1~60
          set: null, // null, 1~100
        }
      ],
      other: [
        {
          contents: "", // string
          trimp: null // null, 1 ~
        }
      ],
      gym: [
        {
          time: null,
          strength: null // null, 1: W3 2: W2: 3: W1
        }
      ]
    },
    {
      trimp: "value", // TODO: calculate
      type: 2, // 1:boat, 2:athletic, 3:gym
      subType: 1, // null , 1:run, 2:bike, 3:ergo, 4:swim
      method: 3, // 1:time, 2:interval, 3:distance, 4:other
      time: null, // null, 1 ~ 480,
      ineterval: [
        {
          on: null, // null, 1~60
          onStrength: null, // null, 1:R5, 2:R4, 3:R3, 4:R2, 5:R1, 6:R1F
          off: null, // null, 1~60
          offStrength: null, // null, 1:R5, 2:R4, 3:R3, 4:R2, 5:R1, 6:R1F
          loop: null, // null, 1~100
          rest: null, // null, 1~60
          set: null, // null, 1~100
        }
      ],
      distance: [
        {
          on: 1500, // null, 1 ~ 100000
          onPace: 25, // null, 1~60 (sec/100m)
          onStrength: 3, // null, 1:R5, 2:R4, 3:R3, 4:R2, 5:R1, 6:R1F
          off: null, // null, 1 ~ 100000
          offPace: null, // null, 1~60 (sec/100m)
          offStrength: null, // null, 1:R5, 2:R4, 3:R3, 4:R2, 5:R1, 6:R1F
          loop: null, // null, 1~100
          rest: 2, // null, 1~60
          set: 5, // null, 1~100
        }
      ],
      other: [
        {
          contents: "", // string
          trimp: null // null, 1 ~
        }
      ],
      gym: [
        {
          time: null,
          strength: null // null, 1: W3 2: W2: 3: W1
        }
      ]
    }]
  }
}

const App = () => {
    const [state, setState] = useState(initialState)
    console.log(state)
    // setState((prevState:any) => ({ ...prevState, inputLog: true }))
    return (
    <div className="App">
      <ContextObject.Provider value={{ state, setState }}>
        <TopMenuBar></TopMenuBar>
        <MainView></MainView>
        <MultiActionBar></MultiActionBar>
      </ContextObject.Provider>
    </div>
  )
}

export default App
