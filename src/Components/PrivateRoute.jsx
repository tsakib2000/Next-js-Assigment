
export const getServerSideProps = async (context) => {
    const { getUser } = getKindeServerSession(context.req, context.res);
    const user = await getUser();
  
    if (!user) {
      return {
        redirect: {
          destination: "/api/auth/login",
          permanent: false,
        },
      };
    }
  
    return {
      props: { user },
    };
  };



const PrivateRoute =async ({ children }) => {
    
  return <>{children}</>; 
};

export default PrivateRoute;
