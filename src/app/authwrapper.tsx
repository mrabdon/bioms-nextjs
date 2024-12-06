// import { useUser } from "@clerk/nextjs";

// const AuthWrapper = ({ children  }) => {
//   const { user, isSignedIn } = useUser();

//   if (!isSignedIn) {
//     return <p>Loading...</p>;
//   }

//   if (user.publicMetadata.requiresPasswordChange) {
//     return <Redirect to="/update-password" />;
//   }

//   return children;
// };

// export default AuthWrapper;
