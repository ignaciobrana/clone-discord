import React from 'react';

import Logo from '../../assets/logo.svg';

import { Button } from './styles';

export interface Props {
    selected?: Boolean;
    isHome?: Boolean;
    hasNotifications?: Boolean;
    mentions?: Number;
}

const ServerButton: React.FC<Props> = ({
    selected,
    isHome,
    hasNotifications,
    mentions
}) => {
    return (
        <Button
            isHome={isHome}
            hasNotifications={hasNotifications}
            mentions={mentions}
            className={selected ? 'active' : ''}
        >
            {isHome && <img src={Logo} alt="RocketSeat" />}
        </Button>
    );
}

export default ServerButton;