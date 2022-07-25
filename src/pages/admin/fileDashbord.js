import { useEffect, useState } from 'react';
import Header from '../../components/header/header';
import { useHistory } from 'react-router-dom';
import { toast, Zoom } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import pencil from '../../assets/edit.png';
import dustbin from '../../assets/delete.png';
import report from '../../assets/report.png';
import Sidebar from '../../components/sidebar';

const user = JSON.parse(localStorage.getItem('user'));
function FileDashboard() {
    const history = useHistory();
    const [data, setData] = useState();
    const [filteredData, setFilteredData] = useState();
    const [password, setPassword] = useState('');
    const [select, setSelect] = useState(null);

    const getData = async () => {
        const response = await fetch("http://127.0.0.1:8000/files")
            .then((res) => res.json())
            .catch((error) => {
                console.log(error)
            });

        console.log(response)
        setData(response)
        setFilteredData(response)
    }

    function checkSearch() {
        if (password !== '') {
            const filterData = data.filter((item) => {
                console.log(item.Actual_file.split('/')[5])
                let filename = item.Actual_file.split('/')[5]
                return filename.toLowerCase().includes(password.toLowerCase())
            })
            setFilteredData(filterData)
        } else {
            setFilteredData(data)
        }
    }
    const handleChangePassword = async (e) => {
        checkSearch();
        setPassword(e.target.value)
    }
    const handleChange = (e) => {
        setSelect(e.target.value)
    }
    useEffect(() => {
        console.log(select);
        const redirecting = async () => {
            if (select && select === 'diagrams') {
                console.log(select);
                history.push({
                    pathname: '/diagrams',
                });

            } else if (select && select === 'correlations') {
                history.push({
                    pathname: '/correlations',
                });
            }
        }
        redirecting();
    })
    useEffect(() => {
        if (!data) getData();
    }, [])

    const renderData = filteredData ? filteredData.map((file) => {
        const { id, Actual_file } = file;
        return (
            <>
                <tr key={id} className="odd gradeX">
                    <td>{id}</td>
                    <td className="center">{Actual_file.split('/')[5]}</td>
                    <td className="center d-flex" style={{ 'justifyContent': 'center' }}>
                         
                        <a style={{ 'marginRight':'10px', 'border': '1px solid #ced4da'}} href onClick={async (e) => {
                            e.preventDefault()
                            localStorage.setItem('reportId',id)
                            window.location.href = 'http://localhost:3000/report'
                        }} className="btn btn-light">
                            <img src={report} style={{ 'height': '15px' }} alt="" /> Generate Report</a>
                        <a style={{ 'margin-right': '20px', 'display': JSON.parse(localStorage.getItem('username'))['role'] === '1' ? 'block' : 'none' }} href onClick={(e) => {
                            e.preventDefault();
                            localStorage.setItem('id', id);
                            window.location.href = 'http://localhost:3000/edit'
                        }} className="btn btn-primary">
                            <img src={pencil} style={{ 'height': '15px' }} alt="" /> Edit</a>
                        <a style={{ 'display': JSON.parse(localStorage.getItem('username'))['role'] === '1' ? 'block' : 'none' }} href onClick={async (e) => {
                            e.preventDefault()
                            await fetch(`http://localhost:8000/theFile/${id}/`, {
                                method: 'DELETE',
                                headers: {
                                    'Authorization': `token ${user.key}`
                                },
                            }).then(res => res.json).then((data) => {
                                toast.success(data, {
                                    position: "top-center",
                                    autoClose: 5000,
                                    transition: Zoom,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                });
                                window.location.href = 'http://localhost:3000/files'
                            })
                        }} className="btn btn-danger">
                            <img src={dustbin} style={{ 'height': '15px' }} alt="" /> delete</a>
                        <form style={{ 'display': JSON.parse(localStorage.getItem('username'))['role'] === '2' ? 'flex' : 'none' }}>
                            <button className='btn btn-secondary' onClick={(e) => {
                                localStorage.setItem('file', id);
                                history.push({
                                    pathname: '/correlations',
                                });
                            }}>
                                Track Students Performance
                            </button>
                        </form>

                    </td>
                </tr>
            </>
        );
    }) : () => <p>no file created yet</p>

    return (
        <div >
            <Header />
            <ToastContainer />
            <div className='' style={{ 'display': 'flex', 'align-items': 'start' }}>
                <div>
                    <Sidebar element='files' />
                </div>
                <div className="row" style={{ 'margin-top': '5rem', 'height': '70vh'}}>
                    <div className="col-md-12" >
                        {/* <!-- Advanced Tables --> */}
                        <div className="panel panel-default">
                            <div className="panel-heading" style={{ "display": "flex", "flex-direction": "row", "margin-bottom": "10px" }}>
                                <h4 style={{ "text-align": "center",'marginLeft':'60px' }}>Files List</h4>
                                <a style={{
                                    "margin-left": "5vw", "justify-self": "flex-end", "text-decoration": "none",
                                    "color": "#fff", 'display': JSON.parse(localStorage.getItem('username'))['role'] === '1' ? 'block' : 'none'
                                }} className="btn btn-secondary" title="add new item"
                                    href="http://localhost:3000/upload/" >+</a>
                                <input type="text" name="search" style={{ 'borderRadius': '5px', 'width': '150px', 'margin-left': '10px' }}
                                    id="search" onChange={handleChangePassword}
                                    placeholder="Search here" value={password}
                                    required
                                />
                            </div>
                            <div className="panel-body">
                                <div className="table-responsive">
                                    <table className="table table-striped table-bordered table-hover" style={{ 'width': 'max-content', 'margin-right': '10vw', 'margin-left': '20px' }} id="dataTables-example">
                                        <thead>
                                            <tr>
                                                <th>id</th>
                                                <th>file name</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {renderData}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>

    )
}
export default FileDashboard