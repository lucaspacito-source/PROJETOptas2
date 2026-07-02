import LoginForm from "@/components/login/loginForm";
import InfoSection from "@/components/login/infoSection";

export default function Login() {
    return (
        <main className="grid grid-cols-2">
            <LoginForm />
            <InfoSection/>
        </main>

    )
}