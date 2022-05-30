import React from 'react';
import Posts from './posts.js';
import './style.css';

const INIT_FORM = {
  firstName: '',
  lastName: '',
  phoneNum: '',
  emailId: '',
  dob: '',
  password: '',
  confirmPwd: '',
  sex: 'male',
  country: '',
  terms: '',
  error: {},
};

const INIT_FORM_ERROR = {
  firstName: '',
  lastName: '',
  phoneNum: '',
  emailId: '',
  dob: '',
  password: '',
  confirmPwd: '',
  sex: 'male',
  country: '',
  terms: '',
  isValid: false,
};

export default function App() {
  const [form, setForm] = React.useState(INIT_FORM);
  const [formErrors, setFormErrors] = React.useState(INIT_FORM_ERROR);

  const validateFormField = (key, value) => {
    let error = '';
    switch (key) {
      case 'firstName':
        error = value.length < 3 ? 'Should be more than 2 chars length' : '';
        break;
      case 'lastName':
        error = value.length < 3 ? 'Should be more than 2 chars length' : '';
        break;
      default:
        console.log('default msgs');
        break;
    }

    console.log(`${value}  -  ${error}`);
    const isValid = error ? false : true;
    setFormErrors({ ...formErrors, [key]: error, isValid: isValid });
  };

  const updateForm = (key, value) => {
    validateFormField(key, value);
    setForm({ ...form, [key]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('form status : ', formErrors.isValid);
  };

  return (
    <div className="container">
      <h1 className="">Form</h1>
      <form className="form" onSubmit={submitHandler}>
        <div className="form-group">
          <label className="label">First Name</label>
          <div className="form-control">
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={(e) => {
                updateForm('firstName', e.target.value);
              }}
            />
            {formErrors.firstName && (
              <div className="error">{formErrors.firstName}</div>
            )}
          </div>
        </div>
        <div className="form-group">
          <label className="label">Last Name</label>
          <div className="form-control">
            <input
              type="text"
              name="lastName"
              className="form-control"
              value={form.lastName}
              onChange={(e) => {
                updateForm('lastName', e.target.value);
              }}
            />
            {formErrors.lastName && (
              <div className="error">{formErrors.lastName}</div>
            )}
          </div>
        </div>
        <div className="form-group">
          <label class="label" for="phoneNum">
            Phone
          </label>
          <input
            type="phone"
            name="phoneNum"
            className="form-control"
            value={form.phoneNum}
            onChange={(e) => {
              updateForm('phoneNum', e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label class="label" for="emailId">
            Email Id
          </label>
          <input
            type="email"
            name="emailId"
            className="form-control"
            value={form.emailId}
            onChange={(e) => {
              updateForm('emailId', e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label class="label" for="dob">
            DOB
          </label>
          <input
            type="date"
            name="dob"
            className="form-control"
            value={form.dob}
            onChange={(e) => {
              updateForm('dob', e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label class="label" for="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={form.password}
            onChange={(e) => {
              updateForm('password', e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label class="label" for="sex">
            Gender
          </label>
          <div className="form-control">
            <input
              type="radio"
              name="male"
              checked={form.sex === 'male'}
              onChange={(e) => {
                updateForm('sex', 'male');
              }}
            />
            <label>Male</label>
            <input
              type="radio"
              name="female"
              checked={form.sex === 'female'}
              onChange={(e) => {
                updateForm('sex', 'female');
              }}
            />
            <label>Female</label>
          </div>
        </div>
        <div className="form-group">
          <label class="label" for="Country">
            Country
          </label>
          <select
            className="form-control"
            onChange={(e) => {
              updateForm('country', e.target.value);
            }}
          >
            <option>SELECT</option>
            <option>India</option>
            <option>United States</option>
          </select>
        </div>
        <div className="w-100">
          <input
            type="checkbox"
            name="terms"
            onChange={(e) => {
              updateForm('terms', e.target.checked);
            }}
          />
          <label>Agree to terms and conditions*</label>
        </div>
        <div className="w-100">
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
        <div className="form-group">
          <div className="form-control">
            <textarea rows="4" value={JSON.stringify(formErrors)} />
          </div>
        </div>
      </form>
    </div>
  );
}
