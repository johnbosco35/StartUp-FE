import { Link } from "react-router-dom";
import logo from "../assets/edu.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background px-10">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-[150px]" />
        </div>
        {/* <nav className="hidden md:flex items-center gap-6">
          <Link
            to="#services"
            className="text-sm font-medium hover:text-emerald-600 transition-colors"
          >
            Services
          </Link>
          <Link
            to="#benefits"
            className="text-sm font-medium hover:text-emerald-600 transition-colors"
          >
            Benefits
          </Link>
          <Link
            to="#educators"
            className="text-sm font-medium hover:text-emerald-600 transition-colors"
          >
            Educators
          </Link>
          <Link
            to="#testimonials"
            className="text-sm font-medium hover:text-emerald-600 transition-colors"
          >
            Testimonials
          </Link>
        </nav> */}
        <div className="flex items-center gap-4">
          {/* <button className="hidden md:flex h-10 px-4 py-2 text-sm font-medium border rounded-md border-input bg-background hover:bg-accent hover:text-accent-foreground">
            Log in
          </button> */}
          <Link to={"selcet-option"}>
            <button className="h-10 px-4 py-2 text-sm font-medium text-white rounded-md bg-emerald-600 hover:bg-emerald-700">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
