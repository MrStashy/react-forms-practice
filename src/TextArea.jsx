/* eslint-disable react/prop-types */
export default function TextArea ({formData, setFormData}) {

    function handleChange (e) {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
    }

    return (
        <textarea
        onChange={handleChange}
        value={formData.complaint}
        name="complaint"
        rows="10"
        placeholder="You can complain here"
      ></textarea>
    )
}