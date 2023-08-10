import React from 'react';
import { flagNcheck } from './icons';

function BreweryCard(props) {

  return (    
    <div className="brewery-card brewery" onClick={props.onClick}>

      <div className="brewery-image">
        <img src={props.image} alt="brewery Image" />
      </div>

      <div className="brewery-info">

        <h2 className="brewery-name">{props.name}</h2>

        <p className="brewery-address">{props.address}</p>

        <div className="brewery-tags">
          
          {
            props.tags.map((tag) => (
              <div className={`tag-container ${
                tag.con === true ? "con" : "pro"
              }`}>
                <i className={
                  `fa-regular ${
                    tag.con === true ? flagNcheck.flag : flagNcheck.checkmark
                    }`}>
                </i>
                <p className="tag-brew">{tag.name}</p>
              </div>
            ))
          }

        </div>
      </div>
    </div>
  );
}

export default BreweryCard;


