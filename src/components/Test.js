import React from 'react';

class Test extends React.Component{

    state = {
        words: ['monkey', 'lion', 'cheetah'],
        word: '',
        encrypted:[]
    }

    selectWord = () => {
        const randNum = Math.floor(Math.random() * this.state.words.length);
        const selected = this.state.words[randNum];
        console.log(selected);
        this.setState(() => ({
            word: selected,
            encrypted:[],
            guessed:false
        }), console.log("state changed"));
    }

    componentDidMount(){
        this.selectWord();
    }

    handleEncryption = () => {
        const encrypted = [];
        console.log(this.state.word.length - 1);
        for (let index = 0; index < this.state.word.length; index++) {
            encrypted.push('*');
        }
        this.setState(() =>({
            encrypted
        }));
    }
    
    render(){
        return(
            <div>
               
                <h1>
                    {
                    this.state.encrypted
                    }
                </h1>
                <button onClick={this.handleEncryption}>Begin</button>
            </div>
        );
    }
}

export default Test;