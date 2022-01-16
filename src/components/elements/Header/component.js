import React, { Component } from 'react';
import { MenuIcon } from '@heroicons/react/outline';
import { headerList } from '../../../constants/listItems';
import Image from 'next/image';
import { ICONS, IMAGES } from '../../../configs';

export default class Header extends Component {
  state = {
    show: false
  }

  handleClick = (e) => {
    e.preventDefault();
    const { show } = this.state;
    this.setState({ show: !show });
    console.log(this.state.show);
  }

  _renderPopUp() {
    return (
      <div className='absolute w-screen z-20 bg-slate-900'>
        <div className='flex flex-col px-4 md:hidden'>
          {headerList.map((item, index) => {
            return (
              <a className='text-white py-1 px-10 cursor-pointer' key={index}>
                <p className='hover:bg-gray-500 rounded-md'>{item.name}</p>
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
        <nav className="px-14 py-4 mx-auto bg-slate-900 sticky top-0 z-10">
          <div className='max-w-7xl mx-auto'>
            <div className='flex justify-between items-center container'>
              <div className='cursor-pointer '>
                <Image height={45} width={45} src={ICONS.LOGO_HEAD} />
              </div>
              <div className="hidden space-x-8 lg:flex">
                {headerList.map((item, index) => {
                  return (
                    <a className='flex justify-center w-20 h-6 mx-auto text-white cursor-pointer hover:bg-gray-500 rounded-md' key={index}>{item.name}</a>
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
