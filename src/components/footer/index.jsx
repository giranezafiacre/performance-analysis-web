import locationimg from '../../assets/locationicon.png';
import phone from '../../assets/phone.png';
import gmail from '../../assets/gmail23.png';
import './index.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-col">
                <img src={locationimg} alt="" srcset="" />
                <span>343V+W6H, <br/>Kigali,<br/> Masoro</span>
            </div>
            <div className="footer-col">
                <img src={phone} alt="" srcset="" />
                <span>+250724796995</span>
            </div>
            <div className="footer-col">
                <img src={gmail} alt="" srcset="" />
                <span>info@auca.ac.rw</span>
            </div>
        </div>
    );
}
export default Footer;