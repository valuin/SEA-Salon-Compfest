import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "@/components/submit-button";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    // Attempt to sign in
    const { data: authData, error: authError } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (authError) {
      return redirect(
        "/auth/login?message=Wrong email or password. Please try again."
      );
    }

    // If authentication is successful, fetch user data
    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("role")
      .eq("email", email)
      .single();

    if (userError) {
      console.error("Error fetching user data:", userError);
      return redirect("/?message=Error fetching user data");
    }

    // Check user role and redirect accordingly
    if (userData?.role === "Admin") {
      return redirect("/adminView");
    } else {
      return redirect("/");
    }
  };

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-primary bg-neutral-950 hover:bg-redText duration-200 flex items-center group text-sm"
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
          formAction={signIn}
          className="rounded-md px-4 py-2 text-primary mb-2 bg-neutral-950 hover:bg-redText hover:-translate-y-1 hover:shadow-lg hover:shadow-redText/50 active:scale-90 duration-150"
        >
          Login
        </SubmitButton>
        <Link
          href="/auth/signup"
          className="text-center text-sm text-redText hover:underline"
        >
          Don't have an account? Sign Up
        </Link>
        {searchParams?.message && (
          <p className="mt-4 p-4 text-red-800 font-semibold text-center">
            {searchParams.message}
          </p>
        )}
      </form>
    </div>
  );
}
