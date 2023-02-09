import { Footer as FRFooter } from "flowbite-react"


export const Footer = () => {
    return (
        <FRFooter container={true}>
            <div className="w-full text-center">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                    <FRFooter.Brand
                        href="https://flowbite.com"
                        src="https://flowbite.com/docs/images/logo.svg"
                        alt="Flowbite Logo"
                        name="Flowbite"
                    />
                    <FRFooter.LinkGroup>
                        <FRFooter.Link href="#"> About </FRFooter.Link>
                        
                        <FRFooter.Link href="#"> Privacy Policy </FRFooter.Link>

                        <FRFooter.Link href="#"> Contact </FRFooter.Link>
                    </FRFooter.LinkGroup>
                </div>
                <FRFooter.Divider />

                <FRFooter.Copyright href="#" by="EventsTeam" year={2023} />
            </div>
        </FRFooter>
    )
}