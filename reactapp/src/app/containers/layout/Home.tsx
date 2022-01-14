import React, { Fragment } from 'react'
import styled from 'styled-components'
import {CgMouse}  from "react-icons/all"
import tw from 'twin.macro';

const Banner = styled.div`
    ${tw`
        bg-gradient-to-r  from-blue-400 to-blue-700
        h-screen
        text-center
        flex
        flex-col
        items-center
        justify-center
        color[white]

    `}
    h1 {
        margin: 5vmax;
        font: 600 2.5vmax "Roboto";
    }
    p {
        font: 300 1.4vmax "Lucida Sans"
    }
`;
const ContainerHome = styled.a`

`; 

const ButtonHome = styled.button`
    margin-bottom: 5vmax;
    cursor: pointer;
    background-color: white;
    border: 1px solid white;
    border-radius: 200vmax;
    padding: 0 0 0.2vmax 0;
    transition: all 0.5s;
    width:10vmax;
    height: 4.5vmax;
    font: 500 1vmax "Roboto";
    color: black;

`;

const DivIcon = styled.div`
    ${tw`
        flex
        flex-row
        height[1vmax]
        text-center
        items-center
        justify-center
    `}

`;

export default function Home() {
    return <Fragment>
        <Banner>
            <p>Chào Mừng Đến Với PTHSHOPER</p>
            <h1>Những Sản Phẩm Thú Vị Đang Đợi Bạn</h1>
            <ContainerHome href='#container'>
                <ButtonHome>
                    <DivIcon>
                        <p>Cuộn</p>
                        <CgMouse size={30}/>
                    </DivIcon>
                </ButtonHome>  
            </ContainerHome>
        </Banner>
    </Fragment>
    
};
