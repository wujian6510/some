import React, { Component } from 'react';
import ClientOrientation from '$pages/components/ClientOrientation';
import style from './Home.module.scss';

class Home extends Component {
  state = { }

  componentDidMount() {
    document.body.style.background = '#fff';
  }

  componentWillUnmount() {
    document.body.style.background = '';
  }

  render() {
    return (
      <div className={style.wrap}>
        <div className={style.banner}>
          <img src="./assets/images/img-banner.png" alt="智慧运营" />
        </div>
        <ClientOrientation />
      </div>
    );
  }
}

export default Home;
