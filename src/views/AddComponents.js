import React, { Component } from 'react'

class AddComponents extends Component {

    state = {
        title: '',
        salary: ''
    }

    handleChangeTitleJob = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleChangeSalaryJob = (e) => {
        this.setState({
            salary: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault(e) //ngăn k cho refesh khi bấm submit
        //validate dữ liệu, check xem có thiếu dữ liệu không
        if (!this.state.title || !this.state.salary) {
            alert('a')
            return
        }
        // console.log('check data:', this.state)
        //props là data truyền từ cha (component2) sang con
        this.props.addNewJob({//gọi dữ liệu từ con ngược sang cha
            id: Math.floor(Math.random() * 1000),
            title: this.state.title,
            salary: this.state.salary
        })
        //sau khi nhập xong clear ô
        this.setState({
            title: '',
            salary: ''
        })
    }
    render() {
        return (

            <form>
                <label htmlFor="fname">Jobs title:</label><br />
                <input type="text" value={this.state.title}
                    onChange={(e) => this.handleChangeTitleJob(e)} /><br />
                <label htmlFor="lname">Salary:</label><br />
                <input type="text" value={this.state.salary}
                    onChange={(e) => this.handleChangeSalaryJob(e)}
                />
                <br /><br />
                <input type="submit"
                    onClick={(e) => this.handleSubmit(e)}
                />
            </form>
        );
    }
}

export default AddComponents;
