import { createAuthClient } from "@neondatabase/neon-js/auth/next";

export const authClient = createAuthClient(import.meta.env.VITE_NEON_AUTH_URL);