import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div className="bg-gray-700 h-[64px] flex justify-center items-center">
      <div className="w-11/12 mx-auto  flex justify-between items-center  ">
        <div>
          <h1 className="text-white">logo</h1>
        </div>
        <div className="flex gap-5">
          <Link className="text-white" href="/">
            Home
          </Link>
          <Link className="text-white" href="/profile">
            Profile
          </Link>
          {user ? (
            <>
            <Link className="text-white" href="/api/auth/logout">
               Logout
              </Link>
            </>
          ) : (
            <>
             
              <Link className="text-white" href="/api/auth/login">
                Login
              </Link>
              <Link className="text-white" href="/api/auth/register">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
