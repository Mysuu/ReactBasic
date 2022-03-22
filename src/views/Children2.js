import React from 'react'
// #14
class Children2 extends React.Component {

    state = {
        showJobs: false
    }
    handleShowHide = () => {
        this.setState(
            {
                showJobs: !this.state.showJobs
            }
        )
    }

    handleDelete = (job) => {
        console.log('handleDelete', job)
        this.props.deleteJob(job)
    }

    render() {

        let { jobs } = this.props //destrucering
        let { showJobs } = this.state
        // let check = showJobs === true ? 'showJobs = true' : 'showJobs = false'
        // console.log('check conditional:', check);
        return (
            <>
                {/* video #12 */}
                {showJobs === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    : <>
                        <div className='job-list'>
                            {
                                jobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} $ <></> <></> <span
                                                onClick={() => this.handleDelete(item)}>x</span>
                                        </div>
                                    )
                                })
                            }

                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>

                        </div>
                    </>}
            </>
        )

    }
}

export default Children2