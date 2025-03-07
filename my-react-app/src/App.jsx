import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const emptyPerson = {
    firstName: '',
    middleName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    cellNumber: '',
    email: '',
  }
  const [person, setPerson] = useState(emptyPerson);
  const [errors, setErrors] = useState({});


  function checkError() {
    console.log("checkError called")
    let errorList = {};
    if (!person.firstName) {
      // setErrors({ ...errors, firstName: 'Missing first name' })
      errorList = {...errorList, firstName: 'Missing first name'};
    }
    if (!person.lastName) {
      // setErrors({ ...errors, lastName: 'Missing last name' })
    errorList={...errorList,lastName: 'Missing last name'}
    }
    if (!person.address) {
      // setErrors({ ...errors, address: 'Missing address' })
      errorList={...errorList,address: 'Missing addres'}
    }
    if (!person.city) {
      // setErrors({ ...errors, city: 'Missing city' })
      errorList={...errorList,city: 'Missing citys'}
    }
    if (!person.state) {
      // setErrors({ ...errors, state: 'Missing state' })
    } errorList={...errorList,state: 'Missing State'}
    if (!person.zipCode) {
      // setErrors({ ...errors, zipCode: 'Missing zipcode' })
      errorList={...errorList,zipCode:'Missing zipcode'}
    }
    if (!person.cellNumber) {
      // setErrors({ ...errors, cellNumber: 'Missing Phone number' })
       errorList={...errorList,cellNumber: 'Missing number'}
    }
    if (!person.email) {
      // setErrors({ ...errors, email: 'Missing email ' })
      errorList={...errorList,email: 'Missing Email'}
    }
    setErrors({...errorList})
  }

  function getMissingKey() {
    for (const key of Object.keys(person)) {
      if (!person[key]) {
        return (console.log(`Missing ${key}`))
      }


    }



    //if (Object.keys(person)=null) 


    return

  }


  function handleChange(name, e) {
    setPerson(prevState => ({
      ...prevState,
      [name]: e.target.value,

    }));
    checkError();
  }
  //clear field after submit btn is hit 
  function handleSubmit() {
    console.log(person)
    console.log(errors)
    if (Object.keys(errors).length) {
      return;

    }
    //getMissingKey()
    // if(localStorage.getItem('firstName'))
    // localStorage.removeItem('firstName');
    //
    // console.log('Missing vital information');
    //set person to local storage//
    console.log("firing submit")
    setPerson(emptyPerson);
    saveToLocalStorage();

  };
  const saveToLocalStorage = () => {
    console.log("firing save to local storage")
    localStorage.setItem({ person, firstName }, JSON.stringify(person));
    alert('Data saved to local storage')
    console.log(localStorage.getItem(person))

  }







  return (
    <>
      <h1>Registration</h1>
      <div className='form' >
        <div className='name'>
          <input type="text" id='firstName' placeholder='First name' onChange={(e) => handleChange("firstName", e)} value={person.firstName} />
          {errors.firstName ? <span className='error-msg' >{errors.firstName}</span> : null}
          {console.log("errors is ", errors)}
          <input type="text" id='middleName' placeholder='Middle name' onChange={(e) => handleChange("middleName", e)} value={[person.middleName]} />
          <input type="text" id='lastName' placeholder='Last name' value={person.lastName} onChange={(e) => handleChange("lastName", e)} />
          {errors.lastName ? <span className='error-last'>{errors.lastName}</span> : null}
        </div>
        <div className='address'>
          <input type="text" name="address1" id="address" placeholder='Address' value={person.address} onChange={(e) => handleChange("address", e)} />
          <input type="text" name="address2" id="addressX" placeholder='Address2' />
        </div>
        <div className='lo'>
          <input id='zipCode' type="text" placeholder='Zipcode' value={person.zipCode} onChange={(e) => handleChange("zipCode", e)} />
          <input id='city' type="text" placeholder='City' value={person.city} onChange={(e) => handleChange("city", e)} />
          <select className='state' onChange={(e) => handleChange("state",e)}>
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
          <input id='email' type="text" placeholder='Email' value={person.email} onChange={(e) => handleChange("email", e)} />
          <input id='cellNumber' type="text" placeholder='Cell number' value={person.cellNumber} onChange={(e) => handleChange("cellNumber", e)} />
        </div>
        <div className='btn'>
          <button className="button-85" role="button" onClick={handleSubmit} > Submit</button>
        </div>
      </div>
      <div>

        <div className='userInfo'>
          <h2>User Information</h2>

        </div>
      </div>

    </>
  )

}

export default App
