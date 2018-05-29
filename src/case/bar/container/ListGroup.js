import React, { Component } from 'react';

class ListGroup extends Component {
  render() {
    return (
      <div style={{paddingBottom:40, backgroundColor:'pink'}}>
        <ul class="list-group text-center">
          {this.props.data.map((row) => {
            return <li class="list-group-item" style={{color:'black'}}> {row.info}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default ListGroup;
