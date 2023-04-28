import axios, { isAxiosError } from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  secret: process.env.NEXTAUTH_URL,
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "rexosei111@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        const form = new URLSearchParams();
        form.append("username", credentials.email);
        form.append("password", credentials.password);
        let response_data = {};
        try {
          const { data } = await axios.post(
            process.env.NEXT_PUBLIC_API_BASE_URL + "auth/jwt/login",
            form,
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            }
          );
          response_data = { ...response_data, ...data };
        } catch (e) {
          if (isAxiosError(e)) {
            return null;
          }
        }

        try {
          const { data } = await axios.get(
            process.env.NEXT_PUBLIC_API_BASE_URL + "auth/users/me",
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${response_data.access_token}`,
              },
            }
          );
          response_data = { ...response_data, ...data };
        } catch (e) {
          console.log("Unable to retrieve user's information");
        }

        try {
          const { data } = await axios.get(
            process.env.NEXT_PUBLIC_API_BASE_URL + "auth/users/me/api-key",
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${response_data.access_token}`,
              },
            }
          );
          response_data = { ...response_data, ...data };
        } catch (e) {
          if (isAxiosError(e)) {
            console.log("Unable to get user's API Key");
          }
        }

        const user = response_data;

        // If no error and we have user data, return it
        if (user) {
          return user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, trigger, session, user, account, profile }) {
      if (trigger === "update" && token.user !== user) {
        console.log(session);
        token.user = { ...token.user, ...session };
        return token;
      }

      user && (token.user = user);
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;

      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export default NextAuth(authOptions);
