import React from 'react'
import '../scss/App.scss'
import { Context } from '../context'
import ViewLog from './ViewLog'
import InputLog from './InputLog'
import HeartRate from './HeartRate'

const MainView = () => {
    const { state, setState }:any = Context()
    console.log(setState)
    return (
        <div className="App__main-view">
            {state.inputLog && <InputLog></InputLog>}
            {state.viewLog && <ViewLog></ViewLog>}
            {state.heartRate && <HeartRate></HeartRate>}
        </div>
    )
}

export default MainView