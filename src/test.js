class Main extends React.Component{
   render(){
    let count_num = 0
       return(
            <div>
                <Count count = {count_num}/>
            </div>
       );
   }
}

class Count extends React.Component{
    constructor(props){
        super(props);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    //-----functions
    handleDecrement(){
        this.count_in--;
    }
    handleIncrement(){
        this.count_in++;
    }
    handleReset(){
        this.count_in = 0;
    }

    render(){
        let count_in = this.props.count;
        return (
            <div>
                <h1> Count = {count_in} </h1>
                <button onClick = {this.handleIncrement}>+1</button>
                <button onClick={this.handleDecrement}>-1</button>
                <button onClick={this.handleReset}>Reset</button>

            </div>
        );
    }
}


