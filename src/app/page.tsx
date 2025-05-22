import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock } from "lucide-react"; // Mantendremos el icono Lock por ahora
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="items-center text-center">
          <div className="mb-4 flex items-center text-3xl font-bold text-primary">
            <Lock size={36} className="mr-2" />
            DarkAISchool
          </div>
          <CardTitle className="text-2xl">Bienvenido a DarkAISchool</CardTitle>
          <CardDescription>Tu plataforma de aprendizaje con IA.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col space-y-4">
          <Button asChild size="lg">
            <Link href="/auth/login">Iniciar Sesión</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/auth/register">Registrarse</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
