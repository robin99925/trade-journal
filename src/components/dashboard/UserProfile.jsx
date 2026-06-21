import { useState, useRef, useEffect } from "react";
import { ChevronDown, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);

  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleLogout = () => {
    localStorage.clear();

    navigate("/", {
      replace: true,
    });
  };

  const initials =
    user?.fullName
      ?.split(" ")
      ?.map((name) => name[0])
      ?.join("")
      ?.toUpperCase() || "U";

  return (
    <div ref={dropdownRef} className="relative">
      {/* Profile Button */}
      <button
        onClick={() => setOpen(!open)}
        className="
          flex
          items-center
          gap-2
          rounded-xl
          px-2
          py-1
          hover:bg-slate-100
          transition
        "
      >
        {/* Desktop Info */}
        <div className="hidden lg:block text-right">
          <h4 className="font-medium text-sm text-slate-900">
            {user?.fullName || "User"}
          </h4>

          <p className="text-xs text-slate-400">
            {user?.email || "user@gmail.com"}
          </p>
        </div>

        {/* Avatar */}
        <div
          className="
            h-10
            w-10
            rounded-full
            bg-cyan-600
            text-white
            flex
            items-center
            justify-center
            font-semibold
            text-sm
          "
        >
          {initials}
        </div>

        <ChevronDown
          size={16}
          className={`
            transition-transform
            ${open ? "rotate-180" : ""}
          `}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute
            right-0
            top-full
            mt-2
            w-48
            bg-white
            border
            border-slate-200
            rounded-xl
            shadow-lg
            overflow-hidden
            z-50
          "
        >
          {/* Mobile User Info */}
          <div className="lg:hidden px-4 py-3 border-b">
            <h4 className="font-medium text-sm">{user?.fullName || "User"}</h4>

            <p className="text-xs text-slate-400">
              {user?.email || "user@gmail.com"}
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="
              w-full
              flex
              items-center
              gap-2
              px-4
              py-3
              text-red-600
              hover:bg-red-50
              transition
            "
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
