import React from 'react';
// import axios from 'axios';
import Header from '../../components/header/header';
import UploadForm from '../../components/forms/uploadForm';
import Footer from '../../components/footer';
import { toast, Zoom } from 'react-toastify';
import './index.css';

class upload extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            filename: '',
            file: null,
            fileInfo: '',
            submitted: false,
            visible: false,
        }
        this.handleChangeFile = this.handleChangeFile.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }
    onMouseDown(e) {
        this.setState({
            visible: true
        })
    }
    onBlur(e) {
        this.setState({
            visible: false
        })
    }
    changeNotification(file) {
        // if (file?.split('.').pop() !== '.xlsx') {
        //     alert(file?.split('.').pop());
        //     this.setState({
        //         fileInfo: '.xlsx file extension only allowed',
        //         file: ''
        //     })
        // }
    }
    componentDidMount() {
        this.nofication = this.changeNotification();
    }
    handleChange(e) {
        // if (e.target.name === "file") {
        this.changeNotification(e.target.value);
        
        // let fileValue = this.state.fileInfo ? '' : e.target.value;
        //     if(this.state.fileInfo){

        //     }
        //     this.setState({
        //         [e.target.name]: fileValue
        //     })
        // } else {
                 // }
        this.setState({
            [e.target.name]: e.target.value
        })
   
    }
    handleChangeFile(e){
        console.log(e)
        this.setState({
            'file': e.target.files[0]
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        if (this.state.file) {
            console.log(this.state.file.type)
            var dataInput = new FormData();
            dataInput.append( 'File_name',
                this.state.filename
              ); 
              dataInput.append( 
                'Actual_file', 
                this.state.file
              ); 
            console.log(JSON.parse(localStorage.getItem('user'))["key"])
            // axios
            //     .post("http://127.0.0.1:8000/upload/", dataInput, {
            //         headers: {
            //             'Authorization': `token ${JSON.parse(localStorage.getItem('user'))["key"]}`,
            //         },
            //     })
            //     .then((res) => {
            //         toast.success('🚀 uploaded successful!', {
            //             position: "top-center",
            //             autoClose: 5000,
            //             transition: Zoom,
            //             hideProgressBar: false,
            //             closeOnClick: true,
            //             pauseOnHover: true,
            //             draggable: true,
            //             progress: undefined,
            //         })
            //         setTimeout(() => {
            //             this.setState({
            //                 filename: '',
            //                 file: '',
            //             });
            //         }, 5000)

            //     })
            //     .catch((err) => {
            //         console.log(err.response)
            //         if (err.response.status === 403) {
            //             toast.error("not authorized", {
            //                 position: "top-center",
            //                 autoClose: 5000,
            //                 transition: Zoom,
            //                 hideProgressBar: false,
            //                 closeOnClick: true,
            //                 pauseOnHover: true,
            //                 draggable: true,
            //                 progress: undefined,
            //             })
            //         } else if (err.response.status === 500) {
            //             toast.error("internal server error", {
            //                 position: "top-center",
            //                 autoClose: 5000,
            //                 transition: Zoom,
            //                 hideProgressBar: false,
            //                 closeOnClick: true,
            //                 pauseOnHover: true,
            //                 draggable: true,
            //                 progress: undefined,
            //             })
            //         } else {
            //             toast.error(err.response.request.responseText, {
            //                 position: "top-center",
            //                 autoClose: 5000,
            //                 transition: Zoom,
            //                 hideProgressBar: false,
            //                 closeOnClick: true,
            //                 pauseOnHover: true,
            //                 draggable: true,
            //                 progress: undefined,
            //             })
            //         }
            //     });
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
    render() {
        return (
            <div className='upload-form'>
                <Header />
                <UploadForm
                    filename={this.state.filename}
                    file={this.state.file}
                    submitted={this.state.submitted}
                    visible={this.state.visible}
                    fileInfo={this.state.fileInfo}
                    handleSubmit={this.handleSubmit}
                    handleChangeFile={this.handleChangeFile}
                    handleChange={this.handleChange}
                    onMouseDown={this.onMouseDown}
                    onBlur={this.onBlur}
                />
                <Footer />
            </div>
        )
    }
}
export default upload;