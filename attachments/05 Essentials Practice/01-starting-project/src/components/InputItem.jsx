export default function InputField({label, name, value, onChange}) {
    return (
        <p>
            <label>{label}</label>
            <input type="number" name={name} value={value} onChange={onChange}/>
        </p>
    );
}
