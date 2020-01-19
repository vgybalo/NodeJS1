import React, { Component } from "react";
import PropTypes from "prop-types";

// import React, { Component } from 'react';
import styles from './styles.module.scss';
    import moduleItem1 from './images/module-item1.svg';
    import moduleItemGlases from './images/module-item-glases.svg';
    import moduleItemClock2 from './images/module-item-clock2.svg';
    import moduleSwitcher from './images/module-switcher.svg';
    import moduleItemView from './images/module-item-view.svg';
    import moduleItemRing from './images/module-item-ring.svg';
    import Checkbox from '../../Checkbox'

    /*function getBackgroundColor(){
        return '#000'
    }

    function hexColorPropType(){
        return null
    }*/

class Task extends React.Component {
    constructor(props){
        super(props)
        this.state={
            active:false

        }
        this.handleClick=this.handleClick.bind(this)
    }
    componentDidMount(){
        this.setState({
            
        })
    }
    handleClick() {
        
        this.setState({
            active:!this.state.active
        })
    }


    render(){
        return(
      
            <div className={styles['workout-item1']}>
                    <div className={styles['workout-item-number']}>
                        {this.props.id}
                    </div>
                    <div className={styles['workout-item-icon']}>
                        <img src={moduleItem1} alt="hithen" />
                    </div>
                    <div className={styles['workout-item-1stline']}>
                        <div className={styles['workout-item-1stline-kindimg']}>
                           <img src={moduleItemGlases} alt="kind-of-text" />
                        </div>
                        <div className={styles['workout-item-1stline-glases-kindtxt']}>
                            Статья
                        </div>
                        <div className={styles['workout-item-1stline-timeimg']}>
                             <img src={moduleItemClock2} alt="kind-of-text" />
                        </div>
                        <div className={styles['workout-item-1stline-timetxt']}>
                            1 час 15 минут
                        </div>
                    </div>
                    <div className={styles['workout-item-2ndline']}>
                        <div className={styles['workout-item-2ndline-txt']}>
                        Формирование эмоциональной связи с родителями{this.props.title}
                        </div>
                        
                            {/*Switcher*/}
                        <div className={styles['slider','workout-item-2ndline-img']} onClick={this.handleClick}>
                            <div className={!this.state.active?styles.slider_round:styles.slider_round_checked}  >
                                .
                            </div >   
                        </div>
                           
                        
                    </div>
                    <div className={styles['workout-item-3rdline']}>
                        <div className={styles['workout-item-3rdline-viewimg']}>
                            <a href="#"><img src={moduleItemView} alt="view" /></a>
                        </div>
                        <div className={styles['workout-item-3rdline-viewtxt']}>
                            <a href="#">Статья</a>
                        </div>
                        <div className={styles['workout-item-3rdline-remindimg']}>
                            <a href="#"> <img src={moduleItemRing} alt="remind" /></a>
                        </div>
                        <div className={styles['workout-item-3rdline-remindtxt']}>
                            <a href="#"> Напомнить</a>
                        </div>
                    </div>

                            
                </div>


        )
    }
}

export default Task 