import { SignIn } from "@clerk/clerk-react";

// Render the sign in component in your
// custom sign in page.
export default function SignInPage() {
  return (
    <div style={styles}>
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />;
    </div>
  );
}
const styles = {
  width: "100vh",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  AlignItems: "center",
};
