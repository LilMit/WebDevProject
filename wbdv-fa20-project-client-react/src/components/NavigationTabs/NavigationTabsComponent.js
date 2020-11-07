import React from 'react';

const NavigationTabsComponent = ({
    tabName,
    tabPath = '/',
    currentPath,
    history,
}) => {

    const pushToTabPath = (event) => {
        event.preventDefault();
        if(!currentPath.includes(tabPath)) {
            history.push(`/${tabPath}`);
        }
    } 

    return (
        currentPath.includes(tabPath) ? (
            <li className="nav-item active">
                <a role="button" className="nav-link" onClick={(event) => pushToTabPath(event)}>
                    {tabName}
                </a>
            </li>
            ) : (
                <li className="nav-item">
                    <a role="button" className="nav-link" onClick={(event) => pushToTabPath(event)}>
                        {tabName}
                    </a>
                </li>
            )
    )
}

export default NavigationTabsComponent;