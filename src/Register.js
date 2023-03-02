import { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Register = () => {

    const[id,setId] = useState("");
    const[name,setName] = useState("");
    const[password,setPassword] = useState("");
    const[email,setEmail] = useState("");
    const[phone,setPhone] = useState("");
    const[country,setCountry] = useState("");
    const[address,setAddress] = useState("");
    const[gender,setGender] = useState("male");

    const navigate = useNavigate();

    const IsValidate = () =>{
        let isProceed = true 
        let errormessage = 'please enter the  true value in '

        if(id === null || id ==='')
        {
            isProceed = false;
            errormessage += 'Username'
        }
        if(name === null || name ==='')
        {
            isProceed = false;
            errormessage += ' Fullname'
        }
        if(password === null || password ==='')
        {
            isProceed = false;
            errormessage += ' Password'
        }
        
        if(email === null || email ==='')
        {
            isProceed = false;
            errormessage += ' Email'
        }
        if(!isProceed)
        {
            toast.warning(errormessage);
        }else{
            if(!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)))
            {
                isProceed = false;
                toast.warning('Enter the valid form of Email');
            }
        }
        return isProceed;
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        let regobj = {id,name,password,email,phone,country,address,gender};
        // console.log(regobj);
        if(IsValidate())
        {
        fetch('http://localhost:8000/user', {
            method: 'POST',
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify(regobj)
        }).then((res) => {
            toast.success('Registered successfully')
            navigate('/login');
        }).catch((err) => {
            toast.error('Failed: ' + err.message);
        });
        }
    }

    return (
        <div>
            <div className="top-distance offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>
                    <div className="card">
                        <div className="card-header">
                            <h1>User registeration</h1>
                        </div>
                        <div className="card-body">
                            <div className="row">

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>User Name <span className="errmsg">*</span> </label>
                                        <input value={id} onChange={e=>setId(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Password <span className="errmsg">*</span> </label>
                                        <input value={password} onChange={e=>setPassword(e.target.value)} type="password" className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Full Name <span className="errmsg">*</span> </label>
                                        <input value={name} onChange={e=>setName(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Email <span className="errmsg">*</span> </label>
                                        <input value={email} onChange={e=>setEmail(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Phone <span className="errmsg">*</span> </label>
                                        <input value={phone} onChange={e=>setPhone(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Country <span className="errmsg">*</span> </label>
                                        <select value={country} onChange={e=>setCountry(e.target.value)} className="form-control">
                                            <option value='none'>none</option>
                                            <option value='United States'>United States</option>
                                            <option value='Switzerland'>Switzerland</option>
                                            <option value='Norweign'>Norweign</option>
                                            <option value='United Kingdom'>United Kingdom</option>
                                            <option value='Germany'>Germany</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Address </label>
                                        <textarea value={address} onChange={e=>setAddress(e.target.value)} className="form-control"></textarea>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Gender </label>
                                        <br></br>
                                        <input type="radio" checked={gender==='male'} onChange={e=>setGender(e.target.value)} name="gender" value="male" className="app-cehck"></input>
                                        <label>Male</label>
                                        <input type="radio" checked={gender==='female'} onChange={e=>setGender(e.target.value)} name="gender" value="female" className="app-cehck"></input>
                                        <label>Female</label>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Register</button>
                            <a className="btn btn-danger">Back</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;