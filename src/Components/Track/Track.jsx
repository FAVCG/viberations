import React from 'react';
import './Track.css';

const isRemoval = true;

class Track extends React.Component {
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          {/*<h3><!-- track name will go here --></h3>
          <p><!-- track artist will go here--> | <!-- track album will go here --></p>*/}
        </div>
      </div>
    )
  };
  renderAction() {
    if (isRemoval === true){
      return (<button className="Track-action"> - </button>);
    }else {
      return (<button className="Track-action"> + </button>);
     }
    };
};

export default Track;
