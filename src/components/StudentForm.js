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
        this.setState({fname: event.target.value});
    }
    
    handleSubmit(event){
        console.log(this.state.fname)
        alert('A name was submitted :' + this.state.fname);
        event.preventDefault();
    }
    
    render(){
        
        return (
            <form onSubmit ={this.handleSubmit}>


                    <label for="fname">First name:</label><br></br>
                    <input type="text" id="fname" name="fname" value={this.state.value} 
                    onChange = {this.handleChange}></input><br></br>
                   
                   {/*<label for="lname">Last name:</label><br></br>
                    <input type="text" id="lname" name="lname" value="Doe"></input>*/}

                    <input type="submit" value="Submit" />
            </form>
        );
        
    }

}

export default Form;