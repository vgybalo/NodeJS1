import React, { Component } from 'react';
import styles from './styles.module.scss';

export default class extends Component{
  constructor(props){
    super(props);
    this.state = {
      clickNumber: 0,
    }

    this.handleDec = this.handleDec.bind(this);
    this.handleInc = this.handleInc.bind(this);
  }

  handleInc(){
    this.setState({
        clickNumber: this.state.clickNumber+=1,
    })
  }

  handleDec(){
    this.setState({
        clickNumber: this.state.clickNumber-=1,
    })
  }

  render(){
    return (
      <div className={styles.container}>
        <h2 className={styles.count}>{this.state.clickNumber}</h2>
        <div>
          <button type='button' onClick={this.handleInc}>inc</button>
          <button type='button' onClick={this.handleDec}>dec</button>
        </div>
      </div>
    )
  }
};
