import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative py-8 px-6 border-t border-[#171522]/10">
      <p className="text-center text-sm text-[#171522]/40">
        &copy; {new Date().getFullYear()} Portfolio Data Analyst — {profile.name}. Tous droits
        réservés.
      </p>
    </footer>
  );
}
