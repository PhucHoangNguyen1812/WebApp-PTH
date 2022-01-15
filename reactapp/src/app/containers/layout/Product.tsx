import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import styled from "styled-components";
import { IStack } from "../../../typings/product";
import tw from "twin.macro";
import {SCREENS} from "../../components/responsive"
interface IStackProps extends IStack {

}

const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: 2.5,
    isHalf: true,
};



const ContainerProduct = styled.div`
    
    display: flex;
    flex-direction: row;
    .productCart {
        width: 15vmax;
        color: rgb(48,48,48);
        margin: 2vmax;
        display: flex;
        flex-direction: column;
        text-decoration: none;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
        transition: transform linear 0.1s;
    }
    p {
        font-family: "Roboto";
        font-size:1.2vmax;
        margin: 1vmax 0.5vmax;
        margin-bottom: 0;
        @media screen  and (max-width: ${SCREENS.sm}) {
            font-size: 1.7vmax;
        }
    }
    .productCart:hover {
        box-shadow: 0 0 5px rgba(15,15,15,0.26);
        transform: translateY(-1px);
    }
`;

//const NameProduct = styled.p``;



const ImgProduct = styled.img`
    width: 15vmax;
`;

const Star = styled.div`
    margin: 0.3vmax;
    ${tw`
        flex
        justify-start
    `}
    @media screen and (max-width: ${SCREENS.sm}) {
        margin: 0vmax;
        display: block;
    }
`;

const PointReviews = styled.span`
    margin: 0.8vmax;
    font: 300 0.8vmax "Roboto";
    @media screen  and (max-width: ${SCREENS.sm}) {
        margin: 0 0.5vmax;
        position: relative;
        top: -6px;
        font: 300 1vmax "Roboto";
    }

`;

const PriceProduct = styled.span`
    margin: 0 0.5vmax;
    margin-bottom: 0.5vmax;
    color: blue;
    font-family: "Franklin Gothic Medium","Arial Narrow","Arial", san-serif;
    font-size: 1vmax;
    @media screen  and (max-width: ${SCREENS.sm}) {
        font-size: 1.5vmax;
        padding-bottom: 2px;
    }
`;


export function Product(props: IStackProps) {

    const { name, image, price, _id } = props;
    return (
        <ContainerProduct>
            <Link className="productCart" to={_id}>
                <ImgProduct src={image} alt={name} ></ImgProduct>
                <p>{name}</p>
                <Star>
                    <ReactStars {...options} />
                    <PointReviews>256 Reviews</PointReviews>
                </Star>
                <PriceProduct>{price}</PriceProduct>
            </Link>
        </ContainerProduct>
        
    )
}





