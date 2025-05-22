import type { Metadata } from 'next';
import { LoginForm } from "@/components/auth/LoginForm";
import { AuthCard } from "@/components/auth/AuthCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Iniciar Sesión - DarkAISchool',
  description: 'Inicia sesión en tu cuenta de DarkAISchool.',
};

export default function LoginPage() {
  return (
    <AuthCard
      title="Iniciar Sesión"
      description="Accede a tu cuenta para continuar."
      footerContent={
        <>
          ¿No tienes una cuenta?{' '}
          <Link href="/auth/register" className="font-medium text-primary hover:underline">
            Regístrate aquí
          </Link>
        </>
      }
    >
      <LoginForm />
    </AuthCard>
  );
}
