import React from 'react';
import './Style.css';

const Card = props => (
    <div className="card" onClick={() => props.clickCount(props.id)}>
      <div className="img-container col-md-4" >
        <img alt={props.name} src={props.image} style={{width:"400px", height:"300px"}} />
      </div>
    </div>
  );
  
  export default Card;