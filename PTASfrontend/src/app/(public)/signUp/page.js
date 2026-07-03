import InfoSection from "@/components/signUp/infoSection";
import SignUpForm from "@/components/signUp/signUpForm";

export default function SignUp() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-black bg-gradient-to-b from-[#FF8DA1]/15 via-black to-black px-4 py-16">
            <InfoSection />
            <SignUpForm />
        </main>
    )
}
