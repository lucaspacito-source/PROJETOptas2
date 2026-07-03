import LoginForm from "@/components/login/loginForm";
import InfoSection from "@/components/login/infoSection";

export default function Login() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-black bg-gradient-to-b from-[#FF8DA1]/15 via-black to-black px-4 py-16">
            <InfoSection />
            <LoginForm />
        </main>
    )
}
