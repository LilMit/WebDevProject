import React from 'react';

const FormFieldComponent = ({ label, inputValue, onChangeEventHandler, divClass, placeholder, id, inputType }) => {
    return (
        <div className={`form-group row ${divClass}`}>
            <div className="col-sm-2 col-form-label">
                <span>{label}</span>
            </div>
            <div className="col-sm-10">
                <input type = {inputType} id={id} placeholder={placeholder} className= "form-control" value={inputValue} onChange={(event) => onChangeEventHandler(event)} />
            </div>
        </div>
    );
};

export default FormFieldComponent;