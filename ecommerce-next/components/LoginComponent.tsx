import Image from "next/image";
import Link from "next/link";
import emailIcon from "../public/avatar/mail.svg";
import passwordIcon from "../public/avatar/lock.svg";

export default function LoginComponent(props: any) {
    return <div className="form">
        <div style={{width: "80%"}}>
            <label htmlFor="email">Email</label>
        </div>
        <div className="input-wrapper">
            <Image src={emailIcon} alt="Email icon" priority className="icon-svg" width="25" />
            <input type="email" id="email" name="email" value={props.loginForm.Email} className="form-input" placeholder="Type your email" onChange={(ev) => props.onChangeForm(ev)} />
        </div>
        <div style={{width: "80%"}}>
            <label htmlFor="password">Password</label>
        </div>
        <div className="input-wrapper">
            <Image src={passwordIcon} alt="Password icon" className="icon-svg" priority  width="25"/>
            <input type="password" id="password" className="form-input" name="password" placeholder="Type your password" value={props.loginForm.Password} onChange={(ev) => props.onChangeForm(ev)} />
        </div>
        <div className="options">
            <div className="remember-me">
                <input id="remember-checkbox" type="checkbox" checked={props.loginForm.remember} name="remember" onChange={(ev) => props.onChangeForm(ev, true, true)} className="checkbox"/> 
                <label htmlFor="remember-checkbox">Remember me</label>
            </div>
            <Link href="/login">Forgot password?</Link>
        </div>
        <div className="button-wrapper">
            <button onClick={props.login}>
                Login
            </button>
        </div>
    </div>;
}