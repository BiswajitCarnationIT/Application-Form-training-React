import React ,{Component} from 'react';

class Form extends Component{
    render(){
        return (
            <div>
                <h2>Candidate Application form</h2>

                <form >
                    <label for="fname">First name:</label><br></br>
                    <input type="text" id="fname" name="fname" value=""></input><br></br><br></br>
                    
                    <label for="lname">Last name:</label><br></br>
                    <input type="text" id="lname" name="lname" value=""></input><br></br><br></br>
                    
                    <label for="lname">Email:</label><br></br>
                    <input type="text" id="email" name="email" value=""></input><br></br><br></br>

                    {/*<!--       Radio Button       -->*/}
                    
                    <label for="gender">Gender:</label><br></br>
                    <input type="radio" id="male" name="gender" value="Male"></input>
                    <label for="html">Male</label><br></br>
                    
                    <input type="radio" id="female" name="gender" value="Female"></input>
                    <label for="css">Female</label><br></br><br></br>
                    
                    
                    {/*<!--       Check box       --> */}
                    
                    <label for="skill">Your Skill:</label><br></br>
                    <input type="checkbox" id="c" name="c" value="C"></input>
                    <label for="skill1"> I know C</label><br></br>
                    
                    <input type="checkbox" id="java" name="java" value="Java"></input>
                    <label for="skill2"> I know Java</label><br></br>
                    
                    <input type="checkbox" id="vehicle3" name="JavaScript" value="JavaScript"></input>
                    <label for="skill3"> I know JavaScript</label><br></br><br></br>
                    
                    
                    <input type="submit" value="Submit"></input>
                </form> 
            </div>
        )
        
    }

}

export default Form;