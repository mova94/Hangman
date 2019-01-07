import React from 'react';

const Form = (props) => {
    return(
        <div>
            {
                props.visible && 
                <form onSubmit={props.handleSubmit} >
                    <input className="user-input" type="text" placeholder="i.e. f" maxLength="1" name="user_input" ></input>
                    <button className="button" type="submit" disabled = {props.lose || props.win}> Guess </button>
                </form>
            }
            
        </div>             
    );
}

export default Form;