import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {

    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;
        
        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={messagesRef} >
                <ChannelMessage
                    author="Ignacio Braña"
                    date="21/06/2020"
                    content="Hoy es mi cumpleaños"
                />

                <ChannelMessage
                    author="Andrés Salame"
                    date="21/06/2020"
                    content={
                        <>
                            <Mention>Ignacio Braña</Mention>, Necesito ayuda por favor!!
                        </>
                    }
                    hasMention
                    isBot
                />

                <ChannelMessage
                    author="Ignacio Braña"
                    date="21/06/2020"
                    content="Hoy es mi cumpleaños"
                />

                <ChannelMessage
                    author="Ignacio Braña"
                    date="21/06/2020"
                    content="Hoy es mi cumpleaños"
                />

                <ChannelMessage
                    author="Ignacio Braña"
                    date="21/06/2020"
                    content="Hoy es mi cumpleaños"
                />

                <ChannelMessage
                    author="Ignacio Braña"
                    date="21/06/2020"
                    content="Hoy es mi cumpleaños"
                />

                <ChannelMessage
                    author="Ignacio Braña"
                    date="21/06/2020"
                    content="Hoy es mi cumpleaños"
                />

                <ChannelMessage
                    author="Ignacio Braña"
                    date="21/06/2020"
                    content="Hoy es mi cumpleaños"
                />

                <ChannelMessage
                    author="Ignacio Braña"
                    date="21/06/2020"
                    content="Hoy es mi cumpleaños"
                />

                <ChannelMessage
                    author="Ignacio Braña"
                    date="21/06/2020"
                    content="Hoy es mi cumpleaños"
                />

                <ChannelMessage
                    author="Ignacio Braña"
                    date="21/06/2020"
                    content="Hoy es mi cumpleaños"
                />

                <ChannelMessage
                    author="Ignacio Braña"
                    date="21/06/2020"
                    content="Hoy es mi cumpleaños"
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar en Chat-Libre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    );
};

export default ChannelData;