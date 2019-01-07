import React from 'react';
import Display from "./Display";
import Form from "./Form";

class Hangman extends React.Component{

    state = {
        tries:5,
        words:[ "monkey", "bird", "gorilla", "zebra", "lion"],
        word: '',
        letters: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
        encrypted: [],
        error:"",
        start:false,
        win:false,
        lose:false,
        loseMessage:"Oh No! You have run out of tries :( R.I.P",
        winMessage: "HURRAY! YOU SAVED ME FROM MY DOOM!!!!!!",
        disableGuess: false
    };
    
    componentDidMount(){
        this.selectWord();
    }

    gameReset = () => {
        location.reload();
    }
 
    selectWord = () => {
        const randNum = Math.floor(Math.random() * this.state.words.length);
        const selected = this.state.words[randNum];
        this.setState(() => ({
            word: selected,
            encrypted:[]
        }));
    }

    handleEncryption = () =>{
        const count = this.state.word.length;
        const encrypted = this.state.encrypted;

                for (let index = 0; index < count; index++) {
                    encrypted.push('*')
                }
                
                this.setState(() => ({
                    encrypted,
                    start:true
                }));   
    }

    handleDecipher = (letter, index) => {
        const decipher = this.state.encrypted;

        decipher[index] = letter;

        this.setState(() => ({
            encrypted:decipher
        }))

        if(this.state.encrypted.indexOf("*") === -1){
            this.setState(() => ({
                win: true
            }));
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const user_input = e.target.elements.user_input.value;
        e.target.elements.user_input.value = null;
        if(!user_input || !user_input.match(/^[A-Za-z]+$/)){
            this.setState(() => ({
                error: "Please enter a valid character"
            }));
        }
        else if(this.state.word.indexOf(user_input) > -1){

            for (let index = 0; index < this.state.word.length; index++) {
                if(user_input === this.state.word[index]){
                    this.handleDecipher(user_input, index);
                }
            }
        

            this.setState(() => ({
                error:""
            }))
        }
        else{
            for (let index = 0; index < this.state.letters.length; index++) {
                if(user_input === this.state.letters[index] && this.state.tries > 0){
                    this.checkTries();
                    this.setState((prevState) => ({
                        error:"",
                        tries: prevState.tries - 1,
                    }));
                }
                
            }
        }
    }
   
    checkTries = () =>{
        if(this.state.tries === 1){
            this.setState(()=>({
                lose:true
            }))
        }
    } 

    render(){
        return(
            <div>
                    <div className="header">
                        <h3 className="header__title">Hangman</h3>                    
                    </div>
            <div className="container">
                 <Display
                    word = {this.state.word}
                    letters = {this.state.letters}
                    encrypted = {this.state.encrypted}
                    error = {this.state.error}
                    tries = {this.state.tries}
                    lose = {this.state.lose}
                    win = {this.state.win}
                    loseMessage = {this.state.loseMessage}
                    winMessage = {this.state.winMessage}
                    />
            
                    <br/>
                    <Form
                    handleSubmit = {this.handleSubmit}
                    visible = {this.state.start}
                    lose = {this.state.lose}
                    win = {this.state.win}
                    />
                    
                    <div className="divider">
                        <button className="begin-button" onClick={this.handleEncryption} disabled={this.state.start}>Begin</button>
                        <button className="startOver-button" onClick={this.gameReset} disabled={!this.state.start}>Start Over</button>
                    </div>
                    
            </div>


            </div>
        )
    };
}

export default Hangman;