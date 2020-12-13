/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header.scss';

import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {
  const { user, isLogin, isRegister } = props;
  const hasUser = Object.keys(user).length === 0;
  const handleLogout = () => {
    props.logoutRequest({});
  };
  const headerClass = classNames('header', {
    isLogin,
    isRegister,
  });
  return (
    <header className={headerClass}>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {hasUser ?
            <img src={userIcon} alt='usuario' /> :
            <img src={gravatar(user.email)} alt={user.email} />}
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ?
            null : (
              <li>
                <Link to='/'>{user.name}</Link>
              </li>
            )}
          {hasUser ? (
            <li>
              <Link to='/login'>
                Iniciar Sesión
              </Link>
            </li>
          ) :
            <li><Link to='/' onClick={handleLogout}>Cerrar Sesión</Link></li>}
        </ul>
      </div>
    </header>
  );
};

Header.protoTypes = {
  user: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
