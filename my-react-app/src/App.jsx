import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function RegistrationForm() {
    const [stateList, setStateList] = useState([]);
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      zipcode: '',
      selectedState: ''

    });

   function Checkerror() {
      if (firstName == "") {
        return (console.log("Please enter Name "))
      }

    }

  };


  const clearForm = () =>{
    
  }


  const handleSubmit = (e) => { 
    e.preventDefault(); 
    alert("Account created!"); 
    clearForm(); 
  }; 
  return (
    <>
      <h1>Registration</h1>
      <div className='form' >
        <div className='name'>
          <input type="text" id='firstName' placeholder='First name' value={formData.firstName} />
          <input type="text" id='middleName' placeholder='Middle name' value={formData.middleName} />
          <input type="text" id='lastName' placeholder='Last name' value={formData.lastName} />
        </div>
        <div className='address'>
          <input type="text" name="address1" id="address1" placeholder='Address' />
          <input type="text" name="address2" id="address2" placeholder='Address2' />
        </div>
        <div className='lo'>
          <input type="text" placeholder='Zipcode' />
          <input type="text" placeholder='City' />
          <select className='state' >
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
        </div>
        <div className='contactInfo'>
          <input type="text" placeholder='Email' />
          <input type="text" placeholder='Cell number' />
        </div>
        <div className='btn'>
          <button>Submit</button>
        </div>
      </div>
    </>
  )
}

export default App
