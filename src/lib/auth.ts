import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "./prisma";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Mot de passe", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const business = await prisma.business.findUnique({
          where: { email: credentials.email },
        });

        if (!business || !business.password) {
          return null;
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          business.password
        );

        if (!isValid) {
          return null;
        }

        return {
          id: business.id,
          email: business.email,
          name: business.name,
          slug: business.slug,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.slug = user.slug;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.slug = token.slug;
      }
      return session;
    },
  },
};

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      slug: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    slug?: string;
  }
}