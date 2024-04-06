import Image from "next/image";
import Link from "next/link";
import emailIcon from "../public/avatar/mail.svg";
import passwordIcon from "../public/avatar/lock.svg";
import loadingIcon from "../public/avatar/loading.svg";

export default function CreateAccount(props: any) {
    return <div className="form">
        <div className="input-wrapper">
            <Image src={emailIcon} alt="Name icon" priority className="icon-svg" width="25" />
            <input name="firstName" value={props.createAccountForm.firstName} onChange={(ev) => props.onChangeForm(ev, false, false)} type="text" className="form-input" placeholder="First Name" />
        </div>
        <div className="input-wrapper">
            <Image src={passwordIcon} alt="Password icon" className="icon-svg" priority  width="25"/>
            <input type="text" name="lastName" value={props.createAccountForm.lastName} onChange={(ev) => props.onChangeForm(ev, false, false)} className="form-input" placeholder="Last Name" />
        </div>
        <div className="input-wrapper">
            <Image src={passwordIcon} alt="Password icon" className="icon-svg" priority  width="25"/>
            <input type="email" name="email" value={props.createAccountForm.email} onChange={(ev) => props.onChangeForm(ev, false, false)} className="form-input" placeholder="Email" />
        </div>
        <div className="input-wrapper">
            <Image src={passwordIcon} alt="Password icon" className="icon-svg" priority  width="25"/>
            <input type="password" name="password" value={props.createAccountForm.password} onChange={(ev) => props.onChangeForm(ev, false, false)} className="form-input" placeholder="Password" />
        </div>
        <div className="input-wrapper">
            <Image src={passwordIcon} alt="Password icon" className="icon-svg" priority  width="25"/>
            <input type="text" maxLength={10} name="phoneNumber" value={props.createAccountForm.phoneNumber} onChange={(ev) => props.onChangeForm(ev, false, false)} className="form-input" placeholder="Phone Number" />
        </div>
        <div className="input-wrapper">
            <Image src={passwordIcon} alt="Password icon" className="icon-svg" priority  width="25"/>
            <input type="text" maxLength={8} name="cep" value={props.createAccountForm.cep} onChange={(ev) => props.onChangeForm(ev, false, false)} className="form-input" placeholder="CEP" />
            {
                props.loading ? <Image alt="loading icon" src={loadingIcon} className="loading-animation" width={25} /> : null
            }
        </div>
        <div className="input-wrapper">
            <Image src={passwordIcon} alt="Password icon" className="icon-svg" priority  width="25"/>
            <textarea style={{
                cursor: "not-allowed",
                resize: "none"
            }} rows={2} name="address" value={props.createAccountForm.address} disabled onChange={(ev) => props.onChangeForm(ev, false, false)} className="form-input" placeholder="Address"></textarea>
        </div>
        
    </div>;
}