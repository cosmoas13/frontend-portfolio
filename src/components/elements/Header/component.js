import React, { Component } from 'react';
import { MenuIcon } from '@heroicons/react/outline';
import { headerList } from '../../../constants/listItems';
import Image from 'next/image';
import { ICONS } from '../../../configs';
import { Link, animateScroll as scroll } from "react-scroll";

export default class Header extends Component {
  state = {
    show: false
  }

  handleClick = (e) => {
    e.preventDefault();
    const { show } = this.state;
    this.setState({ show: !show });
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  _renderPopUp() {
    return (
      <div className='fixed w-screen z-20 bg-slate-900'>
        <div className='flex flex-col px-4 md:hidden'>
          {headerList.map((item, index) => {
            return (
              <a className='text-white py-1 px-10 cursor-pointer' key={index}>
                <Link
                  activeClass="active"
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-220}
                  duration={500}
                >
                  <p className='hover:bg-gray-500 rounded-md'>{item.name}</p>
                </Link>
              </a>
            )
          })}
        </div>
      </div>
    )
  }

  render() {
    return (
      <React.Fragment>
        <nav className="px-14 py-4 mx-auto bg-slate-900 sticky top-0 z-20">
          <div className='max-w-7xl mx-auto'>
            <div className='flex justify-between items-center container'>
              <div className='cursor-pointer '>
                <Image
                  height={45}
                  width={45}
                  src={ICONS.LOGO_HEAD}
                  alt='logo-header'
                  onClick={this.scrollToTop}
                />
              </div>
              <div className="hidden space-x-8 lg:flex">
                {headerList.map((item, index) => {
                  return (
                    <Link
                      activeClass="active"
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={-200}
                      duration={500}
                    >
                      <a className='flex justify-center w-20 h-6 mx-auto text-white cursor-pointer hover:bg-gray-500 rounded-md' key={index}>
                        {item.name}
                      </a>
                    </Link>
                  )
                })}
              </div>
              <div onClick={this.handleClick} className="flex md:hidden cursor-pointer">
                <MenuIcon className='h-6 w-6 text-white' />
              </div>
            </div>
          </div>
        </nav>
        {this.state.show && this._renderPopUp()}
      </React.Fragment>
    )
  }
}
