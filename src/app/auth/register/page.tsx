import type { Metadata } from 'next';
import { RegisterForm } from "@/components/auth/RegisterForm";
import { AuthCard } from "@/components/auth/AuthCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Registrarse - AuthZen',
  description: 'Crea una nueva cuenta en AuthZen.',
};

export default function RegisterPage() {
  return (
    <AuthCard
      title="Crear una Cuenta"
      description="Completa el formulario para registrarte."
      footerContent={
        <>
          ¿Ya tienes una cuenta?{' '}
          <Link href="/auth/login" className="font-medium text-primary hover:underline">
            Inicia sesión aquí
          </Link>
        </>
      }
    >
      <RegisterForm />
    </AuthCard>
  );
}
