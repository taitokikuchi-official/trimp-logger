import styled from 'styled-components'
import icon_cal from '../../icons/icon_cal.svg'
import icon_trash from '../../icons/icon_trash.svg'

export const InputLogInner = styled('section')`
    width: 100%;
    height: 100%;
`
// Infomation header
export const InputInfoContents = styled('header')`
    width: 100%;
    height: 70px;
    display: flex;
    padding: 10px;
    >div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding-left: 10px;
    }
    span {
        display: block;
        text-align: left;
}
`
export const DateSelectButton = styled('button')`
    width: 48px;
    height: 48px;
    background-color: #f3f3f3;
    border-radius: 50%;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    ::before {
        width: 20px;
        height: 20px;
        content: "";
        display: block;
        position: absolute;
        background-color: #2e2e2e;
        mask-size: contain;
        mask-repeat: no-repeat;
        mask-position: center;
        mask-image: url(${icon_cal});
    }
`
export const InputInfoBasic = styled('p')`
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    font-size: 12px;
    >span{
        width: 100%;
        :nth-child(2) {
            font-weight: bold;
            font-size: 18px;
        }
    }
`
export const InputInfoTrimp = styled('p')`
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    font-size: 11px;
    >span{
        width: 100%;
        :nth-child(2) {
            font-weight: bold;
            font-size: 28px;
            color: #ddc700;
        }
    }
`

// Log list
export const InputLogList = styled('div')`
    width: 100%;
    height: calc(100% - 70px);
    overflow-x: hidden;
    /* TODO: formが開いている時はhidden */
    overflow-y: scroll;
`
export const InputCardContainer = styled('li')`
    width: 100%;
    height: auto;
    margin-bottom: 2px;
    :last-child{
        margin-bottom: 0;
    }
    form {
        /* TODO: card headerがクリックされたらblock */
        display: none;
        width: 100%;
        height: calc(100vh - 250px);
        padding: 20px 5px 20px 10px;
        background-color: #434343;
        margin-top: 2px;
        overflow-y: scroll;
        ::-webkit-scrollbar{
            width: 10px;
        }
        ::-webkit-scrollbar-thumb{
            background: #666;
        }
    }
`
// session cassette
export const InputCardHeader = styled('div')`
    width: 100%;
    height: 60px;
    padding: 10px;
    background-color: #531ab6;
    display: flex;
    position: relative;
    /* TODO: swipeされたらright: 65pxに */
    >div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        overflow: hidden;
    }
    ::before {
        position: absolute;
        content: "";
        width: 64px;
        height: 60px;
        background-color: #ff0000;
        opacity: .5;
        top: 0;
        right: -64px;
    }
    ::after {
        position: absolute;
        top: calc((60px - 20px) / 2);
        right: calc((64px - 20px) * -1);
        content: "";
        width: 20px;
        height: 20px;
        background-color: #d9d9d9;
        mask-size: contain;
        mask-repeat: no-repeat;
        mask-position: center;
        mask-image: url(${icon_trash})

    }
`
export const CardIcon = styled('p')`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    margin-right: 10px;
    background-color: #d9d9d9;
    >img {
        width: 60%;
    }
`
export const CardSummary = styled('p')`
    width: 75%;
    font-size: 12px;
    text-align: left;
    margin-right: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    >span {
        display: block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        :first-child {
            font-weight: bold;
        }
    }
`
export const CardTrimp = styled('p')`
    font-size: 20px;
    font-weight: bold;
`
export const AddCardButton = styled('button')`
    margin-top: 10px;
    font-size: 14px;
    color: #7d7d7d;
    >span {
        display: inline-block;
        width: 24px;
        height: 24px;
        border: solid 2px #7d7d7d;
        border-radius: 50%;
        font-weight: bold;
        margin-right: 10px;
    }
`