/* eslint-disable react/prop-types */
export default function Input( {setFormData, formData} ) {

  function handleChange (e) {
    const { name, value } = e.target
    setFormData({...formData, [name]: value})
  }

  return (
    <div className="form__section-left">
      <label>
        Full name
        <input onChange={handleChange} type="text" name="fullName" required value={formData.fullName} />
      </label>
      <label>
        Address
        <input onChange={handleChange} type="text" name="address" value={formData.address} />
      </label>
      <label>
        Phone Number
        <input onChange={handleChange} value={formData.phoneNumber} type="tel" name="phoneNumber" />
      </label>

      <label>
        Email
        <input onChange={handleChange} type="email" name="email" value={formData.email}/>
      </label>
    </div>
  );
}
