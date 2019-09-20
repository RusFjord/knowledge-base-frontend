import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faUser, faNewspaper, faTools} from '@fortawesome/free-solid-svg-icons';

const sideMenu = [
    {
        icon: <FontAwesomeIcon icon={faHome} />,
        text: 'Портал знаний',
        url: '#'
    },
    {
        icon: <FontAwesomeIcon icon={faBriefcase} />,
        text: 'Категории',
        url: '#'
    },
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        text: 'Роли',
        url: '#'
    },
    {
        icon: <FontAwesomeIcon icon={faNewspaper} />,
        text: 'Типы статей',
        url: '#'
    },
    {
        icon: <FontAwesomeIcon icon={faTools} />,
        text: 'Настройки',
        url: '#'
    },
];

export const getSideMenu = () => {
    return sideMenu;
}