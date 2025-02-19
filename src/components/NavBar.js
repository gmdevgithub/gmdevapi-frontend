import { useState, useEffect } from "react";

import { HashLink } from 'react-router-hash-link';
import { NavHashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  GlobeAmericasIcon,
  WifiIcon,
  TableCellsIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  let showExtras;
  let navClass;
  let variant;

  const [windowSize, setWindowSize] = useState(false);

  useEffect(() => {
    //Initialize
    const mq = window.matchMedia("(max-width: 1000px)");
    setWindowSize(mq.matches);

    //Update
    function updateSize(e) {
      setWindowSize(e.matches);
      console.log(mq.matches);
    }

    mq.addEventListener("change", updateSize);

    return function clean() {
      mq.removeEventListener("change", updateSize);
    };
  }, []);

  if (windowSize) {
    showExtras = false;
    navClass = 'scrolled-mobile';
    variant = 'dark';
  }
  else {
    showExtras = true;
    navClass = 'scrolled';
    variant = 'light';
  }

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const solutions = [
    {
      name: <>
        <a
          href="https://gmdevstore.com/"
        
        >
          gmdevstore
        </a>
      </>,
      description: 'Personal Portfolio Website for built using React.js',
      icon: GlobeAmericasIcon,

    },
    {
      name: <>
        <a
          href=""
          className="text-base font-medium text-white no-underline"

        >
          tbd
        </a>
      </>,
      description: 'Our team is experienced in a range of programming applications.FSD.com is a full stack website utilizing alot of our skillset, built in the React JS framework.',
      icon: GlobeAmericasIcon,
    },
    {
      name: <>
        <NavHashLink
          smooth to="#projects"
          className="text-base font-medium text-white "
          activeStyle={{ color: 'red' }}
        >
          Arduino nano 33 IOT project
        </NavHashLink>
      </>,
      description: 'Arduino Mircrocontroller can be controlled in real life through gmdevapi using HTTP calls.',
      icon: WifiIcon,
    },

  ]
  const callsToAction = [
    { name: 'Github', href: 'https://linktr.ee/codedumpsterfire' },
    { name: 'Example', },
  ]
  const resources = [
    {
      name: <>
        <NavHashLink
          smooth to="#endpoints"
          className="text-base font-medium text-white "
          activeStyle={{ color: 'red' }}
        >
          Endpoints
        </NavHashLink>
      </>,
      description: 'Endpoints for gmdevapi. Sorted by HTTP call type and 3rd party services',
      icon: TableCellsIcon,

    },

  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <Router>

      <Popover className={"fixed bg-black w-screen z-30"}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex items-center justify-between border-b-1 border-black py-6 md:justify-start md:space-x-10">

            <div className="flex justify-start lg:w-0 lg:flex-1 ">
              <a href="/" className="no-underline">
                <h1 className="text-white hover:text-slate-600">gmdevapi</h1>
              </a>
            </div>

            <div className=" md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className=" text-black mr-2">MENU</span>
                <Bars3Icon className="h-6 w-6 text-black" aria-hidden="true" />
              </Popover.Button>
            </div>

            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-white' : 'text-white',
                        'group inline-flex  items-center rounded-md bg-black text-black font-medium hover:text-grey-900 '
                      )}
                    >
                      <span className="">Projects using gmdevapi</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-white' : 'text-white',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >


                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-3 ring-black ring-opacity-2">
                          <div className="relative grid gap-6 ring-2 bg-black divide-solid border-2 border-slate-500  px-5 py-6 sm:gap-8 sm:p-8">
                            {solutions.map((item) => (
                              <div
                                key={item.name}
                                className="-m-3 flex items-start rounded-lg p-3 ring-1 bg-black hover:bg-slate-500"
                              >
                                <item.icon className="h-6 w-6 flex-shrink-0 text-blue-600" aria-hidden="true" />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-white no-underline">{item.name}</p>
                                  <p className="mt-1 text-sm text-blue-200 no-underline " >{item.description}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                            {callsToAction.map((item) => (
                              <div key={item.name} className="flow-root">
                                <a href={item.href} className="ml-3 no-underline text-black">{item.name}</a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <Popover className="relative" >
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-white' : 'text-white',
                        'group inline-flex  items-center rounded-md bg-black text-black font-medium hover:text-grey-900 '
                      )}
                    >
                      <span className="">Documentation</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-white' : 'text-white',
                          ' h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute  z-30 w-fit  ">
                        <div className=" overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">

                          <div className="relative grid gap-6 bg-black px-5 py-6 sm:gap-8 sm:p-8">
                            {resources.map((item) => (
                              <div
                                key={item.name}
                                className="m-3 flex items-start rounded-lg p-3 ring-1 bg-black hover:bg-slate-500"
                              >
                                <item.icon className="h-6 w-6 flex-shrink-0 text-blue-600" aria-hidden="true" />
                                <div className="ml-4">
                                  <p className=" m-3 text-2xl font-medium text-white no-underline">{item.name}</p>
                                  <p className="m-3 text-md text-blue-200 no-underline " >{item.description}</p>
                                </div>
                              </div>
                            ))}

                          </div>

                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <NavHashLink
                smooth to="#about"
                className="text-base font-medium text-white hover:text-gray-900"
                activeStyle={{ color: 'red' }}
              >
                About
              </NavHashLink>

           

            </Popover.Group>

          </div>

        </div>


        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div style={{ width: '100%', border: '2px solid black' }}>
            <Popover.Panel focus className=" z-30 absolute inset-x-0 top-0 origin-top  transition mt-1">
              <div className="divide-y-2 divide-black rounded-lg bg-blue-500 shadow-lg ring-1 ring-black ring-opacity-5 overflow-y-scroll">
                <div className="px-1 pt-1 pb-1 overflow-y-scroll">
                  <div className="flex items-center justify-between">

                    <div className=" md:hidden ">
                      <NavHashLink
                        smooth to="#about"
                        className="text-base font-medium text-black hover:text-gray-900"
                        activeStyle={{ color: 'red' }}
                      >
                        <button className=" m-1 inline-flex items-center justify-center rounded-md bg-blue-300 p-2 text-blue-500 hover:bg-blue-200 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className=" text-blue-500 ">About</span>
                        </button>
                      </NavHashLink>
                    </div>

                  

                    <div className=" m-1">
                      <Popover.Button className="inline-flex  items-center justify-center rounded-md bg-black p-2 text-red-300 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="text-xl text-blue-500 mr-1">Close </span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>

                  </div>
                  <div className="mt-1">
                    <nav className="grid gap-y-1">
                      {solutions.map((item) => (
                        <div
                          key={item.name}
                          className="m-1 flex items-start rounded-lg p-1 ring-1 bg-black hover:bg-slate-500"
                        >
                          <item.icon className="h-6 w-6 flex-shrink-0 text-blue-600" aria-hidden="true" />
                          <div className="ml-2">
                            <p className=" text-sm text-base font-medium text-white no-underline">{item.name}</p>
                            <p className=" text-xs mt-1 text-blue-200 no-underline " >{item.description}</p>
                          </div>
                        </div>
                      ))}

                      {resources.map((item) => (
                        <div
                          key={item.name}
                          className="ml-1 mr-1  flex items-start rounded-lg p-1 ring-1 bg-black hover:bg-slate-500"
                        >
                          <item.icon className="h-6 w-6 flex-shrink-0 text-blue-600" aria-hidden="true" />
                          <div className="ml-2">
                            <p className="text-sm  text-white no-underline">{item.name}</p>
                            <p className="mt- text-xs text-blue-200 no-underline " >{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </nav>
                  </div>
                </div>
             
              </div>
            </Popover.Panel>
          </div>
        </Transition>

      </Popover>

    </Router >
  )
}
