import React from 'react';
//import styles from './styles.module.scss';
//import PropTypes from 'prop-types'

function UserFun (props){
    console.log(props)
    return ( props.allthemes, props.childAgeYear, props.chilaAgeMonthes
    )
}

UserFun.defaultProps={
    allthemes:'underfined',
    childAgeYear:'qsasasasas',
    chilaAgeMonthes:'1-й'
}

export default UserFun;