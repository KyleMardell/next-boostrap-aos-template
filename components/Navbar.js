"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Navbar, Container, Nav } from "react-bootstrap";
import site from "@/lib/site-config.json";

export default function SiteNavbar() {
    const pathname = usePathname();
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        document.documentElement.classList.add("navigation-ready");
        return () => document.documentElement.classList.remove("navigation-ready");
    }, []);

    return (
        <Navbar expand="lg" variant="dark" bg="dark" sticky="top"
            aria-label="Main navigation" expanded={expanded} onToggle={setExpanded}
            onKeyDown={(event) => {
                if (event.key === "Escape" && expanded) {
                    setExpanded(false);
                    event.currentTarget.querySelector(".navbar-toggler")?.focus();
                }
            }}>
            <Container>
                <Navbar.Brand as={Link} href="/" onClick={() => setExpanded(false)}>
                    {site.businessName}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar-nav" aria-label="Toggle navigation" aria-expanded={expanded} />
                <Navbar.Collapse id="main-navbar-nav">
                    <Nav className="ms-auto">
                        {site.navigation.map(({ label, href }) => (
                            <Nav.Link key={href} as={Link} href={href}
                                active={pathname === href}
                                aria-current={pathname === href ? "page" : undefined}
                                onClick={() => setExpanded(false)}>
                                {label}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
