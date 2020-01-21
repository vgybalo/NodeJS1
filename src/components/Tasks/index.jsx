import React, { Component } from 'react';
import styles from './styles.module.scss';
import Task from './Task';
import Target from './Target';

import triang_black from './images/triang-black.svg';

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
const targets = [
  {
    "id": '1',
    "title": 'Сформировать эмоциональную привязанность с ребенком',
  },
    {
    "id": '2',
    "title": 'Объяснить отцу и\или другим членами семьи, которые проживают с вами о предстоящем этапе в вашей семье',
  },
    {
    "id": '3',
    "title": 'Сформировать эмоциональную привязанность с ребенком, объяснить отцу и\или другим членами семьи, которые проживают с вами о предстоящем этапе в вашей семье.',
  },
]
class Tasks extends React.Component {
    constructor(props){
        super(props)
        this.state={
            show:false

        }
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick() {
        
        this.setState({
            show:!this.state.show
        })
    }
    componentDidMount(){
        this.setState({
            
        })
    }

    render(){
    
        return(
            <>
        
            {/********** Targets*/}
            {targets.map(el=>{return <Target id={el.id} title={el.title} />})}
            
        

    <section className={styles.bg_gray}>
        <div className={styles.container}>
            <div className={styles.name_section}>
                <h2>Проработать</h2>
                {/********** Arrow for hidden articles*/}
                <a classclassName={styles.triang_black} href="#" onClick={this.handleClick} ><img src={triang_black} alt="open" /></a>
            </div>
			<div className={!this.state.show?styles.section_content:styles.section_content_hidden}>
                
                {/********** Articles*/}
                {articles.map(el=>{return <Task id={el.id} title={el.title} />})}
            </div>
		</div>
	</section>
             
        
            
            
         
        
        
        
            </>
        )
    }
}

export default Tasks 