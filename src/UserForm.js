import React from 'react';
import Posts from './posts.js';
import './style.css';

const INIT_FORM = {
  userName: '',
  phoneNum: '',
  emailId: '',
  dob: '',
  password: '',
  confirmPwd: '',
  sex: 'male',
  country: '',
  terms: '',
};

const INIT_FORM_ERROR = {
  userName: '',
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

export default function UserForm() {
  const [form, setForm] = React.useState(INIT_FORM);
  const [formErrors, setFormErrors] = React.useState(INIT_FORM_ERROR);

  const validateFormField = (key) => {
    let error = '';
    const value = form[key];

    switch (key) {
      case 'userName': {
        const isValidField = /^[A-Za-z]{2,}$/.test(value);
        error = isValidField ? '' : 'Should be 2 or more characters';
        break;
      }
      case 'phoneNum': {
        const isValidField = /^[0-9]{10}$/.test(value);
        error = isValidField ? '' : 'Please enter 10 digit valid mobile number';
        break;
      }
      case 'emailId': {
        const isValidField = /^[A-Za-z0-9]{2,}@[A-Za-z0-9]{2,}$/.test(value);
        error = isValidField ? '' : 'Please valid email Id. test@gmail.com';
        break;
      }
      case 'dob': {
        error = value.length === 0 ? 'Please select the date' : '';
        break;
      }
      case 'password': {
        const isValidField = /^[A-Za-z0-9@_]{8,}$/.test(value);
        error = isValidField ? '' : 'Please enter password of min 8 characters';
        break;
      }
      case 'country': {
        if (value.length > 0 && value !== 'SELECT') {
          error = '';
          break;
        }
      }
      default:
        console.log('default msgs');
        break;
    }

    console.log(`${key} - ${value}  -  ${error}`);
    return error;
  };

  const updateForm = (key, value) => {
    setForm({ ...form, [key]: value });
    validateFormField(key);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const fields = [
      'useName',
      'phoneNum',
      'emailId',
      'dob',
      'password',
      'sex',
      'country',
      'terms',
    ];
    const errors = {};

    for (const key of fields) {
      const error = validateFormField(key);
      if (error) {
        errors[key] = error;
      }
    }

    setFormErrors({ ...formErrors, ...errors });
  };

  return (
    <div className="container">
      <h1 className="">Form</h1>
      <form className="form" onSubmit={submitHandler}>
        <div className="form-group">
          <label className="label">Name</label>
          <div className="form-control">
            <input
              type="text"
              name="userName"
              value={form.userName}
              onChange={(e) => {
                updateForm('userName', e.target.value);
              }}
            />
            <small className="error">{formErrors.userName}</small>
          </div>
        </div>

        <div className="form-group">
          <label class="label" for="phoneNum">
            Phone
          </label>
          <div className="form-control">
            <input
              type="phone"
              name="phoneNum"
              value={form.phoneNum}
              onChange={(e) => {
                updateForm('phoneNum', e.target.value);
              }}
            />
            <small className="error">{formErrors.phoneNum}</small>
          </div>
        </div>
        <div className="form-group">
          <label class="label" for="emailId">
            Email Id
          </label>
          <div className="form-control">
            <input
              type="email"
              name="emailId"
              value={form.emailId}
              onChange={(e) => {
                updateForm('emailId', e.target.value);
              }}
            />
            <small className="error">{formErrors.emailId}</small>
          </div>
        </div>
        <div className="form-group">
          <label class="label" for="dob">
            DOB
          </label>
          <div className="form-control">
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={(e) => {
                updateForm('dob', e.target.value);
              }}
            />
            <small className="error">{formErrors.dob}</small>
          </div>
        </div>
        <div className="form-group">
          <label class="label" for="password">
            Password
          </label>
          <div className="form-control">
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={(e) => {
                updateForm('password', e.target.value);
              }}
            />
            <small className="error">{formErrors.password}</small>
          </div>
        </div>
        <div className="form-group">
          <label class="label" for="sex">
            Gender
          </label>
          <div className="w-100">
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
            name="country"
            className="form-control"
            onChange={(e) => {
              updateForm('country', e.target.value);
            }}
          >
            <option>SELECT</option>
            <option>India</option>
            <option>United States</option>
          </select>
          <small className="error">{formErrors.country}</small>
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
