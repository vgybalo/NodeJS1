import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from './styles.module.scss';
    
    

    /*function getBackgroundColor(){
        return '#000'
    }

    function hexColorPropType(){
        return null
    }*/

class Target extends React.Component {
    
    render(){
        return(
        <div className={styles.target}>
            <div className={styles.target_left_flow_block}>
                <div className={styles.module_targets_number_block}>
                     <div className={styles['module-turgets-number']}>       {this.props.id}       </div>
                </div>
                 <div className={styles.module_turgets_text_block}>
                     <div className={styles['module-turgets-text']}>
                         {this.props.title}
                     </div>
                 </div>
            </div>
        </div>

        )
    }
}

export default Target 