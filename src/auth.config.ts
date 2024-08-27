import {NextAuthConfig} from "next-auth";

export const authConfig: NextAuthConfig = {
    pages: {
        signIn: '/login', // Página personalizada de inicio de sesión
    },
    callbacks: {
        async authorized({ auth, request }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = request.nextUrl.pathname.startsWith('/dashboard');

            if (isOnDashboard) {
                // Si está en el dashboard y autenticado, se le permite continuar
                if (isLoggedIn) return true;

                // Si no está autenticado, redirige a la página de inicio de sesión
                return false;
            } else if (isLoggedIn) {
                // Si está autenticado y no está en el dashboard, redirige al dashboard
                return Response.redirect(new URL('/dashboard', request.nextUrl));
            }

            // Permite el acceso a otras páginas sin autenticación
            return true;
        },
    },
    providers: [
        // Aquí deberías agregar tus proveedores de autenticación (e.g., GitHub, Google, etc.)
    ],
};
