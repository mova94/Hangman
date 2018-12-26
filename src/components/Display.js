import React from 'react';

class Display extends React.Component{

    render(){
        return(
            <div>
                {
                    this.props.word && 
                <h1>
                    {this.props.encrypted}
                </h1>
                }
                
                <br/>

                <div>
                    {this.props.letters.join("-")}
                </div>

            </div>
            
        );
    }
}

export default Display;