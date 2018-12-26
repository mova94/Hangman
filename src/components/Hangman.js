import React from 'react';
import Display from "./Display"

class Hangman extends React.Component{

    state = {
        tries:5,
        words:[ "monkey", "bird", "gorilla", "zebra", "lion"],
        word: "",
        letters: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
        encrypted: []
    };

    selectWord = () => {
        const randNum = Math.floor((Math.random() * 5) + 0);
        this.setState( () => ({
            word: this.state.words[randNum]
        }));
        this.handleEncryption(this.state.word)
    };

    handleEncryption = () =>{
        const count = this.state.word.length;
        const encrypted = [];

        for (let index = 0; index < count; index++) {
            encrypted.push('*')
        }
        console.log(encrypted)
        
        this.setState(() => ({
            encrypted: encrypted
        }));
    }
   

    render(){
        return(
            <div>
                
                <div className="title_">
                    Hangman                    
                </div>

                <Display
                 word = {this.state.word}
                 letters = {this.state.letters}
                 encrypted = {this.state.encrypted}
                />
        
                <br/>
                
                <button onClick = {this.selectWord}>Set New Word</button>

            </div>
        )
    };
}

export default Hangman;