import React, { Component ,useState} from 'react'
import DcandidateForm from './DcandidateForm'

class DcandidateList extends Component {
    state = {
        currentIndex: -1,
        list: this.initialFieldValues
    }
    
    initialFieldValues() {
       
    }

    handleEdit = (index) => {
        this.setState({
        
            currentIndex: index
        })
        console.log(index);
    }

    handleDelete = (index) => {
        var list = this.initialFieldValues()
        list.splice(index, 1);
        
        this.setState({ list, currentIndex: -1 })
    }

    onAddOrEdit = (data) => {
        var list = this.initialFieldValues()
        if (this.state.currentIndex == -1)
            list.push(data)
        else
            list[this.state.currentIndex] = data
       
        this.setState({ list, currentIndex: -1 })
    }


    render() {
        return (



            // <div>
            //     <DcandidateForm
            //         currentIndex={this.state.currentIndex}
            //         list={this.state.list}
            //         onAddOrEdit={this.onAddOrEdit}
            //     />
            //     <hr />
            //     <table>
            //                    <tr>
            //                    <th>fullname</th>
            //                     <th>mobile</th>
            //                     <th>email</th>
            //                     <th>age</th>
            //                     <th>bloodGroup</th>
            //                     <th>address</th>
            //                    </tr>
            //             {this.state.list.map((item, index) => {
            //                 return <tr key={index}>
                                
            //                     <td>{item.fullname}</td>
            //                     <td>{item.mobile}</td>
            //                     <td>{item.email}</td>
            //                     <td>{item.age}</td>
            //                     <td>{item.bloodGroup}</td>
            //                     <td>{item.address}</td>

            //                     <td>
            //                     <button onClick={() => this.handleEdit(index)}>Edit</button>
            //                     <button onClick={() => this.handleDelete(index)}>Delete</button>
            //                     </td>
            //                 </tr>
            //             })}
                   
            //     </table>
            // </div>
       
       
       <div>Hi From List</div>
       
       )
    }
  
}

export default DcandidateList