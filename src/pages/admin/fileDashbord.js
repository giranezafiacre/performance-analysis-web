import { useEffect, useState } from 'react';
import Header from '../../components/header/header';
import { useHistory } from 'react-router-dom';
import { toast, Zoom } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import pencil from '../../assets/edit.png';
import dustbin from '../../assets/delete.png';
import Sidebar from '../../components/sidebar';

const user = JSON.parse(localStorage.getItem('user'));
function FileDashboard() {
    const history = useHistory();
    const [data, setData] = useState();
    const [select, setSelect] = useState(null);

    const getData = async () => {
        const response = await fetch("http://127.0.0.1:8000/files")
            .then((res) => res.json())
            .catch((error) => {
                console.log(error)
            });
        setData(response)
        console.log(response)
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
        console.log('role:', JSON.parse(localStorage.getItem('username'))['role'])
        if (!data) getData();
    })

    const renderData = data ? data.map((file) => {
        const { id, Actual_file } = file;
        return (
            <>
                <tr key={id} className="odd gradeX">
                    <td>{id}</td>
                    <td className="center">{Actual_file.split('/')[5]}</td>
                    <td className="center d-flex" style={{ 'justifyContent': 'center' }}>

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
                            <select style={{ 'width': '250px' }} class="form-select" aria-label="Default select example" value={select} onChange={handleChange} onClick={(e) => {
                                localStorage.setItem('file', id)
                            }}>
                                <option selected value="">How you want to visualize data in file</option>
                                <option value="diagrams">through diagram</option>
                                <option value="correlations">factors affect performance</option>
                            </select>
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
                <div className="row" style={{ 'margin-top': '5rem', 'overflow': 'scroll' }}>
                    <div className="col-md-12" >
                        {/* <!-- Advanced Tables --> */}
                        <div className="panel panel-default">
                            <div className="panel-heading" style={{ "display": "flex", "flex-direction": "row", "margin-bottom": "10px" }}>
                                <h4 style={{ "text-align": "center", "margin-left": "40vw" }}>Items List</h4>
                                <a style={{
                                    "margin-left": "5vw", "justify-self": "flex-end", "text-decoration": "none",
                                    "color": "#fff", 'display': JSON.parse(localStorage.getItem('username'))['role'] === '1' ? 'block' : 'none'
                                }} className="btn btn-secondary" title="add new item"
                                    href="http://localhost:3000/upload/" >+</a>
                            </div>
                            <div className="panel-body">
                                <div className="table-responsive">
                                    <table className="table table-striped table-bordered table-hover" style={{ 'width': '80vw', 'margin-right': '10vw', 'margin-left': '10vw' }} id="dataTables-example">
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