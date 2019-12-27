import React from 'react';
export default function(props) {
    const {liList} = props;
    
    const lis = liList && typeof(liList) !=='string' && liList.length>0 ? 
    liList.map(el=>{return(el.top, el.left,el.position)}) : 'error';
  return (
    <div style="display: block, width: 20px, height: 50px, position:absolute, margin: 0 auto, border-radius: 3px, background-color: #00ffff">
      <div style={lis}>
        </div>
    </div>
    )
}