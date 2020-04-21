import React from 'react'
import InputInfoHeader from './InputInfo'
import InputCard from './InputCard'
import { InputLogInner, InputLogList, AddCardButton } from './Style'

const InputLog = () => {
  return (
    <InputLogInner>
      <InputInfoHeader></InputInfoHeader>
      <InputLogList>
        <ul>
          {/* TODO: state確認してない場合は初期表示、ある場合はそれを表示 */}
          <InputCard></InputCard>
          {/* TODO: static sample デザイン反映終わったら消す */}
          <InputCard></InputCard>
        </ul>
        <AddCardButton><span>+</span>Add new workout</AddCardButton>
      </InputLogList>
    </InputLogInner>
  )
}

export default InputLog