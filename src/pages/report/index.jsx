import React from 'react';
import Header from '../../components/header/header';
import { toast, Zoom } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import pencil from '../../assets/edit.png';
import dustbin from '../../assets/delete.png';
import Sidebar from '../../components/sidebar';
import ReactToPrint from 'react-to-print';

const user = JSON.parse(localStorage.getItem('user'));
function RenderMarks(props) {
    console.log(props)
    let i = 0
    const courses = props.courses.map((course) => {
        i++;
        return (
            <td key={i}>
                {props.data[course][props.condition]}
            </td>);
    })
    return courses
}
class TableReport extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading" style={{ "display": "flex", "flex-direction": "row", "margin-bottom": "10px" }}>
                    <h4 style={{ "text-align": "left", "margin-left": "10vw" }}>Report on {this.props.date}</h4>

                </div>
                <div className="panel-body">
                    <div style={{'overflow':'auto'}} className="table-responsive">
                        <table className="table table-striped table-bordered table-hover"
                            style={{ 'width': 'max-content', 'margin-right': '10vw', 'margin-left': '20px' }}
                            id="dataTables-example">
                            <thead>
                                <tr>
                                    <th>courses/factors</th>
                                    <RenderCourses courses={this.props.courses} />
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        students succeeded
                                    </td>
                                    <RenderMarks condition='allSuccess' courses={this.props.courses} data={this.props.data} />
                                </tr>
                                <tr>
                                    <td>
                                        students failed
                                    </td>
                                    <RenderMarks condition='allFailed' courses={this.props.courses} data={this.props.data} />
                                </tr>
                                <tr>
                                    <td>
                                        Male Succeeded
                                    </td>
                                    <RenderMarks condition='maleSuccess' courses={this.props.courses} data={this.props.data} />
                                </tr>
                                <tr>
                                    <td>
                                        female Succeeded
                                    </td>
                                    <RenderMarks condition='femaleSuccess' courses={this.props.courses} data={this.props.data} />
                                </tr>
                                <tr>
                                    <td>
                                        Male failed
                                    </td>
                                    <RenderMarks condition='maleFailed' courses={this.props.courses} data={this.props.data} />
                                </tr>
                                <tr>
                                    <td>
                                        female failed
                                    </td>
                                    <RenderMarks condition='femaleFailed' courses={this.props.courses} data={this.props.data} />
                                </tr>
                                <tr>
                                    <td>
                                        Healthy students succeeded
                                    </td>
                                    <RenderMarks condition='normalSuccess' courses={this.props.courses} data={this.props.data} />
                                </tr>
                                <tr>
                                    <td>
                                        Students with chronic diseases succeeded
                                    </td>
                                    <RenderMarks condition='chronicSuccess' courses={this.props.courses} data={this.props.data} />
                                </tr>
                                <tr>
                                    <td>
                                        Students with disability succeeded
                                    </td>
                                    <RenderMarks condition='disabSuccess' courses={this.props.courses} data={this.props.data} />
                                </tr>
                                <tr>
                                    <td>
                                        Healthy students failed
                                    </td>
                                    <RenderMarks condition='normalFailed' courses={this.props.courses} data={this.props.data} />
                                </tr>
                                <tr>
                                    <td>
                                        Students with chronic diseases failed
                                    </td>
                                    <RenderMarks condition='chronicFailed' courses={this.props.courses} data={this.props.data} />
                                </tr>
                                <tr>
                                    <td>
                                        Students with disability failed
                                    </td>
                                    <RenderMarks condition='disabFailed' courses={this.props.courses} data={this.props.data} />
                                </tr>
                                <tr>
                                    <td>
                                        Mean
                                    </td>
                                    <RenderMarks condition='allMean' courses={this.props.courses} data={this.props.data} />
                                </tr>
                                <tr>
                                    <td>
                                        Male mean
                                    </td>
                                    <RenderMarks condition='maleMean' courses={this.props.courses} data={this.props.data} />
                                </tr>
                                <tr>
                                    <td>
                                        female mean
                                    </td>
                                    <RenderMarks condition='femaleMean' courses={this.props.courses} data={this.props.data} />
                                </tr>
                                <tr>
                                    <td>
                                        Healthy students mean
                                    </td>
                                    <RenderMarks condition='normalMean' courses={this.props.courses} data={this.props.data} />
                                </tr>
                                <tr>
                                    <td>
                                        Mean of students with chronic diseases
                                    </td>
                                    <RenderMarks condition='chronicMean' courses={this.props.courses} data={this.props.data} />
                                </tr>
                                <tr>
                                    <td>
                                        Mean of students with disability
                                    </td>
                                    <RenderMarks condition='disabMean' courses={this.props.courses} data={this.props.data} />
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        )
    }
}
function RenderCourses(props) {
    console.log(props.courses)
    let i = 0
    const courses = props.courses.map((course) => {
        i++;
        return (
            <th key={i}>
                {course}
            </th>);
    })
    return courses
}
class Report extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date().toString(),
            data: null,
            courses: []
        }
        this.getData = this.getData.bind(this)
    }

    getData = async () => {
        const response = await fetch("http://127.0.0.1:8000/report-file/" + localStorage.getItem('reportId') + "/")
            .then((res) => res.json())
            .catch((error) => {
                console.log(error)
            });

        console.log(response)
        this.setState({ courses: Object.keys(response['report']), data: response['report'] })
    }


    componentDidMount() {
        if (!this.state.data) {
            this.getData = this.getData();
        }
    }

    render() {

        return (
            <div >
                <Header />
                <ToastContainer />
                <div className='' style={{ 'display': 'flex', 'align-items': 'start' }}>
                    <div>
                        <Sidebar element='files' />
                    </div>
                    <div className='d-block' style={{'overflow': 'scroll'}}>
                        <div className="row" style={{ 'margin-top': '5rem', 'marginLeft': '10px', 'height': '60vh', 'overflowX': 'scroll','overflowY': 'scroll' }}>
                            <TableReport data={this.state.data}
                                date={this.state.date} courses={this.state.courses}
                                ref={(response) => (this.componentRef = response)} />

                        </div>
                        <br />
                        <ReactToPrint
                            content={() => this.componentRef}
                            trigger={() => <button style={{ 'width': '200px', 'marginLeft': '40px' }}
                                className="btn btn-primary">Print Report!</button>} />


                    </div>
                </div>
            </div>
        );
    }

}
export default Report