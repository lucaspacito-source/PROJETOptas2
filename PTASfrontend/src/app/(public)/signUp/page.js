import InfoSection from "@/components/signUp/infoSection";
import SignUpForm from "@/components/signUp/signUpForm";

export default function SignUp(){
    return(
        <main className="grid grid-cols-2">
            <InfoSection/>
            <SignUpForm/>
        </main>
    )
}