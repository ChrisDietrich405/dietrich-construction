import Navbar from "../Navbar";
import Container from "@mui/material/Container";

export default function Layout({ children }) {
  return (
  <>
    <Navbar />
    <Container style={{marginTop: "20px"}}>{children}</Container>;
  </>
  )
}
