import "./page.css";
import Image from 'next/image';
import profileIcon from "../../public/avatar/person.svg";
import emailIcom from "../../public/avatar/mail.svg";
import passwordIcon from "../../public/avatar/lock.svg";
import Link from "next/link";

export default function Login() {
    return <div className="background">
        <div className="login-card">
            <div className="placeholder-img">
                <Image className="icon-svg big-icon" src={profileIcon} alt="asdsa" width="64" height="64" priority />
            </div>
            <div className="form">
                <div className="input-wrapper">
                    <Image src={emailIcom} alt="Email icon" priority className="icon-svg" width="25" />
                    <input type="email" className="form-input" placeholder="Email" />
                </div>
                <div className="input-wrapper">
                    <Image src={passwordIcon} alt="Password icon" className="icon-svg" priority  width="25"/>
                    <input type="password" className="form-input" placeholder="Password" />
                </div>
                <div className="options">
                    <div className="remember-me">
                        <input id="remember-checkbox" type="checkbox" className="checkbox"/> 
                        <label htmlFor="remember-checkbox">Remember me</label>
                    </div>
                    <Link href="/login">Forgot password?</Link>
                </div>
                <div className="button-wrapper">
                    <button>
                        Login
                    </button>
                </div>
            </div>
        </div>
    </div>
}