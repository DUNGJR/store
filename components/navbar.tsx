import Link from "next/link";
import Container from "./ui/container";
import MainNav from "./mainnav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <img src="http://mba.com.vn/vnt_upload/weblink/logo.png" alt="MBA" />
          </Link>
          <MainNav data={categories}></MainNav>
          <NavbarActions></NavbarActions>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
