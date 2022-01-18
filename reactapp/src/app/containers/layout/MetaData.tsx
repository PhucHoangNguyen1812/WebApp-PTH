import React from 'react'
import Helmet from 'react-helmet'
import { ITitle } from "../../../typings/Title";

export function MetaData (props: ITitle){
    const {title} = props;
    return (
       <Helmet>
           <title>{title}</title>
       </Helmet>
    )
}


