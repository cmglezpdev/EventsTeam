import { Avatar, Badge, Tooltip } from 'flowbite-react';
import { CardFriend, NavBar } from "@/components";

import img from '../../public/aaa.png';

export default function EventPage () {
    return (
        <>
            <NavBar />
            <div className="max-w-4xl m-auto p-4">
                <div 
                    className="w-full h-64 sm:h-96 bg-gray-300 rounded max-w-4xl m-auto"
                    style={{ 
                        backgroundImage: "url('https://flowbite.com/docs/images/blog/image-1.jpg')", 
                        // backgroundImage: `url('/aaa.png')`, 
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                ></div>
        
                <div>
                    <h1 className="text-center text-3xl font-bold mt-3 mb-9">
                        Trap to The Vegas
                    </h1>
                    <div className='flex flex-wrap gap-5 justify-around'>
                        <div className='flex gap-2 items-center'>
                            <Avatar
                                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                rounded={true}
                            />
                            <div className="font-medium dark:text-white text-lg">
                                <span className='block'> Carlos Manuel González </span>
                                <span className="text-gray-500 dark:text-gray-400">
                                    cmglezpdev
                                </span>
                            </div>
                        </div>
                        <div className='my-2 w-40'>
                            <p className='font-semibold text-gray-500 text-center'> 05/03/2023 06:40 pm </p>
                            <span className='block font-light text-gray-700 dark:text-gray-200 text-sm leading-3 text-center'> 23 days left </span>
                        </div>

                    </div>

                    <div className='my-8'>
                        <h3 className='text-xl font-bold'>Members</h3>
                        <hr className='border-1 border-gray-300 mt-2' />
                        
                        <p className='mt-4'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit culpa, corporis sequi dolores officiis necessitatibus eum perspiciatis omnis? Incidunt nihil eum quas blanditiis quisquam, cum animi est molestiae quo nobis.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit culpa, corporis sequi dolores officiis necessitatibus eum perspiciatis omnis? Incidunt nihil eum quas blanditiis quisquam, cum animi est molestiae quo nobis.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit culpa, corporis sequi dolores officiis necessitatibus eum perspiciatis omnis? Incidunt nihil eum quas blanditiis quisquam, cum animi est molestiae quo nobis.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit culpa, corporis sequi dolores officiis necessitatibus eum perspiciatis omnis? Incidunt nihil eum quas blanditiis quisquam, cum animi est molestiae quo nobis.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit culpa, corporis sequi dolores officiis necessitatibus eum perspiciatis omnis? Incidunt nihil eum quas blanditiis quisquam, cum animi est molestiae quo nobis.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit culpa, corporis sequi dolores officiis necessitatibus eum perspiciatis omnis? Incidunt nihil eum quas blanditiis quisquam, cum animi est molestiae quo nobis.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit culpa, corporis sequi dolores officiis necessitatibus eum perspiciatis omnis? Incidunt nihil eum quas blanditiis quisquam, cum animi est molestiae quo nobis.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit culpa, corporis sequi dolores officiis necessitatibus eum perspiciatis omnis? Incidunt nihil eum quas blanditiis quisquam, cum animi est molestiae quo nobis.
                        </p>
                    </div>


                    <div className='my-8'>
                        <h3 className='text-2xl font-bold block w-full'>Tags</h3>
                        <hr className='mt-2 border-1 border-gray-300' />

                        <div className='flex flex-wrap gap-3 mt-4'>
                            <Badge size="sm" color="info">Cammping</Badge>
                            <Badge size="sm" color="info">Partty</Badge>
                            <Badge size="sm" color="info">Friends</Badge>
                            <Badge size="sm" color="info">Matcom</Badge>
                            <Badge size="sm" color="info">Varadero</Badge>
                        </div>
                    </div>

                    
                    <div className='my-8'>
                        <h3 className='text-2xl font-bold'>Members</h3>
                        <hr className='border-1 border-gray-300 mt-2' />
                        
                        <div className='flex flex-wrap gap-3 mt-5 justify-center'>
                            <Tooltip content="Carlos Manuel González">
                                <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded size="lg" bordered color="gray" />
                            </Tooltip>
                            
                            <Tooltip content="Carlos Manuel González">
                                <Avatar rounded size="lg" bordered color="gray" />
                            </Tooltip>

                            <Tooltip content="Carlos Manuel González">
                                <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded size="lg" bordered color="gray" />
                            </Tooltip>
                            
                            <Tooltip content="Carlos Manuel González">
                                <Avatar rounded size="lg" bordered color="gray" />
                            </Tooltip>
                            
                            <Tooltip content="Carlos Manuel González">
                                <Avatar rounded size="lg" bordered color="gray" />
                            </Tooltip>
                            
                            <Tooltip content="Carlos Manuel González">
                                <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded size="lg" bordered color="gray" />
                            </Tooltip>

                            <Tooltip content="Carlos Manuel González">
                                <Avatar rounded size="lg" bordered color="gray" />
                            </Tooltip>                                
                        </div>
                    </div>
                </div>
            </div>       
        </>
    )
}
