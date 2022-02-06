import React, { Component } from 'react'
import axios from 'axios'


class DcandidateForm extends Component {

    state = {
        initialFieldValues:   {
            id:0,
            fullName: '',
            mobile: '',
            email: '',
            age:0,
            bloodGroup: '',
            
            address: ''
        }
    }

       
   

    componentDidUpdate(prevProps) {
        if (prevProps.currentIndex != this.props.currentIndex || prevProps.list != this.props.list) {
            this.setState({ ...this.initialFieldValues })
            axios.post("http://localhost:60671/api/DCandidate",).then(result=>{
               console.log(result);
            alert(result.result)
            })
            console.log(prevProps, this.props)
        }
    }

    handleInputChange = (e) => {
       const {name,value}=e.target;
       const initialFieldValues = this.state.initialFieldValues;
       initialFieldValues[name]=value;
       this.setState({initialFieldValues})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.initialFieldValues)
        axios.post("http://localhost:60671/api/DCandidate",this.state.initialFieldValues).then(result=>{
            console.log(result)
        alert(result.data)
            })
    }

    render() {
        const {initialFieldValues}=this.state;
        return (
            <div className="container">
            <div className="row">
            <form onSubmit={this.handleSubmit} autoComplete="off">
                <div>
                <input type="text" name="fullName" placeholder="Enter your name" onChange={this.handleInputChange} value={initialFieldValues.fullName} /><br />
                < input type="text" name="mobile" placeholder="Enter mobile number" onChange={this.handleInputChange} value={initialFieldValues.mobile} /><br />
                < input type="text" name="email" placeholder="Enter your email" onChange={this.handleInputChange} value={initialFieldValues.email} /><br />
                </div>
               <div>
                <input type="number" name="age" onChange={this.handleInputChange} value={this.state.initialFieldValues.age}/> 
               
               <select  name="bloodGroup"  onChange={this.handleInputChange} value={initialFieldValues.address} >
            <option >Blood Group</option>
            <option>A+</option>
            <option>O+</option>
            <option>B+</option>
           <option>AB+</option>
           <option>A-</option>
           <option>O-</option>
           <option>B-</option>
           <option>B-</option>
           </select>
               < input type='address' name="address" placeholder="Enter address" onChange={this.handleInputChange} value={initialFieldValues.address} /><br />
               </div>
              
                <button type="submit">Submit</button>
              
            </form>
               
              </div>
            </div>
         
        )
    }
}

export default DcandidateForm