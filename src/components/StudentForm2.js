import React ,{Component} from 'react';

class Form extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email:'',
            gender:''
        };

        //this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /*handleChange(event){
        console.log(event.target.value);
        this.setState({fname: event.target.value});
    }*/
    
    handleSubmit(event){
        console.log(this.state.fname)
        alert('first name  :' + this.state.fname +'\n' +'last name  :' + this.state.lname + '\n'
        + 'email name  :' + this.state.email + this.state.gender);
        event.preventDefault();
    }
    
    render(){
        return (
            <form onSubmit ={this.handleSubmit}>
                <h2>Candidate Application form</h2>

                    <label htmlFor="fname">First name:</label><br></br>
                    <input type="text" id="fname" name="fname" value={this.state.fname} 
                    onChange = {e => this.setState({fname : e.target.value})}></input><br></br><br></br>
                    
                    <label htmlFor="lname">Last name:</label><br></br>
                    <input type="text" id="lname" name="lname" value={this.state.lname}
                    onChange = {e => this.setState({lname : e.target.value})}></input><br></br><br></br>
                    
                    <label htmlFor="lname">Email:</label><br></br>
                    <input type="text" id="email" name="email" value={this.state.email}
                    onChange = {e => this.setState({email : e.target.value})}></input><br></br><br></br>

                    {/*<!--       Radio Button       -->*/}
                    
                    <label htmlFor="gender">Gender:</label><br></br>
                    <input type="radio" id="male" name="gender" value={this.state.gender}
                    onChange = {e => this.setState({gender : e.target.gender})}></input>
                    <label htmlFor="html">Male</label><br></br>
                    
                    <input type="radio" id="female" name="gender" value="Female"></input>
                    <label htmlFor="css">Female</label><br></br><br></br>
                    
                    {/*<!--       Check box       --> */}

                    
                    
                    <label htmlFor="skill">Your Skill:</label><br></br>
                    <input type="checkbox" id="c" name="c" value="C"></input>
                    <label htmlFor="skill1"> I know C</label><br></br>
                    
                    <input type="checkbox" id="java" name="java" value="Java"></input>
                    <label htmlFor="skill2"> I know Java</label><br></br>
                    
                    <input type="checkbox" id="vehicle3" name="JavaScript" value="JavaScript"></input>
                    <label htmlFor="skill3"> I know JavaScript</label><br></br><br></br>
                    
                    
                    
                    <input type="submit" value="Submit"></input>
            </form>
        )
        
    }

}

export default Form;