import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "@/components/submit-button";

export default function SignUp({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signUp = async (formData: FormData) => {
    "use server";

    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const supabase = createClient();

    const signUpResponse = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (signUpResponse.error) {
      console.error("Error during signUp:", signUpResponse.error);
      return { success: false, error: signUpResponse.error.message };
    }

    // Insert additional user details into the 'users' table, excluding the password since Supabase handles auth
    const { data, error } = await supabase.from("users").insert([
      { name, email, phone, role: "Customer" },
    ]);

    if (error) {
      console.error("Error inserting user details:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  };

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover hover:bg-redText duration-100 flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Back
      </Link>

      <form className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground text-redText">
        <label className="text-md" htmlFor="name">
          Name
        </label>
        <input
          className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 text-neutral-950"
          name="name"
          placeholder="Your Name"
          required
        />
        <label className="text-md" htmlFor="phone">
          Phone Number
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 text-neutral-950"
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          required
        />
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 text-neutral-950"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-8 focus:outline-none focus:ring-2 focus:ring-neutral-500 text-neutral-950"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />

        <SubmitButton
          formAction={signUp}
          className="bg-neutral-950 rounded-md px-4 py-2 text-foreground mb-2 text-primary hover-effect"
          pendingText="Signing Up..."
        >
          Sign Up
        </SubmitButton>
        <Link
          href="/auth/login"
          className="text-center text-sm text-redText hover:underline"
        >
          Already have an account? Sign In
        </Link>
        {searchParams?.message && (
          <p className="mt-4 p-4 text-redText text-center">
            {searchParams.message}
          </p>
        )}
      </form>
    </div>
  );
}
