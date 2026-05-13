import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="footer">
      <span>{profile.name}</span>
      <span>AI Eng | CS Major</span>
    </footer>
  );
}
