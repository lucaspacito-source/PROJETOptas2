import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function RegisterForm({
  className,
  ...props
}) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
    <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Criar Conta</CardTitle>
          <CardDescription>
            Registre-se com seu email ou redes sociais
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <Button variant="outline" type="button">
                  Entrar com Apple
                </Button>
                <Button variant="outline" type="button">
                  Entrar com Google
                </Button>
              </Field>
              <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                Ou continue com
              </FieldSeparator>

              {/* Campo de Nome de Usuário */}
              <Field>
                <FieldLabel htmlFor="username">Nome de Usuário</FieldLabel>
                <Input
                  id="username"
                  type="text"
                  placeholder="Seu nome de usuário"
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input id="email" type="email" placeholder="seu@email.com" required />
              </Field>

              <Field>
                <FieldLabel htmlFor="password">Senha</FieldLabel>
                <Input id="password" type="password" required />
              </Field>

              <Field>
                <FieldLabel htmlFor="confirmPassword">Confirmar Senha</FieldLabel>
                <Input id="confirmPassword" type="password" required />
              </Field>

              <Field>
                <Button type="submit">Registrar</Button>
                <FieldDescription className="text-center">
                  Já tem uma conta? <a href="/login">Faça login</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        Ao continuar, você concorda com nossos <a href="#">Termos de Serviço</a>{" "}
        e <a href="#">Política de Privacidade</a>.
      </FieldDescription>
    </div>
  );
}
