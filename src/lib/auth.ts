import { NextAuthOptions } from "next-auth";
import Github from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  debug: true,
  secret: process.env.AUTH_SECRET,
  providers: [
    Github({
      clientId: process.env.OAUTH_CLIENT_KEY!,
      clientSecret: process.env.OAUTH_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
};
