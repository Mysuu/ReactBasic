import React from 'react'

class Components extends React.Component {

    //key:value
    state = {
        name: '',
        channel: 'Hoi Dan IT',
    }

    // video #5
    // e là dữ liệu bên trong input, là tham số đầu vào
    handleOnChangeName = (e) => {
        // console.log(e.target.value, 'event target', e.target, 'event obj', e)
        // cập nhập state với setState
        this.setState({
            name: e.target.value
        })
    }

    // video #6
    handleClickButton = () => {
        console.log('hit the button')
        alert('click me')
    }

    render() {

        // console.log('render:', this.state)
        return (
            <>
                <div className='first'>
                    {/* e là global trong html, xuất hiện khi khai báo sự kiện onChange */}
                    <input value={this.state.name} type='text' 
                        onChange={(e) => this.handleOnChangeName(e)}
                    />
                    My name is {this.state.name}
                </div>
                <div className="second">
                    My youtube channel : {this.state.channel}
                </div>
                <div className="third">
                    <button onClick={() => this.handleClickButton()}>Click me</button>
                </div>
            </>
        )

    }
}
export default Components;