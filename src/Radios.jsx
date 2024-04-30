/* eslint-disable react/prop-types */
export default function Radios({setFormData, formData}) {

    function handleChange (e) {
       setFormData({...formData, contact: e.target.value})
    }

  return (
    <>
      <label>
        <input onChange={handleChange} type="radio" name="contact" value="phone" />
        Phone
      </label>

      <label>
        <input onChange={handleChange} type="radio" name="contact" value="email" />
        Email
      </label>

      <label>
        <input onChange={handleChange} type="radio" name="contact" value="post" />
        Slow Mail
      </label>

      <label>
        <input onChange={handleChange} type="radio" name="contact" value="none" />
        No contact!
      </label>
    </>
  );
}
