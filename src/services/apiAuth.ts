import { supabase } from "../supabase.client";

interface LoginInput {
  username: string;
  password: string;
}

export async function login({ username, password }: LoginInput) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: username,
    password,
  });
  if (error) throw new Error(error.message);
  return data;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  return data?.user;
}
