import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const navi = useNavigate();

    const [user, setUser] = useState({
        mailid: "",
        pwd: ""
    });

    const { mailid, pwd } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/login", user);
            localStorage.setItem("userEmail", mailid);
            navi("/profile");
        } catch (error) {
            alert("Invalid login credentials");
        }
    };

    return (
        <div>
            <form onSubmit={(e) => onSubmit(e)}>
                <input type="text" placeholder="Email ID" name="mailid" value={mailid} onChange={(e) => onInputChange(e)} /><br />
                <input type="password" placeholder="Password" name="pwd" value={pwd} onChange={(e) => onInputChange(e)} /><br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
}

export default Login;
