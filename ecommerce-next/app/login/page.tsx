"use client"
import "./page.css";
import Image from 'next/image';
import profileIcon from "../../public/avatar/person.svg";
import arrowBack from "../../public/avatar/arrow-back.svg";
import Link from "next/link";
import Carousel from 'react-bootstrap/Carousel';
import { CarouselItem, CarouselCaption } from "react-bootstrap";
import { SyntheticEvent, useRef, useState } from "react";
import LoginComponent from "@/components/LoginComponent";
import Form from "@/components/Form";
import CreateAccount from "@/components/CreateAccount";
import ApiService from "@/services/api.service";

export default function Login() {

    const [index, setIndex] = useState(0);
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
        remember: false
    });
    const [createAccountForm, setCreateAccountForm] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        cep: "",
        phoneNumber: "",
        address: "Fill the cep, the address will be filled automatically"
    });
    const createAccountFormRef = useRef(createAccountForm);

    const [loading, setLoading] = useState(false);

    function handleSelect(ind: number) {
        setIndex(ind);
    }

    function changePage(index: number) {
        setIndex(index);
    }

    async function setFormItens(ev: any, isCheckBox = false, isLoginForm: boolean) {
        if (isLoginForm) {
            setLoginForm({
                ...loginForm,
                [ev.target!.name]: !isCheckBox ? ev.target!.value : ev.target!.checked
            });
            console.log(loginForm);
        } else {
            createAccountFormRef.current = {
                ...createAccountFormRef.current,
                [ev.target.name]: ev.target.value
            };
            setCreateAccountForm(createAccountFormRef.current);
            if (ev.target.name == "cep" && ev.target.value.length == 8) {
                setLoading(true);
                var response = await fetch(`https://viacep.com.br/ws/${ev.target.value}/json/`);
                var addressJson = await response.json();
                setTimeout(() => {
                    createAccountFormRef.current = {
                        ...createAccountFormRef.current,
                        address: `${addressJson.localidade} - ${addressJson.uf} - ${addressJson.logradouro} - ${addressJson.bairro}`
                    };
                    setCreateAccountForm(createAccountFormRef.current);
                    setLoading(false);
                }, 300);
                
            }
        }

    }

    function login() {
        console.log(loginForm);
        console.log(createAccountForm);
    }

    async function createAccount() {
        try {
            var res = await ApiService.createAccount(createAccountForm);
            console.log(res);
        } catch(error) {
            console.error(error);
        }
    }

    return <div className="background">
        <div className="login-card">
            {
                index == 1 ? <Image className="back-button" src={arrowBack} alt="Back to login button" width="25" onClick={(ev) => changePage(0)} /> : null
            }
            <div className="placeholder-img">
                <Image className="icon-svg icon-transition" style={{width: index == 0 ? "100px" : "45px"}} src={profileIcon} alt="asdsa" width="64" height="64" priority />
            </div>
            <Carousel activeIndex={index} controls={false} indicators={false} interval={null} slide={true}>
                <CarouselItem>
                    <LoginComponent onChangeForm={setFormItens} loginForm={loginForm} login={login} />
                </CarouselItem>
                <CarouselItem>
                    <CreateAccount loading={loading} createAccountForm={createAccountForm} onChangeForm={setFormItens}  /> 
                </CarouselItem>
            </Carousel>
            <div className="sign-up-div">
                {
                    index == 0 ?
                        <h4 onClick={(ev) => changePage(1)}>SIGN UP</h4>
                    :
                        <h4 onClick={(ev) => createAccount()}>CREATE ACCOUNT</h4>
                }
            </div>
        </div>
    </div>
}