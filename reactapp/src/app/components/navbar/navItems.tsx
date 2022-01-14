import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyle";
const ListContainer = styled.ul`
    ${tw`
        flex
        list-none
    `};    

`;

const NavItem = styled.li<{ menu?: any }>`
    ${tw`
        text-sm
        md:text-base
        text-black
        md:mr-6
        cursor-pointer
        transition
        duration-300
        ease-in-out
        hover:text-gray-700
        font-semibold

    `};    
    
    ${({menu}) => menu && css`
        ${tw`
            text-black
            text-xl
            mb-4
            hover:text-blue-500
            bg-white
            rounded-md
            p-2
            w-full
            text-center

        `};
    `};

`;
const Item = styled.a<{menu?:any}>`

${({menu}) => menu && css`
    ${tw`

    `};
`};

`;
export function NavItems() {

    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm })
    if (isMobile) 
        return (
            <Menu right styles={menuStyles}>
                <ListContainer>
                    <NavItem menu>
                        <Item menu href="#">Trang Chủ</Item>
                    </NavItem >
                    <NavItem menu>
                        <Item menu href="#">Đăng Nhập</Item>
                    </NavItem>
                    <NavItem menu>
                        <Item menu href="#">Đăng Ký</Item>
                    </NavItem>
                    <NavItem menu>
                        <Item menu href="#">Liên Hệ</Item> 
                    </NavItem>
                </ListContainer>
            </Menu>
        );
    
    return (
        <ListContainer>
            <NavItem>
                <Item href="#">Trang Chủ</Item>
            </NavItem>
            <NavItem>
                <Item href="#">Đăng Nhập</Item>
            </NavItem>
            <NavItem>
                <Item href="#">Đăng Ký</Item>
            </NavItem>
            <NavItem>
                <Item href="#">Liên Hệ</Item>
            </NavItem>
        </ListContainer>
    );
}