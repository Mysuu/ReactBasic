import React from 'react'

class Children extends React.Component {

    render() {

        console.log('check props', this.props)
        // cách 2
        // let name = this.props.name
        // let age = this.props.age
        // cách 3
        let { name, age, jobs } = this.props //destrucering
        //#9
        return (
            <>
                {/* cách 1 */}
                {/* <div> tao là con {this.props.name} - {this.props.age}</div> */}
                {/* cách 2
                <div> tao là con {name} - {age}</div> */}
                {/* cách 3 */}
                <div className='job-list'>
                    {jobs.map((item, index) => {
                        return (
                            <div key={item.id}>
                                {item.title} - {item.salary}
                            </div>
                        )
                    })
                    }
                    {/* tôi là {name} - {age} tuổi */}
                </div>
            </>
        )

    }
}
//#13 cách xài func, có state và k có state
//props là input đầu vào,react sẽ hiểu là lấy từ cha sang con(component2 -> children)
// const Children = (props) => {
//     // console.log('check child props', props);
//     let { jobs } = props
//     return (
//         <>
//             <div className='job-list'>
//                 {
//                     jobs.map((item, index) => {
//                         return (
//                             <div key={item.id}>
//                                 {item.title} - {item.salary} $
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }
export default Children;