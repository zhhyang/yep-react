import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class NavHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollToRight: false,
    };
  }

  handleNavbarToggle() {
    if(document.querySelector('.l-header').style.left == ''){
      document.querySelector('.l-header').style.left = '220px'
    } else if(document.querySelector('.l-header').style.left == '220px'){
      document.querySelector('.l-header').style.left = ''
    }
    if(document.querySelector('.l-menu').style.marginLeft == '' || document.querySelector('.l-menu').style.marginLeft == '-220px'){
      document.querySelector('.l-menu').style.marginLeft = '0'
    }else if(document.querySelector('.l-menu').style.marginLeft == '0px'){
      document.querySelector('.l-menu').style.marginLeft = '-220px'
    }


  }

  render() {
    const {scrollToRight} = this.state;
    return (
      <header className={`l-header`}>
        <button className="navbar-toggle" onClick={this.handleNavbarToggle.bind(this)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className="l-nav">
          <ul>
            <li className="nav-item">
              <Link to="/doc/get-started">组件</Link>
            </li>
            <li className="nav-item">
              <a href="http://git.jd.com/JDC-FE/lrc-m">Gitlab</a>
            </li>
            <li className="nav-item">
              <a href="http://git.jd.com/JDC-FE/lrc-m/issues/new">问题反馈</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default NavHeader;
