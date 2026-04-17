import { RegisterForm } from "@/components/register-form";

export default function Register(){
  return(
        <main className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
          <RegisterForm />
        </main>
  )
}