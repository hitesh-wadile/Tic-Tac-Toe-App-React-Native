import { Text, View } from 'react-native'
import React from 'react'
import { PropsWithChildren } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
type IconsProps = PropsWithChildren<{
    name : string
}>

const Icons = ({name}:IconsProps) =>{
    switch(name){
        case 'circle' :
            return <Icon name="circle-thin" size={38} color="#F7CD2E" />
            break;

        case 'cross':
            return <Icon name="times" size={38} color="#F7CD2E" />
            break;

        default: 
            return <Icon name="pencil" size={38} color="#F7CD2E" />
    }
}

export default Icons;
