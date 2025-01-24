
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";



const PrivateRoute =async ({ children }) => {
    
    
    const { getUser } = getKindeServerSession();
    const user = await getUser();  
   
if(!user) return redirect('/api/auth/login')
  return <>{children}</>; 
};

export default PrivateRoute;
