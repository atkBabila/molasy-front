import React from 'react'

const Register = () => {
  return (
    <div>
      <form action="#">
                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                    <div>
                        <label htmlFor="first-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                        <input type="text" name="first-name" id="first-name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="John" required=""/>
                    </div>
                    <div>
                        <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                        <input type="text" name="last-name" id="last-name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Doe" required=""/>
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="name@company.com" required=""/>
                    </div>
                    <div>
                        <label htmlFor="user-permissions" className="inline-flex items-center mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            User Permissions
                            <button type="button" data-tooltip-target="tooltip-dark" data-tooltip-style="dark" className="P_IkL3rPmLoJg_v9DE3m">
                                <svg aria-hidden="true" className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-900 dark:hover:text-white jt7K__cy_iHy7aMDMaLX" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                                <span className="">Details</span>
                            </button>
                            <div id="tooltip-dark" role="tooltip" className="absolute z-10 invisible inline-block py-2 px-3 text-sm font-medium text-white transition-opacity rounded-lg ltPMSn_g3PKyqeS8vmZk AtHBVur__RVIv6BHiI4a Usqns9w__onp5CWoXDJ0 dark:bg-gray-700" data-popper-placement="bottom" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(-16px, 365.333px, 0px);">
                                User permissions, part of the overall user management process, are access granted to users to specific resources such as files, applications, networks, or devices.
                                <div className="" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate3d(156.667px, 0px, 0px);"></div>
                            </div>
                        </label>
                        <select id="user-permissions" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option value="Operational">Operational</option>
                            <option value="NO">Non Operational</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="•••••••••" required=""/>
                    </div>                        
                    <div>
                        <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                        <input type="password" name="confirm-password" id="confirm-password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="•••••••••" required=""/>
                    </div>
                    <div className="">
                        <label htmlFor="biography" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Biography</label>
                        <div className="w-full bg-gray-50 rounded-lg border text-gray-200 dark:bg-gray-700 dark:border-gray-600">
                            <div className="flex justify-between items-center py-2 px-3 border-b dark:border-gray-600">
                                <div className="flex flex-wrap items-center justify-between">
                                    <div className="flex items-center ">
                                        <button type="button" className="text-gray-500 p-2 rounded-md cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                            <svg aria-hidden="true" className="-ml-1 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd"></path></svg>
                                            <span className="sr-only">Attach file</span>
                                        </button>
                                        <button type="button" className="text-gray-500 p-2 rounded-md cursor-pointer  hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                            <svg aria-hidden="true" className="-ml-1 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                                            <span className="sr-only">Embed map</span>
                                        </button>
                                        <button type="button" className="text-gray-500 p-2 rounded-md cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                            <svg aria-hidden="true" className="-ml-1 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path></svg>
                                            <span className="sr-only">Upload image</span>
                                        </button>
                                        <button type="button" className="text-gray-500 p-2 rounded-md cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                            <svg aria-hidden="true" className="-ml-1 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                            <span className="sr-only">Format code</span>
                                        </button>
                                        <button type="button" className="text-gray-500 p-2 rounded-md cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                            <svg aria-hidden="true" className="-ml-1 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd"></path></svg>
                                            <span className="sr-only">Add emoji</span>
                                        </button>
                                    </div>
                                    <div className="flex-wrap items-center">
                                        <button type="button" className="text-gray-500 p-2 rounded-md cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                            <svg aria-hidden="true" className="-ml-1 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                                            <span className="">Add list</span>
                                        </button>
                                        <button type="button" className="text-gray-500 p-2 rounded-md cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                            <svg aria-hidden="true" className="-ml-1 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path></svg>       
                                            <span className="">Settings</span>
                                        </button>
                                        <button type="button" className="text-gray-500 p-2 rounded-md cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                            <svg aria-hidden="true" className="-ml-1 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                                            <span className="">Timeline</span>
                                        </button>
                                        <button type="button" className="text-gray-500 p-2 rounded-md cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                            <svg aria-hidden="true" className="-ml-1 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                            <span className="">Download</span>
                                        </button>
                                    </div>
                                </div>
                                <button type="button" data-tooltip-target="tooltip-fullscreen" className="text-gray-500 p-2 rounded-md cursor-pointer lk_Qvs8GwdI2Q78kOWK_ hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                    <svg aria-hidden="true" className="-ml-1 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                                    <span className="">Full screen</span>
                                </button>
                                <div id="tooltip-fullscreen" role="tooltip" className="absolute z-10 invisible inline-block py-2 px-3 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg ltPMSn_g3PKyqeS8vmZk AtHBVur__RVIv6BHiI4a M4SAv60iaayh2_Cd_QyF KB__y25H2tVACg2mjb4C Usqns9w__onp5CWoXDJ0 dark:bg-gray-700" data-popper-placement="top" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(270px, -714.667px, 0px);">
                                    Show full screen
                                    <div className="tooltip-arrow" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate3d(68.6667px, 0px, 0px);"></div>
                                </div>
                            </div>
                            <div className="py-2 px-4 bg-white rounded-b-lg ">
                                <textarea id="biography" rows="8" className="block psGSaoX3vEaTuVjCVZ1M w-full text-sm text-gray-800 bg-white border-0  W83fbcqTDAidAC5iVTZ9 dark:text-white dark:placeholder-gray-400" placeholder="Write a message here" required=""></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload avatar</label>
                        <div className="items-center w-full U4m6yFbNbl_ea9gVo2Uw">
                            <img className="mb-4 w-36 h-36 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png" alt="Helene avatar"/>
                            <div className="w-full">
                                <input className="w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"/>
                                <p className="mt-1 text-sm text-gray-500 p-2 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                            </div>
                        </div>
                    </div>
                    <div className=" ">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="role">Assign Role</label>
                        <div className="FLfl_xS1XCloWU2wRi87 U4m6yFbNbl_ea9gVo2Uw _rT9gacXyvSO1fCjLFak">
                            <div className="flex items-center _ryfipzijJEI18CFfJIm">
                                <input id="inline-checkbox" type="checkbox" value="" name="role" className="w-4 h-4 _iRPzRRWy2UNkvZFG8iO rounded-md border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 apRlbPZRJ4JWA5RVdURT X3ifvK6lzvLzkZabaIQd dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="inline-checkbox" className="QGosQoeY76W_hWM2rgwJ text-sm font-medium text-gray-900 dark:text-gray-300">Administrator</label>
                            </div>
                            <div className="flex items-center _ryfipzijJEI18CFfJIm">
                                <input id="inline-2-checkbox" type="checkbox" value="" name="role" className="w-4 h-4 _iRPzRRWy2UNkvZFG8iO rounded-md border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 apRlbPZRJ4JWA5RVdURT X3ifvK6lzvLzkZabaIQd dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="inline-2-checkbox" className="QGosQoeY76W_hWM2rgwJ text-sm font-medium text-gray-900 dark:text-gray-300">Member</label>
                            </div>
                            <div className="flex items-center _ryfipzijJEI18CFfJIm">
                                <input id="inline-checked-checkbox" type="checkbox" value="" name="role" className="w-4 h-4 _iRPzRRWy2UNkvZFG8iO rounded-md border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 apRlbPZRJ4JWA5RVdURT X3ifvK6lzvLzkZabaIQd dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="inline-checked-checkbox" className="QGosQoeY76W_hWM2rgwJ text-sm font-medium text-gray-900 dark:text-gray-300">Viewer</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</div>
                        <label htmlFor="user-status" className="inline-flex relative items-center cursor-pointer">
                            <input type="checkbox" value="" id="user-status" className=" Ir_3keQp2U_tRwFg0MKl peer"/>
                            <div className="ypyUJHicDkra304ep7aN _XD2a764x49B1E2F9f8X vyuwQLkFO7jUAv3Xr23z Dnj0ogUHZN4gOWLCHXLZ _JZSa8UH1c4Rht2OTpd1 peer-focus:!ring-primary-300 dark:peer-focus:!ring-primary-800 n8e6ORKgPTnY6zgs5HS7 dark:bg-gray-700 zhlCfkwCn_73JaWE_YcJ Av0zyfIAtQINPnghn1Ep _65OCOFfX87s_U0LJ_A6 oLWw28gnC96HQ9VA2SRr vNgNHxw1TmJlGsGiWwkE jz0oGE5gdlQA00faWPe9 Zi5q_0DLWoq4hAVbVzys bVt3BVZ46xaUYr6L3OO1 _CEZTqyenfGIL3S8wxEK uDoc30nvL6bvD5j__ut1 RUwUPfKrMjd1tFT_MqPN HIHsRs2SVRbwqjBIPvyv __S_L5UN9mO5P9IRevrX dark:border-gray-600 peer-checked:bg-primary-600"></div>
                            <span className="Ljy4iPgx864jXhJbnInL text-sm font-medium p-2 dark:text-gray-300">Inactive</span>
                        </label>  
                    </div>
                </div>
                <div className="flex items-center justify-around">
                    <button type="submit" className="w-full text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        <svg className="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                        Add new user
                    </button>
                    <button data-modal-toggle="createUserdefaultModal" type="button" className="w-full inline-flex bg-primary-700 p-2 items-center bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg border text-gray-700 text-sm font-medium px-5 py-2.5 hover:text-gray-900 m_8FxTcpOfmK___hAaJ6 dark:bg-gray-700 dark:text-gray-300 c4d_cyxeprbSxLoRnbIr dark:hover:text-white dark:hover:bg-gray-600 P53YJBBtllZv8_nFHFHW">
                        Discard
                    </button>
                </div>
            </form>
    </div>
  )
}

export default Register