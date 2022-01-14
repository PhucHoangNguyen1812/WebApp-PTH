import React from 'react'
import styled from 'styled-components';
import playStore from "../../../assets/images/playstore.png"
import appStore from "../../../assets/images/appstore.png"
import tw from 'twin.macro';


const MainFooter = styled.footer`
    ${tw`
        mt-40
        p-4
        background-color[#25C6DA]
        color[white]
        flex
        items-center
    `}
`;


const LeftFooter = styled.div`
    ${tw`
        w-1/5
        flex
        flex-col
        items-center
        my-3
    `}
    h4 {
        font-family: "Roboto";
        margin: 0.5vmax;
        font-size:1vmax;
    }
    p {
        text-align:center;
        font-family: "Lucida Sans", "Lucida Sans Regular", 
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
        margin: 0.5vmax;
        font-size: 1.2vmax;
        
    }
    img{
        width:10vmax;
        margin: 1vmax;
        cursor: pointer;
    }
`;

const MidFooter = styled.div`
    ${tw`
        w-3/5
        text-center
    `}
    h1 {
        font-size:4vmax;
        font-family: "Roboto";
        margin: 0.5vmax;
        color: crimson;
    }
    p {
        max-width: 60%;
        margin: 1vmax auto;
        font-family: "Gill Sans", "Gill Sans MT",Calibri,"Trebuchet MS", san-serif;
    }
`;

const RightFooter = styled.div`
    ${tw`
        w-1/5
        flex
        flex-col
        items-center
        mb-12
    `}
    h4{
        font-size: 1.4vmax;
        font-family: "Roboto";
        text-decoration:underline;
        margin-bottom:2vmax
    }
    a{
        font-size: 1.3vmax;
        font-family: "Gill Sans", "Gill Sans MT", Calibri,"Trebuchet MS", san-serif;
        color: white;
        transition: all 0.5s;
        margin: 0.5vmax;
    }
    a:hover {
        color:pink;
    }
`;

export default function Footer() { 
    return <MainFooter>
        <LeftFooter>
            <h4> APP TẢI XUỐNG </h4>
            <p>Tải App cho các thiết bị điện thoại Android và IOS </p>
            <img src={playStore} alt="playstore"/>
            <img src={appStore} alt="appstore" />
        </LeftFooter>
        <MidFooter>
            <h1>PTHSHOPER</h1>
            <p>Chất Lượng Cao là sự ưu tiên hàng đầu của chúng tôi</p>
            <p>Copyright 2022 &copy; PhucMalik</p>
        </MidFooter>
        <RightFooter>
            <h4>Follow Us</h4>
            <a href="https://www.facebook.com/malik.phuc.9">FaceBook</a>
            <a href="https://www.linkedin.com/in/phuchoang009/">Linkedin</a>
        </RightFooter>
    </MainFooter>


    
}
