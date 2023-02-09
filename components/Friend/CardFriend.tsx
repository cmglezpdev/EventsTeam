import { Button, Card, Dropdown } from 'flowbite-react'; 
import Image from 'next/image';

export const CardFriend = () => {
    return (
        <div className="w-[160px]">
            <Card>
                <div className="flex flex-col items-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        className="mb-3 rounded-full shadow-lg"
                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                        alt="Bonnie image"
                        width={90}
                        height={90}
                    />
                    <h5 className="mb-1 text-base font-medium text-gray-900 dark:text-white">
                        Carlos Manuel
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        cmglezpdev
                    </span>
                </div>
            </Card>
        </div>
    )
}