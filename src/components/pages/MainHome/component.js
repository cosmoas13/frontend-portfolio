import React, { Component } from 'react';
import Header from '../../elements/Header';
import photo from '../../../static/images/kevin.jpg';
import Image from 'next/image';
import { contactList, aboutList, skillList, workList, projectList } from '../../../constants/listItems';
import CardAbout from '../../elements/CardAbout';
import CardSkill from '../../elements/CardSkill';
import CardEducation from '../../elements/CardWorking';
import CardWorking from '../../elements/CardWorking';

export default class MainHome extends Component {
  _renderContact = () => {
    return (
      <div className="flex justify-between items-center px-14 py-4 mx-auto bg-slate-900">
        <div className='container text-white'>
          <div className='flex flex-col justify-center items-center'>
            <div className='mt-0'>
              <div className="cc-profile-image flex justify-center">
                <a href="#"><img src={photo.src} /></a>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center mt-48'>
              <h1 className='font-bold text-3xl mb-2'>Kevin</h1>
              <h1 className='font-bold text-2xl leading-7'>Software Engineer</h1>
            </div>
            <div className='flex flex-row items-center justify-center mt-10 mb-12 z-10'>
              <div className='flex items-center justify-center rounded-md w-36 h-10 bg-slate-400 hover:bg-slate-500 mx-1 text-base cursor-pointer'>
                <p className='text-white leading-3'>Hire Me</p>
              </div>
              <div className='flex items-center justify-center rounded-md w-36 h-10 bg-slate-400 hover:bg-slate-500 mx-1 text-base cursor-pointer'>
                <p className='text-white leading-3'>Download CV</p>
              </div>
            </div>
            <section className='pb-0 absolute mt-32'>
              <div className='flex flex-row items-center justify-center mt-72'>
                {contactList.map((item, index) => {
                  return (
                    <div key={index} className='flex items-center justify-center rounded-full w-14 h-14 mx-2 bg-slate-400 hover:bg-slate-500 cursor-pointer transition duration-150 ease-in-out'>
                      <a
                        className='flex items-center justify-center'
                        href={item.url}
                        target="_blank"
                        data-bs-toggle="tooltip-top"
                        title={item.title}
                      >
                        <Image src={item.icon} />
                      </a>
                    </div>
                  )
                })}
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        {this._renderContact()}
        <main>
          <div className="max-w-7xl mx-auto my-11 py-6 sm:px-24 lg:px-5 bg-gray-100 rounded-md shadow-md hover:shadow-lg cursor-pointer">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <CardAbout data={aboutList} />
            </div>
          </div>
          <div className='text-center text-2xl font-bold'>Professional Skill</div>
          <div className="max-w-7xl mx-auto my-11 py-6 sm:px-24 lg:px-5 bg-gray-100 rounded-md shadow-md hover:shadow-lg cursor-pointer">
            <div className="grid grid-cols-4 lg:grid-cols-7">
              <CardSkill data={skillList} />
            </div>
          </div>
          <div className='text-center text-2xl font-bold'>Work Experience</div>
          <div className="max-w-7xl mx-auto my-11 py-6 sm:px-24 lg:px-5 bg-gray-100 rounded-md shadow-md hover:shadow-lg cursor-pointer">
            <div className="flex flex-wrap sm:-m-4 mx-4 mb-4 mt-4">
              <CardEducation data={workList} />
            </div>
          </div>
          <div className='text-center text-2xl font-bold'>Project Experience</div>
          <div className="max-w-7xl mx-auto my-11 py-6 sm:px-24 lg:px-5 bg-gray-100 rounded-md shadow-md hover:shadow-lg cursor-pointer">
            <div className="flex flex-wrap sm:-m-4 mx-4 mb-4 mt-4">
              <CardWorking data={projectList} />
            </div>
          </div>
        </main>
      </React.Fragment>
    )
  }
}
