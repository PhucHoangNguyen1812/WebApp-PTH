import React from 'react';
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../assets/images/logo1.png"


const Header = () => {
    return (
        <ReactNavbar
            burgerColor = "rgb(96 165 250)"
            burgerColorHover = "#25C6DA"
            logo = {logo}
            logoWidth = "20vmax"
            navColor1 = "rgba(100 149 237)"
            logoHoverSize = "20px"
            logoHoverColor = "white"
            link1Text = "Trang Chủ"
            link2Text = "Sản Phẩm"
            link3Text = "Liên Hệ"
            link4Text = "Hỗ Trợ"
            link1Url = "/"
            link2Url = "/product"
            link3Url = "/contact"
            link4Url = "/support"
            link1Size = "1.3vmax"
            link1Color = "white"
            nav1justifyContent = "flex-end"
            nav2justifyContent = "flex-end"
            nav3justifyContent = "flex-start"
            nav4justifyContent = "flex-start"
            link1ColorHover = "#25C6DA"
            link2Margin ="0 0 0 3vmax"
            link3Margin = "0 2vmax 0 0"
            link4Margin = "0 0 0 0.8vmax"
            profileIconColor = "white"
            searchIconColor = "white"
            cartIconColor = "white"
            profileIconColorHover = "#25C6DA"
            searchIconColorHover = "#25C6DA"
            cartIconColorHover = "#25C6DA"
            cartIconMargin = "1vmax"

        />
    )
}

export default Header;
