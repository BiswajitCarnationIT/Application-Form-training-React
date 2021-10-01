import React ,{Component} from 'react';

class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            gender: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
        
    }

    handleChange(event){
        console.log(event.target);  //*
        //this.setState({event.target.name: event.target.name});
        
        this.setState({       
            ...this.state,      //Spreed operator
            [event.target.name]:  event.target.value
          });
    }

    onChangeValue(event) {
        console.log(event.target.value);
        this.setState({       
            ...this.state,
            [event.target.name]:  event.target.value
          });
    }
    
    handleSubmit(event){
        console.log(this.state.lname)
        alert('first name :' + this.state.fname +'\n'
        + 'Last name  :' + this.state.lname 
        +'\n'+ 'Email: '+ this.state.email + '\n'+
        'Gender: ' + this.state.gender);
        event.preventDefault();
    }
    
    render(){
        console.log(this.state)
        return (
            <form onSubmit ={this.handleSubmit}>


                    <label for="fname">First name:</label><br></br>
                    <input type="text" id="fname" name="fname" value={this.state.fname} 
                    onChange = {this.handleChange}></input><br></br>
                    {/*<label for="lname">Last name:</label><br></br>
                    <input type="text" id="lname" name="lname" value={this.state.lname} onChange = {this.handleChange}></input>*/}

                    <label for="lname">Last name:</label><br></br>
                    <input type="text" id="lname" name="lname" value={this.state.lname} 
                    onChange = {this.handleChange}></input><br></br>

                    <label htmlFor="lname">Email:</label><br></br>
                    <input type="text" id="email" name="email" value={this.state.email}
                    onChange = {this.handleChange}></input><br></br><br></br>

                    {/*---- Radio Button------   */}

                    <div onChange={this.onChangeValue}>
                        <label htmlFor="gender">Gender:</label><br></br>
                        <input type="radio" id="male" name="gender" value="Male"></input>
                        <label htmlFor="html">Male</label><br></br>
                        
                        <input type="radio" id="female" name="gender" value="Female"></input>
                        <label htmlFor="css">Female</label><br></br><br></br>
                    </div>

                    {/*<!--       Check box       --> */}

                    
                    
                    <label htmlFor="skill">Your Skill:</label><br></br>
                    <input type="checkbox" id="c" name="c" value="C"></input>
                    <label htmlFor="skill1"> I know C</label><br></br>
                    
                    <input type="checkbox" id="java" name="java" value="Java"></input>
                    <label htmlFor="skill2"> I know Java</label><br></br>
                    
                    <input type="checkbox" id="vehicle3" name="JavaScript" value="JavaScript"></input>
                    <label htmlFor="skill3"> I know JavaScript</label><br></br><br></br>
                   

                    <input type="submit" value="Submit" />
            </form>
        );
        
    }

}

export default Form;
