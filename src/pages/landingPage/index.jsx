import React, { useContext } from 'react';
import Header from '../../components/header/header';
import { userContext } from '../../appContext';
import analyzedata from '../../assets/analyzedata.png';
import arrow from '../../assets/Arrow1.png';
import storedata from '../../assets/storingdata1.png';
import readingdata from '../../assets/readingdata1.png';
import Footer from '../../components/footer';
import './index.css';

const Greeting = () => {
    const { state } = useContext(userContext);
    // const user = JSON.parse(localStorage.getItem('user'));
    // axios.get("http://127.0.0.1:8000/app/auths/current-user/", {
    //     headers: {
    //         'Authorization': `token ${user.key}`,
    //     },
    // })
    //     .then((res) => {
    //         localStorage.setItem('username', JSON.stringify(res.data))
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    var nowTime = new Date();
    var hour = nowTime.getHours()
    if (hour >= 0 && hour < 12) {
        return (<span class='username'>good Morning{' ' + state.userdata.username}</span>);
    } else if (hour >= 12 && hour < 18) {
        return (<span class='username'>good Afternoon{' ' + state.userdata.username}</span>);
    } else {
        return (<span class='username'>good Evening{' ' + state.userdata.username}</span>);
    }
}
const Body = () => {
    return (
        <div className='landing-'>
            <div className='body-section'>
                <h3>{<Greeting />}{'! '}how can we help?</h3>
            </div>
            <div className='body-section'>
                <div>
                    <div className='function-title'>Analyzing data</div>
                    <p>that is primary responsibility of this application. it helps users to analyze students data so that it can make sense.</p>
                    <div className='lower-body-section'>
                        <a href="/">
                            <span className='href-text'>
                                Do it
                            </span>
                            <img src={arrow} alt="" srcset="" />
                        </a>
                        <img src={analyzedata} alt="" srcset="" />
                    </div>
                </div>
                <div>
                    <div className='function-title'>Store data</div>
                    <p>another responsibility of this application is storage of those data. this application will protect your data file.</p>
                    <div className='lower-body-section'>
                        <a href="/upload">
                            <span className='href-text'>
                                Do it
                            </span>
                            <img src={arrow} alt="" srcset="" />
                        </a>
                        <img src={storedata} alt="" srcset="" />
                    </div>
                </div>
                <div>
                    <div className='function-title'>Read data</div>
                    <p>also this application will be able to help you read data stored in our database with their description.</p>
                    <div className='lower-body-section'>
                        <a href="/">
                            <span className='href-text'>
                                Do it
                            </span>
                            <img src={arrow} alt="" srcset="" />
                        </a>
                        <img src={readingdata} alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
class LandingPage extends React.Component {

    render() {
        return (
            <>
                <Header />
                <Body />
                <Footer />
            </>
        )
    }
}
export default LandingPage;