import React from 'react'
import InputForm from './InputForm'
import { InputCardContainer, InputCardHeader, CardIcon, CardSummary, CardTrimp } from './Style'

const InputCard = () => {
    return (
        <InputCardContainer>
            <InputCardHeader>
                {/* TODO: パスのファイル名部分にuseridをstateで流し込み(user画像はuseridをファイル名にして外部に格納) */}
                <CardIcon><img src="https://placehold.jp/200x400.png" alt=""/></CardIcon>
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