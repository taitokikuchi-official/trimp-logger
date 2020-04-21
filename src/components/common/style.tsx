import styled from 'styled-components'
import icon_inputlog from '../../icons/icon_inputlog.svg'
import icon_viewlog from '../../icons/icon_viewlog.svg'
import icon_hr from '../../icons/icon_hr.svg'
import icon_arrow_right from '../../icons/icon_arrow_right.svg'
import icon_arrow_left from '../../icons/icon_arrow_left.svg'

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
    background-color: #000;
    >li {
        width: calc(100% / 3);
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        ::before {
            width: 20px;
            height: 20px;
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
export const MultiActionButton = styled('ul')`
    display: flex;
    height: 60px;
    >li {
        width: calc(100% / 4);
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        ::before {
            width: 20px;
            height: 20px;
            content: "";
            display: block;
            background-color: #fff;
            mask-size: contain;
            mask-repeat: no-repeat;
            mask-position: center;
        }
        :first-child {
            ::before {
                mask-image: url(${icon_arrow_left});
            }
        }
        :last-child {
            ::before {
                mask-image: url(${icon_arrow_right});
            }
        }
}
`