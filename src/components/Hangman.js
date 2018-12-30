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
        start:false
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
        console.log(selected);
        this.setState(() => ({
            word: selected,
            encrypted:[]
        }), console.log("state changed"));
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
            console.log(this.state.word.indexOf(user_input));
            for (let index = 0; index < this.state.letters.length; index++) {
                if(user_input === this.state.letters[index]){
                    this.setState((prevState) => ({
                        error:"",
                        tries: prevState.tries - 1,
                        // letters: prevState.letters.pop()
                    }));
                }
                
            }
            
            console.log("remove from guess list and decrease amount of tries");
        }
    }
   
//disable button after user presses begin!
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
                    tries = {this.state.tries}
                    />
            
                    <br/>
                    <Form
                    handleSubmit = {this.handleSubmit}
                    visible = {this.state.start}
                    />
                    
                    <button onClick={this.handleEncryption} disabled={this.state.start}>Begin</button>
                    <button onClick={this.gameReset} disabled={!this.state.start}>Set New Word</button>

            </div>
        )
    };
}

export default Hangman;