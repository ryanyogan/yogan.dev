import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth/next";

// export const runtime = "edge";
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
