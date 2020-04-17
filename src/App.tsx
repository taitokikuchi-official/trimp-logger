import React from 'react'
import './scss/App.scss'
import TopMenuBar from './components/common/TopMenuBar'
import MultiActionBar from './components/common/MultiActionBar'

const App = () => {
  return (
    <div className="App">
      <TopMenuBar></TopMenuBar>
      <section>main console</section>
      <MultiActionBar></MultiActionBar>
    </div>
  )
}

export default App;
