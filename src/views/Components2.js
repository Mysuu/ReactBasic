import React from 'react'
import Children from './Children'

class Components2 extends React.Component {

    //key:value
    state = {
        firstName: '',
        lastName: ''
    }

    handleChangeFirstName = (e) => {
        this.setState({
            firstName : e.target.value
        })
    }

    handleChangeLastName = (e) => {
        this.setState({
            lastName : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault(e) //ngăn k cho refesh
        console.log('check data:', this.state)
    }

    render() {

        //#9
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br/>
                    <input type="text" value={this.state.firstName} 
                        onChange={(e) => this.handleChangeFirstName(e)} /><br/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input type="text" value={this.state.lastName}
                        onChange={(e) => this.handleChangeLastName(e)}
                    /><br/><br/>
                    <input type="submit"
                        onClick={(e) => this.handleSubmit(e)}
                    />
                </form><br />

                <Children name={"one"} age={'23'}/>
            </>
        )

    }
}
export default Components2;