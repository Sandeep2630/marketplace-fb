import { SignUp } from "@clerk/clerk-react";

// Render the sign in component in your
// custom sign in page.
export default function SignUpPage() {
  return (
    <div style={styles}>
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-up" />;
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
