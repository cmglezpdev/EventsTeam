import Link from "next/link";
import { Button, Label, TextInput } from "flowbite-react";

import { MailIcon, EyeIcon, CloseEyeIcon, UserCicleIcon, AtSignIcon } from "@/components/Icons";
import { AuthLayout } from "@/layouts";


const RegisterPage = () => {
    return (
        <AuthLayout title="Register and Start to create Events">
            <div className="grid place-content-center mt-10">
                <form className="w-[500px] flex flex-col gap-4">
                    <div className="my-9 text-center">
                        <h1 className="text-4xl font-bold">Register and Start to create Events</h1>
                    </div>
                    
                    <div className="flex gap-4">
                        <div className="w-full">
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="first_name"
                                    value="First Name"
                                />
                            </div>
                            <TextInput
                                id="first_name"
                                placeholder="Bonnie"
                                required={true}
                                addon={<UserCicleIcon />}
                            />
                        </div>

                        <div className="w-full">
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="last_name"
                                    value="Last Name"
                                />
                            </div>
                            <TextInput
                                id="last_name"
                                placeholder="Green"
                                required={true}
                                addon={<UserCicleIcon />}
                            />
                        </div>
                    </div>


                    <div>
                        <div className="mb-2 block">
                            <Label
                            htmlFor="username"
                            value="Username"
                            />
                        </div>
                        <TextInput
                            id="username3"
                            placeholder="Bonnie Green"
                            required={true}
                            addon={<AtSignIcon />}
                        />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email"
                                value="Email"
                            />
                        </div>
                        <TextInput
                            id="email"
                            placeholder="name@gmail.com"
                            required={true}
                            type='email'
                            addon={<MailIcon />}
                        />
                    </div>

                    <div className="flex gap-4">
                        <div className="w-full">
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="password"
                                    value="Your Password"
                                />
                            </div>
                            <TextInput
                                id="password"
                                type="password"
                                rightIcon={CloseEyeIcon}
                                placeholder="********"
                                required={true}
                            />
                        </div>               
                        
                        <div className="w-full">
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="repeat_password"
                                    value="Repeat Password"
                                />
                            </div>
                            <TextInput
                                id="repeat_password"
                                type="password"
                                rightIcon={CloseEyeIcon}
                                placeholder="********"
                                required={true}
                            />
                        </div>
                    </div>

                    <Button
                        className="mt-3"
                    >Register</Button>
                
                    <div className="text-right text-blue-700 font-semibold underline">
                        <Link href='/auth/login'>Do you have an account? Please, login here!</Link>
                    </div>

                </form>
            </div>
        </AuthLayout>
    )
}

export default RegisterPage;