import React from 'react';
import './loginForm.css';
import gmail from '../../../assets/gmail.png';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import password from '../../../assets/password.png';

function adminOptions(props) {
        return (
            <div className='form'>
                <ToastContainer />
                <button>Upload a file</button>
                <button>Analyse a file</button>
            </div>
        )
}
export default adminOptions;