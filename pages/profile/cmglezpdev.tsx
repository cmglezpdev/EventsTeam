import { Tabs } from 'flowbite-react';

import { CalendarIcon, UserCicleIcon, EditIcon } from "@/components/Icons";
import { ContactsList, EditProfile, EventsProfileList, NavBar } from "@/components";
import { AppLayout } from '@/layouts';



export default function ProfilePage () {
    return (
        <AppLayout
            title="EventsTeam - Your Events"
            pageDescription="EventsTeam is a platform to create events and share them with your friends"
        >
            <section className="px-4 flex flex-col md:flex-row">
                <header className="p-3 md:max-w-[300px]">
                    <div className="w-full flex md:flex-col md:items-center items-center">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                            alt="Carlos Manuel González"
                            className="rounded-full w-24 h-24 md:w-auto md:h-auto md:max-w-[220px] md:max-h-[220px]"
                        />
                        <div className="px-3 text-gray-800 dark:text-gray-400 text-left md:text-center">
                            <h1 className="font-bold text-2xl">Carlos Manuel González</h1>
                            <h5 className="text-xl font-light text-gray-700 dark:text-gray-400">cmglezpdev</h5>
                        </div>
                    </div>
                    <p className="mt-4 font-medium text-gray-800 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus molestiae doloribus ullam in iusto eius eum eligendi nostrum.
                    </p>
                </header>

                <section className='md:border-l-2 border-gray-300 md:pl-2 w-full'>
                    <Tabs.Group style="underline">
                        <Tabs.Item
                            title="Your Events"
                            icon={CalendarIcon}
                        >
                            <EventsProfileList />
                        </Tabs.Item>

                        <Tabs.Item
                            title="Contacts"
                            icon={UserCicleIcon}
                        >
                            <ContactsList />
                        </Tabs.Item>

                        <Tabs.Item
                            title="Edit Profile"
                            icon={EditIcon}
                        >
                            <EditProfile />
                        </Tabs.Item>
                    </Tabs.Group>
                </section>
            </section>
        </AppLayout>
    )
}

