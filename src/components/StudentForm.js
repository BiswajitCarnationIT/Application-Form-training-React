import React ,{Component} from 'react';

class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            fname: '',
            lname: '',
            gender: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
        
    }

    handleChange(event){
        console.log(event.target);  //*
        //this.setState({event.target.name: event.target.name});
        
        this.setState({       //Spreed operator
            ...this.state,
            [event.target.name]:  event.target.value
          });
    }

    onChangeValue(event) {
        console.log(event.target.value);
        this.setState({       //Spreed operator
            ...this.state,
            [event.target.name]:  event.target.value
          });
    }
    
    handleSubmit(event){
        console.log(this.state.lname)
        alert('A first name was submitted :' + this.state.fname +'\n'
        + 'A second name was submitted :' + this.state.lname 
        +'\n'+ this.state.gender);
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
                    onChange = {e => this.setState({lname : e.target.value})}></input>

                    {/*---- Radio Button------   */}

                    <div onChange={this.onChangeValue}>
                        <label htmlFor="gender">Gender:</label><br></br>
                        <input type="radio" id="male" name="gender" value="Male"></input>
                        <label htmlFor="html">Male</label><br></br>
                        
                        <input type="radio" id="female" name="gender" value="Female"></input>
                        <label htmlFor="css">Female</label><br></br><br></br>
                    </div>
                   

                    <input type="submit" value="Submit" />
            </form>
        );
        
    }

}

export default Form;
