import React, { Component } from 'react'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            email:'',
            message:'',
            emailSent: null,
            disabled: false,

        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name= target.name;

        this.setState({
            [name]: value.toUpperCase()
        });
      }
    
      handleSubmit(event) {
        event.preventDefault();
        this.setState({
            disabled: true,
            emailSent: true
        })
      }
    render() {
        return (
            <div>
             <form onSubmit={this.handleSubmit}>
                <label>
                Full Name:<br></br>
                <input style = {textStyle} name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                </label>
                <br></br>
                <label>
                Email id:<br></br>
                <input style = {textStyle} name="email" type="text" value={this.state.email} onChange={this.handleChange}/>
                </label>
                <br></br>
                <label>
                Message:<br></br>
                <textarea style = {textStyle} name="message" value={this.state.message} onChange={this.handleChange}/>
                </label>
                <br></br>
                <button style={subStyle} type="submit" value="Submit" disabled={this.state.disabled}>submit</button>
                {this.state.emailSent === true && <p className="success">Email Sent</p>}
                {this.state.emailSent === false && <p className="err">Email Not Sent</p>}
             </form>
            </div>
        )
    }
}

const subStyle = {
    backgroundColor: "#4CAF50",
    color: 'white',
    padding: '15px',
    border:'none',
    borderRadius:'4px',
    cursor:'pointer',
}

const textStyle = {
    width:'100%',
    padding: '12px',
    borderStyle: 'solid',
    borderColor: '#ccc',
    borderRadius:'4px',
    boxSizing:'border-box',
    marginTop:'6px',
    marginBottom:'16px',
    resize:'vertical'
}
export default Contact
