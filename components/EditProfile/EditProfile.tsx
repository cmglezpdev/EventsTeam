import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import { AtSignIcon, MailIcon, UserCicleIcon } from '../Icons';

export const EditProfile = () => {
  return (
    <section className='sm:flex justify-around gap-4 md:block lg:flex'>
        <form className='flex flex-col sm:w-80'>
            <span className='text-3xl mb-4 font-semibold'>Personal Data</span>
            <div>
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

            <div>
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

            <div>
                <div className="mb-2 block">
                    <Label
                    htmlFor="bio"
                    value="Bio about you"
                    />
                </div>
                <Textarea
                    id="bio"
                    placeholder="Leave a bio..."
                    required={true}
                    rows={4}
                />
            </div>

            <Button type='submit' className='my-4'>
                Save
            </Button>
        </form>

        <form className='md:w-80 flex flex-col'>
            <span className='text-3xl mb-4 font-semibold'>Change Password</span>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="current_password"
                        value="Current Password"
                    />
                </div>
                <TextInput
                    id="current_password"
                    type="password"
                    placeholder="********"
                    required={true}
                    // rightIcon={AtSignIcon}
                />
            </div>  
        
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="new_password"
                        value="New Password"
                    />
                </div>
                <TextInput
                    id="new_password"
                    type="password"
                    placeholder="********"
                    required={true}
                    // rightIcon={AtSignIcon}
                />
            </div>  

            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="confirm_new_password"
                        value="Confirm New Password"
                    />
                </div>
                <TextInput
                    id="confirm_new_password"
                    type="password"
                    placeholder="********"
                    required={true}
                    // rightIcon={AtSignIcon}
                />
            </div>  
        
            <Button type='submit' className='my-4'>
                Save
            </Button>
        </form>
    </section>
  )
}
