import React from 'react';
import './UserOutput.css';
import '../Person/Person.css';

const userOutput = (props) => {
      return (
            <div className="UserOutput">
                   <p>UserName: {props.userName}</p>
                   <p>Some other random texts.</p>
            </div>
      );

}
export default userOutput;