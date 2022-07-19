import { useEffect, useState } from 'react';
import Header from '../../components/header/header';
import 'react-toastify/dist/ReactToastify.css';
import { toast, Zoom } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import excel from '../../assets/excel-1.png';
import uploadimg from '../../assets/upload-Icon1.png';
import axios from 'axios';

function Edit() {
    const [data, setData] = useState();
    const [state, setState] = useState({
        filename: '',
        file: null,
        fileInfo: '',
        submitted: false,
        visible: false,
    });

    if (!localStorage.getItem('username')) {
        window.location.href = 'http://localhost:3000/login'
    }

    const getData = async () => {
        if (!localStorage.getItem('username')) {
            window.location.href = 'http://localhost:3000/login'
        }
        const response = await fetch("http://127.0.0.1:8000/theFile/" + localStorage.getItem('id') + "/")
            .then((res) => res.json())
            .catch((error) => {
                console.log(error)
            });
        async function makeFile(file) {
            let response = await fetch(file);
            let data = await response.blob();
            let metadata = {
                type: '.csv'
            };
            let actFile = new File([data], file, metadata);
            setState({
                filename: response.File_name,
                file: actFile,
                fileInfo: '',
                submitted: false,
                visible: false,
            })
        }
        makeFile(response.Actual_file)
        setData(response)
        setState({
            filename: response.File_name,
            file: response.Actual_file,
            fileInfo: '',
            submitted: false,
            visible: false,
        })
        console.log(state)
        console.log(response)
    }


    useEffect(() => {
        if (!data) getData();
    })
    function onMouseDown(e) {
        setState({
            visible: true
        })
    }
    function onBlur(e) {
        setState({
            visible: false
        })
    }
    function handleChangeFile(e) {
        console.log(e)
        setState({
            'file': e.target.files[0]
        })
    }
    function handleChange(e) {
        changeNotification(e.target.value);
        setState({
            [e.target.name]: e.target.value
        })

    }
    function changeNotification(file) {
        // if (file?.split('.').pop() !== '.xlsx') {
        //     alert(file?.split('.').pop());
        //     this.setState({
        //         fileInfo: '.xlsx file extension only allowed',
        //         file: ''
        //     })
        // }
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(state.file)
        if (state.file) {
            console.log(state.file.type)
            var dataInput = new FormData();
            dataInput.append('File_name',
                state.filename
            );
            dataInput.append(
                'Actual_file',
                state.file, state.file.name
            );
            console.log(JSON.parse(localStorage.getItem('user'))["key"])
            axios
                .put("http://127.0.0.1:8000/theFile/" + localStorage.getItem('id') + "/", dataInput, {
                    headers: {
                        'Authorization': `token ${JSON.parse(localStorage.getItem('user'))["key"]}`,
                    },
                })
                .then((res) => {
                    toast.success('🚀 uploaded successful!', {
                        position: "top-center",
                        autoClose: 5000,
                        transition: Zoom,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                    setTimeout(() => {
                        setState({
                            filename: '',
                            file: '',
                        });
                    }, 5000)

                })
                .catch((err) => {
                    console.log(err.response)
                    if (err.response.status === 403) {
                        toast.error("not authorized", {
                            position: "top-center",
                            autoClose: 5000,
                            transition: Zoom,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        })
                    } else if (err.response.status === 500) {
                        toast.error("internal server error", {
                            position: "top-center",
                            autoClose: 5000,
                            transition: Zoom,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        })
                    } else {
                        toast.error(err.response.request.responseText, {
                            position: "top-center",
                            autoClose: 5000,
                            transition: Zoom,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        })
                    }
                });
        } else {
            toast.error('file should match', {
                position: "top-center",
                autoClose: 5000,
                transition: Zoom,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    }
    return (
        <div className='auth-form'>
            <Header />
            <div className='form'>
                <ToastContainer />
                <h1>upload form</h1>
                <form onSubmit={handleSubmit} method='GET' action='/'>
                    <div className='input'>
                        <label id="icon" htmlFor="email">
                            <img alt='' srcSet={excel} />
                        </label>
                        <input type="text" name="filename"
                            id="filename" onChange={handleChange}
                            placeholder="Filename" value={state.filename}
                            required
                        />
                    </div>
                    <div className='input'>
                        <label id="icon" htmlFor="file">
                            <img alt='' srcSet={uploadimg} />
                        </label>
                        <input type="file" defaultValue={state.file} onChange={handleChangeFile}
                            accept=".csv" />
                    </div>
                    <div className='fileInfo' style={{
                        display: state.visible ? 'block' : 'none',
                        backgroundColor: state.fileInfo === 'Strong password' ? '#459445' : '#00bfff'
                    }}>
                    </div>
                    <div className='button'>
                        <button type='submit'>upload</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Edit;