import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import allDocData from "./allDocData";

class NavHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollToRight: false,
    };
  }

  handleNavbarToggle() {
    if(document.querySelector('.l-header').style.left === ''){
      document.querySelector('.l-header').style.left = '220px'
    } else if(document.querySelector('.l-header').style.left === '220px'){
      document.querySelector('.l-header').style.left = ''
    }
    if(document.querySelector('.l-menu').style.marginLeft === '' || document.querySelector('.l-menu').style.marginLeft === '-220px'){
      document.querySelector('.l-menu').style.marginLeft = '0'
    }else if(document.querySelector('.l-menu').style.marginLeft === '0px'){
      document.querySelector('.l-menu').style.marginLeft = '-220px'
    }
  }


  render() {
    const {scrollToRight} = this.state;
    const { location } = this.props;
    let pageId = '';
    let page = {};
    const pathname = location.pathname;
    if (allDocData && pathname.match(/^\/doc\/component\/(\S+)/)) {
      pageId = location.pathname.replace(/^\/doc\/component\//, '');
      console.log(allDocData);
      for(let i in allDocData.components){
        if(allDocData.components[i] && allDocData.components[i].name === pageId){
          page= allDocData.components[i]
        }
      }
    }else if(allDocData){
      pageId = location.pathname.replace(/^\/doc\//, '');
      page = allDocData.docs.find(d => d.id === pageId);
    }

    return (
      <header className={`l-header`}>
        <button className="navbar-toggle" onClick={this.handleNavbarToggle.bind(this)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h2 className="l-header-title">{`${(page && page.name) ? page.name.substring(0,1).toUpperCase() + page.name.substring(1) : ''} ${(page && page.title) ? page.title : ''}`}</h2>
        <nav className="l-nav">
          <ul>
            <li className="nav-item">
              <Link to="/doc/get-started">组件</Link>
            </li>
            <li className="nav-item">
              <a href="http://git.jd.com/JDC-FE/yep-react">Gitlab</a>
            </li>
            <li className="nav-item">
              <a href="http://git.jd.com/JDC-FE/yep-react/issues/new">问题反馈</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default withRouter(NavHeader);
