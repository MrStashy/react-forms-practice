import { useState } from "react";
import "./App.css";
import Input from "./Input";
import TextArea from "./TextArea";
import Radios from './Radios'
import Checkbox from './Checkbox'

export default function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: '',
    complaint: '',
    contact: '',
    dataAgree: false
  })

  function handleSubmit (e) {
    e.preventDefault()
    console.log(formData)
  }


  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <h2>Complaining form!</h2>

        <Input setFormData={setFormData} formData={formData} />

        <div className="form__section-right">
          <label>
            Write your complaint
            <TextArea setFormData={setFormData} formData={formData}/>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <Radios setFormData={setFormData} formData={formData}/>
          </div>

          <Checkbox setFormData={setFormData} formData={formData}/>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
