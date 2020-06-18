import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
    nickname: String;
    isBot?: Boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''} />

            <strong>{nickname}</strong>

            {isBot && <span>BOT</span>}
        </User>
    );
}

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Online - 1</Role>
            <UserRow nickname="Ignacio Braña" />

            <Role>Offline - 18</Role>
            <UserRow nickname="Diego saraza" isBot />
            <UserRow nickname="Fulano" isBot />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" isBot />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" isBot />
            <UserRow nickname="Fulano" isBot />
            <UserRow nickname="Fulano" isBot />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" isBot />
        </Container>
    );
};

export default UserList;