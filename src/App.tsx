import React, { useState } from 'react'
import './scss/App.scss'
import { ContextObject } from './context'
import TopMenuBar from './components/common/TopMenuBar'
import MultiActionBar from './components/common/MultiActionBar'
import MainView from './components/MainView'

interface State {
  inputLog : boolean
  viewLog: boolean
  heartRate: boolean
  currentDisplay : string
}
const initialState: State = {
  inputLog : false,
  viewLog: false,
  heartRate: false,
  currentDisplay: ""
}

const App = () => {
    const [state, setState] = useState(initialState)
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
