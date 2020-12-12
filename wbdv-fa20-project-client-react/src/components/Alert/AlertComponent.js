import React from 'react';
import style from './AlertComponent.module.css';

const AlertComponent = ({
                            alertMessage, displayClass = 'd-block', cancelButtonHandler = () => {
    }
                        }) => {
    return (
        <div className={`alert alert-danger ${style.alert_margin} ${displayClass}`} role="alert">
            {alertMessage}
            <button type="button" class="close" aria-label="Close" onClick={(event) => cancelButtonHandler(event)}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
};

export default AlertComponent;
