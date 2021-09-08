import React ,{Component} from 'react';

class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            fname: '',
            lname: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        console.log(event.target.value);
        this.setState({fname: event.target.value1});
        this.setState({lname: event.target.value2});
    }
    
    handleSubmit(event){
        console.log(this.state.lname)
        alert('A first name was submitted :' + this.state.fname +'\n'+ 'A second name was submitted :' + this.state.lname);
        event.preventDefault();
    }
    
    render(){
        
        return (
            <form onSubmit ={this.handleSubmit}>


                    <label for="fname">First name:</label><br></br>
                    <input type="text" id="fname" name="fname" value1={this.state.fname} 
                    onChange = {this.handleChange}></input><br></br>
                    <label for="lname">Last name:</label><br></br>
                    <input type="text" id="lname" name="lname" value2={this.state.lname} onChange = {this.handleChange}></input>

                    {/*
                    <label for="lname">Last name:</label><br></br>
                    <input type="text" id="lname" name="lname" value={this.state.lname} 
                    onChange = {e => this.setState({lname : e.target.value})}></input>
                    */}
                   

                    <input type="submit" value="Submit" />
            </form>
        );
        
    }

}

export default Form;