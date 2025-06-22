import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Navbar(){
    const {getUser} = getKindeServerSession();
    const user = await getUser();
    return(
        <nav className="py-6 px-3 flex items-center justify-between">
            <div className="flex items-center gap-6">

                <h1 className="text-3xl font-semibold">
                    Blog <span className=" text-blue-400">Hamza</span>
                </h1>
            </div>
            <div className="hidden sm:flex items-center gap-6">
                 <Link className="text-sm font-medium hover:text-blue-500 transition-colors" href={"/"}>Home</Link>
                 <Link className="text-sm font-medium hover:text-blue-500 transition-colors" href={"/dashboard"}>Dashboard</Link>
            </div>

            {
                user? <div className="flex items-center gap-6">
                    <h2 className="text-lg font-medium">Welcome, {user.given_name}!</h2>
                    <LogoutLink className={buttonVariants({ variant: "outline" })}>
                        Logout
                    </LogoutLink>
                </div> : <div className="flex items-center gap-6">
                    <RegisterLink className={buttonVariants({ variant: "outline" })}>
                        SignUp
                    </RegisterLink>
                    <LoginLink className={buttonVariants()}>
                        Login
                    </LoginLink>
                </div>
            }

        </nav>
    )
}