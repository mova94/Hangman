import React from 'react';
import Display from "./Display"

class Hangman extends React.Component{

    state = {
        tries:5,
        words:[ "monkey", "bird", "gorilla", "zebra", "lion"],
        word: "",
        letters: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
        encrypted: [],
        error:"",
        guessed: false
    };
    
    //Use this lifecycle method to temporarily fix a bug that didn't have the selectWord function return a word. 
    //The bug fix is so that the function will be called on mount so that it bypasses the bug so that when the button is pressed
    //an encryption of the word will come out.
    componentDidMount(){
        this.selectWord();
    }

    gameReset = () => {
        location.reload();
    }
 
    selectWord = () => {
        const randNum = Math.floor(Math.random() * this.state.words.length);
        const newWord = this.state.words[randNum];
        this.setState( () => ({
            word: newWord,
            encrypted: [],
            guessed: false
        }), console.log(this.state.encrypted));
        this.handleEncryption(this.state.word)
    };

    handleEncryption = (letter, placement) =>{
        const count = this.state.word.length;
        const encrypted = this.state.encrypted;

            if(this.state.guessed === false){
                for (let index = 0; index < count; index++) {
                    encrypted.push('*')
                }
                
                this.setState(() => ({
                    encrypted: encrypted
                }));
            }
            
            
            if(letter){
                encrypted[placement] = letter;

                this.setState(() => ({
                    encrypted: encrypted
                }));
            }
        
      
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const user_input = e.target.elements.user_input.value;

        if(!user_input){
            this.setState(() => ({
                error: "Please enter a valid character"
            }));
        }
        else if(this.state.word.indexOf(user_input) > -1){
            const index = this.state.word.indexOf(user_input);
            const letter = user_input;

            this.handleEncryption(letter, index);

            this.setState(() => ({
                error:""
            }))
        }
        else{
            console.log(this.state.word.indexOf(user_input));
            this.setState(() => ({
                error:""
            }));
            console.log("remove from guess list and decrease amount of tries");
        }
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
                    error = {this.state.error}
                    />
            
                    <br/>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="i.e. 'f'" maxLength="1" name="user_input"></input>
                        <button type="submit"> Guess </button>
                    </form>
                    
                    
                    <button onClick={this.selectWord}>Set New Word</button>
                    <button onClick={this.gameReset}>Reset</button>

            </div>
        )
    };
}

export default Hangman;