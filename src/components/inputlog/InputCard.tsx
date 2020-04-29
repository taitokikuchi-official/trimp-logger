import React from 'react'
import InputForm from './InputForm'
import { InputCardContainer, InputCardHeader, CardIcon, CardSummary, CardTrimp } from './Style'
import Icon_boat from '../../icons/icon_boat.svg'
import Icon_athletic from '../../icons/icon_athletic.svg'
import Icon_gym from '../../icons/icon_gym.svg'

const InputCard = (props:any) => {
    const workout = props.content
    let icon
    switch(workout.type){
    　case 1:
        icon = Icon_boat
    　　break
    　case 2:
        icon = Icon_athletic
    　　break
    　case 3:
        icon = Icon_gym
    　　break
    }
    
    console.log('test=', workout)
    return (
        <InputCardContainer>
            <InputCardHeader>
                {/* TODO: パスのファイル名部分にuseridをstateで流し込み(user画像はuseridをファイル名にして外部に格納) */}
                <CardIcon><img src={icon} alt=""/></CardIcon>
                <div>
                    <CardSummary>
                        {/* TODO: state流し込み */}
                        <span>[水上] [90min] [LSD]</span>
                        <span>[詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細]</span>
                    </CardSummary>
                    <CardTrimp>[360]</CardTrimp>
                </div>                
            </InputCardHeader>
            <InputForm></InputForm>
        </InputCardContainer>        
    )
}

export default InputCard