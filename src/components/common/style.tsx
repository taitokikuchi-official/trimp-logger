import styled from 'styled-components'
import icon_inputlog from '../../icons/icon_inputlog.svg'
import icon_viewlog from '../../icons/icon_viewlog.svg'
import icon_hr from '../../icons/icon_hr.svg'

// top menu
export const TopMenuContainer = styled('header')`
    position: absolute;
    z-index: 2;
    top: 0;
    width: 100%;
`
export const TopMenuButton = styled('ul')`
    display: flex;
    height: 60px;
    >li {
        width: calc(100% / 3);
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        ::before {
            width: 24px;
            height: 24px;
            content: "";
            display: block;
            background-color: #fff;
            mask-size: contain;
            mask-repeat: no-repeat;
            mask-position: center;
        }
        :first-child {
            ::before {
                mask-image: url(${icon_inputlog});
            }
        }
        :nth-child(2) {
            ::before {
                mask-image: url(${icon_viewlog});
            }
        }
        :nth-child(3) {
            ::before {
                mask-image: url(${icon_hr});
            }
        }
    } 
`

//bottom action bar
export const BarContainer = styled('footer')`
    position: absolute;
    z-index: 2;
    bottom: 0;
    width: 100%;
`