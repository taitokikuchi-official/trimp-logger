import React from 'react'
import { Context } from '../../context'
import { TopMenuContainer, TopMenuButtonList, TopMenuButton } from './style'

const TopMenuBar = () => {
    const { state, setState }:any = Context()
    const changeDisplay = (display:string) => {
        if(display === "inputLog") {
            setState((prevState:any) => ({ ...prevState, inputLog: true, viewLog: false, heartRate: false, currentDisplay: "inputLog" }))
        }
        if(display === "viewLog") {
            setState((prevState:any) => ({ ...prevState, inputLog: false, viewLog: true, heartRate: false, currentDisplay: "viewLog" }))
        }
        if(display === "heartRate") {
            setState((prevState:any) => ({ ...prevState, inputLog: false, viewLog: false, heartRate: true, currentDisplay: "heartRate" }))
        }
    }
    const backGround:string = state.currentDisplay 

    return (
        <TopMenuContainer>
            <TopMenuButtonList>
                <TopMenuButton onClick={()=> changeDisplay('inputLog')} backGround={backGround}></TopMenuButton>
                <TopMenuButton onClick={()=> changeDisplay('viewLog')} backGround={backGround}></TopMenuButton>
                <TopMenuButton onClick={()=> changeDisplay('heartRate')} backGround={backGround}></TopMenuButton>
            </TopMenuButtonList>
        </TopMenuContainer>
    )    
}

export default TopMenuBar