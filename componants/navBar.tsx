import Link from "next/link";
import { Container, DropdownItem, Nav, NavDropdown, Navbar, NavbarBrand } from "react-bootstrap";

const MyNavbar = () => {
    return ( 
       

        
        <Navbar variant="dark" bg="dark" sticky="top" expand="sm" collapseOnSelect>
             <Container>
            <NavbarBrand>Next news App</NavbarBrand>
            <Navbar.Toggle aria-controls="meNav" />
            <Navbar.Collapse id="neNav">
                <Nav>
                    <Nav.Link as={Link} href="/">news Articles</Nav.Link>
                    <Nav.Link as={Link} href="/search">Search</Nav.Link>
                    <NavDropdown title="categories">
                        <DropdownItem as={Link} href="/categories/business">Business</DropdownItem>
                        <DropdownItem as={Link} href="/categories/health">Health</DropdownItem>
                        <DropdownItem as={Link} href="/categories/science">science</DropdownItem>
                        <DropdownItem as={Link} href="/categories/sports">sports</DropdownItem>
                        <DropdownItem as={Link} href="/categories/technology">technology</DropdownItem>
                        <DropdownItem as={Link} href="/categories/entertainment">entertainment</DropdownItem>
                        <DropdownItem as={Link} href="/categories/general">general</DropdownItem>
                    </NavDropdown>
                    </Nav>
            </Navbar.Collapse>

            </Container>
        </Navbar>
        
     );
}
 
export default MyNavbar;