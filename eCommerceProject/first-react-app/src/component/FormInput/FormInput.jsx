import './form-input.styles.scss';

const FormInput = ({ label, ...OtherProps }) => { //OtherProps including onChange, value in input tag
    return (
        <div className="group">
            <input className='form-input' {...OtherProps} />

            {label && (
                <label className={`${OtherProps.value.length ? 'shrink' : null} form-input-label`}>{label}</label>

            )}
        </div>
    )
};

export default FormInput;