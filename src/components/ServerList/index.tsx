import React from 'react';

import ServerButton from '../ServerButton';
import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
    return (
        <Container>
            <ServerButton isHome />

            <Separator />

            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton mentions={3} />
            <ServerButton />
            <ServerButton mentions={15}/>
            <ServerButton />
            <ServerButton hasNotifications/>
            <ServerButton />
            <ServerButton hasNotifications/>
            <ServerButton mentions={2}/>
            <ServerButton />
        </Container>
    );
}

export default ServerList;