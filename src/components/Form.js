import React from 'react';

const Form = (props) => {
    return(
        <div>
            {
                props.visible && 
                <form onSubmit={props.handleSubmit} >
                    <input type="text" placeholder="i.e. f" maxLength="1" name="user_input" ></input>
                    <button type="submit"> Guess </button>
                </form>
            }
            
        </div>             
    );
}

export default Form;