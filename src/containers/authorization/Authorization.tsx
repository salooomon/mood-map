import React, {useState} from "react";

import Form from "../../components/ui/Form.tsx";
import Input from "../../components/ui/Input.tsx";
import Button from "../../components/ui/Button.tsx";
import {IUser} from "../../core/types/typesAuth.ts";

const Authorization: React.FC = () => {

    const [userData, setUserData] = useState<IUser>({username: '', password: ''});

    const onSubmit= (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement> ) => {
        setUserData({...userData, username: e.target.value});
    }
    const onChangePassword= (e: React.ChangeEvent<HTMLInputElement> ) => {
        setUserData({...userData, password: e.target.value});
    }
    return (
        <div className="auth">
            <Form className="auth-form" onSubmit={() => onSubmit}>
                <div className="input-wrapper">
                    <div className="username">
                        <Input
                            type="text"
                            placeholder="Имя пользователя"
                            className="username-input"
                            onChange={onChangeUsername}
                            value={userData.username}
                        />
                    </div>
                    <div className="password">
                        <Input
                            type="password"
                            placeholder="Пароль"
                            className="password-input"
                            onChange={onChangePassword}
                            value={userData.password}
                        />
                    </div>
                    <Button type="submit" className="auth-button" textBtn="Войти"/>
                </div>
            </Form>
        </div>
    )
}

export default Authorization;