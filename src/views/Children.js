import React from 'react'

class Children extends React.Component {

    render() {

        console.log('check props', this.props)
        // cách 2
        // let name = this.props.name
        // let age = this.props.age
        // cách 3
        let {name, age} = this.props
        //#9
        return (
            <>
                {/* cách 1 */}
                {/* <div> tao là con {this.props.name} - {this.props.age}</div> */}
                {/* cách 2
                <div> tao là con {name} - {age}</div> */}
                {/* cách 3 */}
                <div>tao là con {name} - {age}</div>
            </>
        )

    }
}
export default Children;