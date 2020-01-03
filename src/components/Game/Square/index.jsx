import React from 'react';
import styles from '../styles.module.scss';
 function SquareFunc (props) {
   
  return (
    <div className={styles.game_grid} onClick={this.clickHandler}>
      {props.data}
      {props.squares}
    
    </div>
    
    )
}


export default SquareFunc;