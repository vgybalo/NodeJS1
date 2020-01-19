import React, { Component } from 'react';
import styles from './styles.module.scss';
import Task from './Task';

const articles = [
  {
    "id": '1',
    "publicationKind1": 'Статья',
    "publicationKindImg1": 'Статья',
    "publicationKind2": null,
    "publicationKindImg2": 'Статья',
    "title": "Формирование эмоциональной связи с родителями",
    "titleImg": ""
  },
  {
    "id": '2',
    "publicationKind1": 'Статья',
    "publicationKindImg1": 'Статья',
    "publicationKind2": null,
    "publicationKindImg2": 'Статья',
    "title": "Формирование эмоциональной связи с родителями2",
    "titleImg": ""
  },
{
    "id": '3',
    "publicationKind1": 'Статья',
    "publicationKindImg1": 'Статья',
    "publicationKind2": null,
    "publicationKindImg2": 'Статья',
    "title": "Формирование эмоциональной связи с родителями3",
    "titleImg": ""
  },]

class Tasks extends React.Component {
    constructor(props){
        super(props)
        this.state={}
    }
    componentDidMount(){
        this.setState({
            
        })
    }

    render(){
        


        return(
            <>
        <div className={styles.target}>
            <div className={styles.target_left_flow_block}>
                <div className={styles.module_targets_number_block}>
                     <div className={styles['module-turgets-number']}>       1       </div>
                </div>
                 <div className={styles.module_turgets_text_block}>
                     <div className={styles['module-turgets-text']}>
                         Сформировать эмоциональную привязанность с ребенком
                     </div>
                 </div>
                 </div>
                
               
                
            </div>
        {articles.map(el=>{return <Task id={el.id} title={el.title} />})}
            
            
         
        
        
        
            </>
        )
    }
}

export default Tasks 