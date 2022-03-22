import React from 'react'
// import Children from './Children'
import Children2 from './Children2'
import AddComponents from './AddComponents'

class Components2 extends React.Component {

    //key:value
    state = {
        // #12
        arrJobs: [
            //thuộc tính id, title, salary là 3 phần tử là element
            { id: 'job1', title: 'frontend', salary: '1000' },
            { id: 'job2', title: 'backend', salary: '1200' },
            { id: 'job3', title: 'tester', salary: '700' }
        ]
    }

    //job là input đầu vào
    addNewJob = (job) => {
        // console.log('check job', job);
        this.setState({
            //... là toán tử coppy, ở đây sẽ coppy lại hết dữ liệu trong arrJobs
            // , job giống push(job), đẩy dữ liệu vào thêmn arrjobs
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs.filter(item => item.id !== job.id)]
        })
    }
    render() {

        //#9
        return (
            <>
                <AddComponents
                    addNewJob={this.addNewJob} // có input đầu vào là job nên không để addNewJob()
                />


                {/* <Children
			// tên trước dấu = là định nghĩa props
                    name={this.state.firstName}
                    age={'23'}
                    //đặt tên là gì cũng được
                    //#12
                    jobs={this.state.arrJobs}
                /> */}
                <Children2
                    jobs={this.state.arrJobs}
                    deleteJob={this.deleteJob}
                />
            </>
        )

    }
}
export default Components2;