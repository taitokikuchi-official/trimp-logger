import React from 'react'
import './scss/App.scss'
import TopMenuBar from './components/common/TopMenuBar'
import MultiActionBar from './components/common/MultiActionBar'
import ViewLog from './components/ViewLog'
import InputLog from './components/InputLog'
import HeartRate from './components/HeartRate'

const App = () => {
  return (
    <div className="App">
      <TopMenuBar></TopMenuBar>
      <div className="App__main-view">
        <ViewLog></ViewLog>
        <InputLog></InputLog>
        <HeartRate></HeartRate>
      </div>
      <MultiActionBar></MultiActionBar>
    </div>
  )
}

export default App;
