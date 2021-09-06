import React ,{Component} from 'react';

class Form extends Component{
    render(){
        return (
            <div>
                <h2>Text input fields</h2>

                    <label for="fname">First name:</label><br></br>
                    <input type="text" id="fname" name="fname" value="John"></input><br></br>
                    <label for="lname">Last name:</label><br></br>
                    <input type="text" id="lname" name="lname" value="Doe"></input>
            </div>
        )
        
    }

}

export default Form;