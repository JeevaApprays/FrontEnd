import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const navi = useNavigate();

    const [user, setUser] = useState({
        username: "",
        mailid: "",
        gender: "",
        cnum: "",
        pwd: "",
        address: ""
    });

    const { username, mailid, gender, cnum, pwd, address } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/register", user);
        navi("/login");
    };

    return (
        <div>
            <form onSubmit={(e) => onSubmit(e)}>
                <input type="text" placeholder="Username" name="username" value={username} onChange={(e) => onInputChange(e)} /><br />
                <input type="text" placeholder="Email ID" name="mailid" value={mailid} onChange={(e) => onInputChange(e)} /><br />
                <input type="text" placeholder="Gender" name="gender" value={gender} onChange={(e) => onInputChange(e)} /><br />
                <input type="text" placeholder="Contact Number" name="cnum" value={cnum} onChange={(e) => onInputChange(e)} /><br />
                <input type="password" placeholder="Password" name="pwd" value={pwd} onChange={(e) => onInputChange(e)} /><br />
                <input type="text" placeholder="Address" name="address" value={address} onChange={(e) => onInputChange(e)} /><br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
}

export default Register;
