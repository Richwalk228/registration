import { use, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Modal } from "./modal";

function App() {
  const emptyPerson = {
    firstName: undefined,
    middleName: undefined,
    lastName: undefined,
    address: undefined,
    city: undefined,
    zipCode: undefined,
    cellNumber: undefined,
    email: undefined,
    state: undefined,
  };
  const [person, setPerson] = useState(emptyPerson);
  const [errors, setErrors] = useState(
    { firstname: "Missing firstname" },
    { lastName: "missing lastnmae" },
    { address: "missing address" },
    { city: "missing city" },
    { zipCode: "missing zipcode" },
    { cellNumber: "missing number" },
    { state: "missing state" },
    { email: "missing email" }
  );
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  function checkError() {
    console.log("checkError called");
    let errorList = {};
    if (!person.firstName) {
      // setErrors({ ...errors, firstName: 'Missing first name' })
      errorList = { ...errorList, firstName: "★" };
    }
    if (!person.lastName) {
      // setErrors({ ...errors, lastName: 'Missing last name' })
      errorList = { ...errorList, lastName: " ★ " };
    }
    if (!person.address) {
      // setErrors({ ...errors, address: 'Missing address' })
      errorList = { ...errorList, address: "★" };
    }
    if (!person.city) {
      // setErrors({ ...errors, city: 'Missing city' })
      errorList = { ...errorList, city: "★" };
    }
    if (!person.state) {
      // setErrors({ ...errors, state: 'Missing state' })
      errorList = { ...errorList, state: "★" };
    }
    if (!person.zipCode) {
      // setErrors({ ...errors, zipCode: 'Missing zipcode' })
      errorList = { ...errorList, zipCode: "★" };
    }
    if (!person.cellNumber) {
      // setErrors({ ...errors, cellNumber: 'Missing Phone number' })
      errorList = { ...errorList, cellNumber: "★" };
    }
    if (!person.email) {
      // setErrors({ ...errors, email: 'Missing email ' })
      errorList = { ...errorList, email: "★" };
    }
    setErrors({ ...errorList });
  }

  function handleChange(name, e) {
    setPerson((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }));
    checkError();
  }
  function handleSubmit() {
    console.log("errors in handlesubmit", errors);
    if (Object.keys(errors).length) {
      setShowErrorMessage(true);
      console.log("iserror");
      return;
    }
    setShowErrorMessage(false);
    setPerson(emptyPerson);
    saveToLocalStorage();
  }
  function closemodal (){
    setShowErrorMessage(false);
  }

  const saveToLocalStorage = () => {
    localStorage.setItem({ person, firstName }, JSON.stringify(person));
    alert("Data saved to local storage");
  };

  return (
    <>
      <h1>Registration</h1>
      <div className="form">
        <div className="name">
          <input
            type="text"
            id="firstName"
            placeholder="First name"
            onChange={(e) => handleChange("firstName", e)}
            value={person.firstName}
          />
          {errors.firstName ? (
            <span className="error-msg">{errors.firstName}</span>
          ) : null}
          <input
            type="text"
            id="middleName"
            placeholder="Middle name"
            onChange={(e) => handleChange("middleName", e)}
            value={[person.middleName]}
          />
          <input
            type="text"
            id="lastName"
            placeholder="Last name"
            value={person.lastName}
            onChange={(e) => handleChange("lastName", e)}
          />
          {errors.lastName ? (
            <span className="error-last">{errors.lastName}</span>
          ) : null}
        </div>
        <div className="address">
          <input
            type="text"
            name="address1"
            id="address"
            placeholder="Address"
            value={person.address}
            onChange={(e) => handleChange("address", e)}
          />
          {errors.address ? (
            <span className="error-address">{errors.address}</span>
          ) : null}
          <input
            type="text"
            name="address2"
            id="addressX"
            placeholder="Address2"
          />
        </div>
        <div className="lo">
          <input
            id="zipCode"
            type="text"
            placeholder="Zipcode"
            value={person.zipCode}
            onChange={(e) => handleChange("zipCode", e)}
          />
          {errors.zipCode ? (
            <span className="error-zipcode">{errors.zipCode}</span>
          ) : null}
          <input
            id="city"
            type="text"
            placeholder="City"
            value={person.city}
            onChange={(e) => handleChange("city", e)}
          />
          {errors.city ? (
            <span className="error-city">{errors.city}</span>
          ) : null}
          <select
            className="state"
            value={person.state}
            onChange={(e) => handleChange("state", e)}
          >
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
          {errors.state ? (
            <span className="error-state">{errors.state}</span>
          ) : null}
        </div>
        <div className="contactInfo">
          <input
            id="email"
            type="text"
            placeholder="Email"
            value={person.email}
            onChange={(e) => handleChange("email", e)}
          />
          {errors.email ? (
            <span className="error-email">{errors.email}</span>
          ) : null}
          <input
            id="cellNumber"
            type="text"
            placeholder="Cell number"
            value={person.cellNumber}
            onChange={(e) => handleChange("cellNumber", e)}
          />
          {errors.cellNumber ? (
            <span className="error-cellNumber">{errors.cellNumber}</span>
          ) : null}
        </div>
        <div className="btn">
          <button className="button-85" role="button" onClick={handleSubmit}>
            {" "}
            Submit
          </button>
        </div>
      </div>
      <div>
        <div className="userInfo">
          <h2>User Information</h2>
        </div>
      </div>
      <Modal close={closemodal} open={showErrorMessage} title="⚠️Error" msg= '!Please enter text into all reqired feilds!' />       
    </>
  );
}

export default App;
