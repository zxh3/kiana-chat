import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL!,
});

export const signIn = async () => {
  return await authClient.signIn.social({
    provider: "google",
  });
};

export const signUp = async () => {
  return await authClient.signIn.social({
    provider: "google",
  });
};

export const signOut = async () => {
  return await authClient.signOut();
};

export const useSession = authClient.useSession;
