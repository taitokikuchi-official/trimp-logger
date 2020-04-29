import React from 'react'
import Calendar from '../common/Calendar'
import { Context } from '../../context'
import {InputInfoContents, DateSelectButton, InputInfoBasic, InputInfoTrimp} from './Style'

const InputInfoHeader = () => {
  const { state }:any = Context()
  return (
    <InputInfoContents>
        <DateSelectButton>
          <Calendar></Calendar>
        </DateSelectButton>
        <div>
            <InputInfoBasic>
                <span>{state.currentDate}</span>
                <span>{state.currentSession.name}</span>
            </InputInfoBasic>
            <InputInfoTrimp>
                <span>total</span>
                <span>{state.currentSession.totalTrimp}</span>
            </InputInfoTrimp>
        </div>
    </InputInfoContents>
  )
}

export default InputInfoHeader