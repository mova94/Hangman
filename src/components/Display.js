import React from 'react';

class Display extends React.Component{

    

    render(){
        return(
            <div>
                {
                    this.props.word && 
                <h1 className="encrypted">
                    {this.props.encrypted}
                </h1>
                }
                
                <br/>
                {/* error message if there is no input */}
                {
                    this.props.error && <h1> <strong>{this.props.error}</strong> </h1>
                }
                
                <div>
                    <h4 className="tries">Tries:{this.props.tries}</h4>
                    {this.props.lose && <h3>{this.props.loseMessage}</h3> }
                    {this.props.win && <h3>{this.props.winMessage}</h3> }
                </div>

            </div>
            
        );
    }
}

export default Display;