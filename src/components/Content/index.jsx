import React, { Component } from 'react';
import styles from './styles.module.scss';
import Tasks from './Tasks';

const articles = [
  {
    "allthemes": "11",
    "childAgeYear":'1',
    "chilaAgeMonthes": '3-ий'  
  }
]

export default class extends Component{
    constructor(props){
        super(props);
        this.state = {
            allthemes: '10',
            childAgeYear:'1',
            chilaAgeMonthes: '6-ой'           
        }
    };
    
    componentDidMount(){
      
        
    }


    render(){
       
      
        return (
            <>
                <div className={styles.main_content}> 
                    <div className={styles.name_main_content}>
                        <div className={styles.container}>
                            <h1>{articles.map(el=>{return <Tasks  childAgeYear={el.childAgeYear}  />})} Год, {articles.map(el=>{return <Tasks  chilaAgeMonthes={el.chilaAgeMonthes}  />})} месяц</h1>  
                        </div>
                    </div>            
                    <div className={styles.container}>
                        <div className={styles.main_info}>
                            <div className={styles.text}>
                                <p>
                                        Прохождение этой темы позволит вам избежать частных ошибок  при воспитании детей от 0 до 3 лет. Результат - правильные и четкие шаги для достижения цели.
                                </p>                                                 
                                
                                <div className={styles.range}>
                                    <div className={styles.content_range} >
                                        <span className={styles.left_range_count}>
                                            <span className={styles.number}> {articles.map(el=>{return <Tasks  allthemes={el.allthemes}  />})}</span>
                                            <span>Тем всего</span>
                                        </span>
                                        <span className={styles.right_range_count}>
                                            <span className={styles.number}> 6</span>
                                            <span>Тем выполнено</span>
                                        </span>
                                    </div>
                                </div> 
                                <h3>Название актуальной темы</h3>  
                            </div>                
                        </div> 
                    </div>
                </div>
            </>
        )
    }
}