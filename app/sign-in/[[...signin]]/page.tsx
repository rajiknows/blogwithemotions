import { SignIn } from "@clerk/nextjs";

const SignInPage =()=>{
    return <SignIn path="/sign-in" forceRedirectUrl={"/new-user"}/>
}

export default SignInPage