import React from 'react';

import ChannelButton from '../ChannelButton';
import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Canales de texto</span>
                <AddCategoryIcon />
            </Category>

            <ChannelButton channelName="chat-libre"/>
            <ChannelButton channelName="trabajo"/>
            <ChannelButton channelName="proyectos"/>
            <ChannelButton channelName="valoraciones"/>
            <ChannelButton channelName="consultas"/>
        </Container>
    );
};

export default ChannelList;