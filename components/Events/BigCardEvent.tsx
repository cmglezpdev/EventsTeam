import { Card, Badge, Avatar, Tooltip, Button } from 'flowbite-react';

export const BigCardEvent = () => {
  return (
    <div className="w-[290px] md:w-[320px]">
        <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
            className='relative'
        >
            <div className='absolute top-5 left-5'>
                <Tooltip content="Carlos Manuel">
                    <Avatar rounded={true} className='w-5 h-5' />
                </Tooltip>
            </div>

            <div className='p-2 bg-gray-300 rounded-full absolute top-3 right-3'>
                <Tooltip content="private">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                </Tooltip>
            </div>

            <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Trap to The Vegas con los amigos del verde
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            
            <div className='flex flex-wrap gap-2'>
                <Badge color="info">recreation</Badge>
                <Badge color="info">friends</Badge>
            </div>

            <Avatar.Group>
                <Avatar
                    img="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                    rounded={true}
                    stacked={true}
                />
                <Avatar
                    img="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    rounded={true}
                    stacked={true}
                />
                <Avatar
                    img="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                    rounded={true}
                    stacked={true}
                />
                <Avatar
                    img="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                    rounded={true}
                    stacked={true}
                />
                <Avatar.Counter
                    total={99}
                    href="#"
                />
            </Avatar.Group>
            <Button>
                Details
            </Button>

            <div className='flex justify-center text-lg items-baseline gap-4'>
                <span className='font-bold text-gray-700'>10/10/2021 10:00</span>
                <span className='text-sm text-gray-700 dark:text-gray-400'>10d left</span>
            </div>
        </Card>
    </div>
  )
}
