import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from "./Login";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  


  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone || !profession) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem(
        "Password",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

 
  

  return (
    <>
 
        <div className="register-page  section-gap">
        <div className="container">
          {" "}
          {login ? (
            <form onSubmit={handleFormSubmit} className="form-wrap">
              {flag && (
                <Alert color="primary" variant="primary">
                  "You can't register if you are logged in!"
                </Alert>
              )}
              <div class="title pb-4 text-center"><span class="subheading">Let’s Together</span><h2 class="title gallery-title">Register Now </h2></div>

              <div className="form-row">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Full Name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className="form-row">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="form-row">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div className="form-row">
                <label>Phone No.</label>
                <input
                  type="Phone"
                  className="form-control"
                  placeholder="Enter contact no"
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>

              <div className="form-row">
                <label>Choose Your City</label>
                <Form.Control
                  as="select"
                  onChange={(event) => setProfession(event.target.value)} className="form-select"
                >
                  <option>Select</option>
                  <option>Surat</option>
                  <option>Rajkot</option>
                  <option>Mumbai</option>
                  <option>Jamnagar</option>
                </Form.Control>
              </div>
              <div className="form-row">
                <button type="submit" className="btn btn-submit mb-2 mt-2">
                  Register
                </button><br></br>
                <button type="submit" onClick={handleClick} className="btn-already-login">
                  Already registered{" "}log in?
                </button>
              </div>
            </form>
          ) : (
            <Login />
            
          )}
        </div>
        </div>
    
    </>
  );
}

export default Registration; 