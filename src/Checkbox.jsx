export default function Checkbox ({setFormData, formData}) {
   
        function handleClick (e) {
            const { name } =  e.target
        e.target.checked ? setFormData({...formData, [name]: true}) : setFormData({...formData, [name]: false})
    }

    return (
        <label>
        I agree you take my data, and do whatever
        <input onClick={handleClick} type="checkbox" name="dataAgree" id="consent" />
      </label>
    )
}