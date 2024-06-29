import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AuthButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  let userName = "";
  if (user) {
    const { data, error } = await supabase
      .from('users')
      .select('name')
      .eq('email', user.email)
      .single();

    if (data) {
      userName = data.name;
    }

    if (error) {
      console.error('Error getting user data:', error);
    }
  }

  const signOut = async () => {
    "use server";
    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return user ? (
    <div className="flex items-center gap-4">
      <span className="hidden greet:inline">Hey, {userName}!</span>
      <form action={signOut}>
        <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-redText transition duration-150 text-primary">
          Logout
        </button>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-redText transition duration-150 text-primary"
    >
      Login
    </Link>
  );
}
