import React from 'react';

const NavigationTabsComponent = ({
                                     tabName,
                                     tabPath = '/',
                                     currentPath,
                                     history,
                                     user_id,
                                 }) => {

    const pushToTabPath = (event) => {
        event.preventDefault();
        if (tabName.includes('Home') || tabName.includes('All Users')) {
            history.push(`/${tabPath}`);
        } else {
            history.push(`/${tabPath}/${user_id}`);
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
