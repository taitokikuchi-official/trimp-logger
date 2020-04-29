import React from 'react'
import { Context } from '../../context'
import InputInfoHeader from './InputInfoHeader'
import InputCard from './InputCard'
import { InputLogInner, InputLogList, AddCardButton } from './Style'

const InputLog = () => {
  const { state }:any = Context()
  const list = state.currentSession.contents
  const contents = list.map((content:any, i:number) => (
    <InputCard key={i} content={content}></InputCard>
  ))
  return (
    <InputLogInner>
      <InputInfoHeader></InputInfoHeader>
      <InputLogList>
        <ul>
          {contents}
        </ul>
        <AddCardButton><span>+</span>Add new workout</AddCardButton>
      </InputLogList>
    </InputLogInner>
  )
}

export default InputLog