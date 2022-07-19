import React from 'react';
// import './loginForm.css';
import excel from '../../../assets/excel-1.png';
import uploadimg from '../../../assets/upload-Icon1.png';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function uploadForm(props) {
    return (
        <div className='form'>
            <ToastContainer />
            <h1>upload form</h1>
            <form onSubmit={props.handleSubmit} method='GET' action='/'>
                <div className='input'>
                    <label id="icon" htmlFor="email">
                        <img alt='' srcSet={excel} />
                    </label>
                    <input type="text" name="filename"
                        id="filename" onChange={props.handleChange}
                        placeholder="Filename" value={props.filename}
                        required
                    />
                </div>
                <div className='input'>
                    <label id="icon" htmlFor="file">
                        <img alt='' srcSet={uploadimg} />
                    </label>
                    <input type="file" onChange={props.handleChangeFile}
                    accept=".csv"/>
                </div>
                <div className='fileInfo' style={{
                    display: props.visible ? 'block' : 'none',
                    backgroundColor: props.fileInfo === 'Strong password' ? '#459445' : '#00bfff'
                }}>
                </div>
                <div className='button'>
                    <button type='submit'>upload</button>
                </div>
            </form>
        </div>
    )
}
export default uploadForm;