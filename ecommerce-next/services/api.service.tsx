export default class ApiService {

    static baseApi = "http://localhost:5030/api";

    static async createAccount(account: newAccount) {

        var userDTO = {
            "FirstName": account.firstName,
            "Email": account.email,
            "LastName": account.lastName,
            "Password": account.password,
            "PhoneNumber": account.phoneNumber,
            "Cep": account.cep,
            "FullAddress": account.address,
        }


        var res = await fetch(this.baseApi + "/user/createAccount", {
            headers: {
                "Content-type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(userDTO),
        });
        console.log(res);
        return await res.json();
    }

}

interface newAccount {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    cep: string;
    phoneNumber: string;
    address: string;
}