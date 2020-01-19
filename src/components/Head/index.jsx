import React, { Component } from 'react';
import styles from './styles.module.scss';



class Header extends React.Component {
    constructor(props){
        super(props)
        this.state={}
    }
    componentDidMount(){
        this.setState({
            themeData: '1 год 3 месяца',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos voluptatibus qui, voluptas cumque quam nobis commodi voluptates in quos ducimus. Delectus architecto sunt, nesciunt illo possimus, alias molestias voluptas illum!',
            allthemes: '11',
            donethemes: '5'
        })
    }

    render(){
        return(
        <div className={styles.main_content}>
            <div className={styles.name_main_content}>
                <div className={styles.container}>
                    <h1>{this.state.themeData}</h1>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.main_info}>
                    <div className={styles.text}>    
                        <p>{this.state.text}</p>
                <div className={styles.range}>
                    <div className={styles.content_range} >
                        <span className={styles.left_range_count}>
                            <span className={styles.number}> {this.state.allthemes}</span>
                            <span>Тем всего</span>
                        </span>
                        <span className={styles.right_range_count}>
                            <span className={styles.number}> {this.state.donethemes}</span>
                            <span>Тем выполнено</span>
                        </span>
                    </div>
                    
                </div> 
                {/* <ProgressBar />  */}
                 <h3 className={styles.actual_theme_name}>Название актуальной темы</h3> 
                    </div>                
                </div> 
            </div> 
        </div>
        )
    }
}

export default Header 
