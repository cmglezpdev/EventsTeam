import Link from "next/link";
import { Button, Label, TextInput } from "flowbite-react";

import { MailIcon, EyeIcon, CloseEyeIcon } from "@/components/Icons";
import { AuthLayout } from "@/layouts";


const LoginPage = () => {
    return (
        <AuthLayout title="Log In and start to create Events">

            <div className="grid place-content-center mt-20">
                <form className="w-[500px] flex flex-col gap-4">
                    <div className="my-9 text-center">
                        <h1 className="text-4xl font-bold">Log In and start to create Events</h1>
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
                            type="email"
                            rightIcon={MailIcon}
                            placeholder="example@email.com"
                            required={true}
                        />
                    </div>

                    <div>
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

                    <Button
                        className="mt-3"
                    >Log In</Button>
                
                    <div className="text-right text-blue-700 font-semibold underline">
                        <Link href='/auth/register'>Do not you have an account? You can create one here!</Link>
                    </div>

                </form>
            </div>
        </AuthLayout>
    )
}

export default LoginPage;