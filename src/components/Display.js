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
                {/* error message if there is no input */}
                {
                    this.props.error && <h1> <strong>{this.props.error}</strong> </h1>
                }
                

                <div>
                    {this.props.letters.join("-")}
                </div>
                <div>
                    <h4>Tries:{this.props.tries}</h4>
                </div>

            </div>
            
        );
    }
}

export default Display;