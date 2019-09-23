import React, { Component } from 'react';

import './Login.scss';

export default class Login extends Component {
    render() {
        return (
            <div className='container'>
                <form className="auth-form">
                    <div className="form-group">
                        <label htmlFor="inputLogin">Логин</label>
                        <input type="email" className="form-control" id="inputLogin" placeholder="Введите логин" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword">Пароль</label>
                        <input type="password" className="form-control" id="inputPassword" placeholder="Пароль" />
                    </div>
                    <button type="submit" className="btn btn-primary">Авторизация</button>
                </form>
            </div>
        )
    }
}
