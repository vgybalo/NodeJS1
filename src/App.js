import React from 'react';
import './App.css';
import List from'./List.jsx';

function App() {
  return (    
    
    <div style="display: block, width: 300px, height: 100px, margin: 0 auto, border-radius: 3px, background-color: #0000ff;">
      <h1>Parking</h1>
      
      <List liList={[
        {'top':'10', 'left':'0', 'position': 'rotate(45deg)'}, 
        {'top':'10px', 'left':'80px', 'position': 'rotate(45deg)'}, 
        {'top':'10px', 'left':'150px', 'position': 'rotate(45deg)'},
        {'top':'10px', 'left':'220px', 'position': 'rotate(-60deg)'}
        ]}/>
      
    </div>
  );
}




export default App;
