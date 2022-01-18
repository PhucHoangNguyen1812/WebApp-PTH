import React, { Fragment,useEffect,useState } from 'react'
import styled from 'styled-components'
import {CgMouse}  from "react-icons/all"
import tw from 'twin.macro';
import {Product} from "./Product";
import { IStack } from '../../../typings/product';
import {SCREENS} from "../../components/responsive";
import  img from"../../../assets/images/hoaban.jpg";
import  img1 from "../../../assets/images/hoa.jpg";
import {MetaData} from '../layout/MetaData';
import { getProduct } from '../../../actions/productAction';
import { useSelector, useDispatch } from 'react-redux';
import reducer  from '../../../store'; 
import { RootStore } from '../../../store';

const Banner = styled.div`
    background-image: url(${img1});
    background-color: rgb(96 165 250); 
    background-repeat: no-repeat; 
    background-attachment: fixed;
    background-size: 100% 100%;
    object-fit: cover;
    ${tw`
        //bg-gradient-to-r  from-blue-400 to-blue-700
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
    a > ButtonHome {
        background-color: rgba(2);
    }
    ::after {
        content: "";
        width: 100vw;
        height: 100vmin;
        background-color: #ffffff;
        position: absolute;
        top:0%;
        left:0;
        clip-path: polygon(50% 70%, 0% 100%, 100% 100%);
        max-width: 100%;
        @media screen and (max-width: ${SCREENS.sm}) {
            position: absolute;
            top:54%;
        }
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
    width:9vmax;
    height: 4vmax;
    font: 500 1vmax "Roboto";
    color: black;
    &:hover {
        ${tw`
            bg-blue-500
            text-white
        `}
    }
    
`;

const DivIcon = styled.div`
    ${tw`
        relative
        top[1px]
        flex
        flex-row
        height[2vmax]
        text-center
        items-center
        justify-center

    `}

`;

const HomeHeading = styled.h2`
    border-bottom: 1px solid rgba(59 130 246);
    width: 20vmax;
    padding: 1vmax;
    margin: 5vmax auto;
    ${tw`
        text-center
        font-family[Roboto]
        font-size[1.4vmax]
        text-gray-700
        
    `}
`;

const Container = styled.div`
    margin: 2vmax auto;
    width: 80vw;
    ${tw`
        flex
        flex-wrap  
        justify-center
    `};
    
`;

export function Home() {

    const dispatch = useDispatch();
    const [productName, setProductName] = useState("");
    const product: IStack = {
        name: "Áo sơ mi xanh",
        image: img,
        price:"300.000đ",
        _id: 1,
    };

    const productState = useSelector((state: RootStore) => state.product)

    useEffect(() => {
        dispatch( getProduct(productName));
    }, [dispatch])

    return <Fragment>

        <MetaData title = "PTHFLOWER"/>

        <Banner>
            <p>Chào Mừng Đến Với PTHSHOPER</p>
            <h1>NHỮNG SẢN PHẨM THÚ VỊ ĐANG ĐỢI BẠN</h1>
            <ContainerHome href='#container'>
                <ButtonHome>
                    <DivIcon>
                        <p>Cuộn</p>
                        <CgMouse size={25}/>
                    </DivIcon>
                </ButtonHome>  
            </ContainerHome>
        </Banner>
        <HomeHeading>Các Sản Phẩm Hiện Tại</HomeHeading>
        <Container className="container" id="container">
            <Product {...product} />
            <Product {...product} />
            <Product {...product} />
            <Product {...product} />
            <Product {...product} />
            <Product {...product} />
            <Product {...product} />
            <Product {...product} />
        </Container>
    </Fragment>
    
};
