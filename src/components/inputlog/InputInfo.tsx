import React from 'react'
import {InputInfoContents, DateSelectButton, InputInfoBasic, InputInfoTrimp} from './Style'

const InputInfoHeader = () => {
  return (
    <InputInfoContents>
        {/* TODO: clickでcalender */}
        <DateSelectButton></DateSelectButton>
        <div>
            <InputInfoBasic>
                {/* TODO: state流し込み */}
                <span>[2020/12/12]</span>
                <span>[SESSION1]</span>
            </InputInfoBasic>
            <InputInfoTrimp>
                <span>total</span>
                {/* TODO: state流し込み */}
                <span>[1080]</span>
            </InputInfoTrimp>
        </div>
    </InputInfoContents>
  )
}

export default InputInfoHeader