// src/components/NavBar.tsx
import styles from "../styles/NavBar.module.css";

interface NavBarProps {
  activeSection: string;
  onNavClick: (id: string) => void;
}

export default function NavBar({ activeSection, onNavClick }: NavBarProps) {
  const navItem = (
    id: string,
    label: string,
    isActive: boolean
  ) => (
    <a
      href={`#${id}`}
      className={
        isActive
          ? `${styles.navItem} ${styles.active}`
          : styles.navItem
      }
      onClick={(e) => {
        e.preventDefault();
        onNavClick(id);
      }}
    >
      {label}
    </a>
  );

  return (
    <nav className={styles.navbar}>
      {navItem("home", "HOME", activeSection === "home")}

      {navItem(
        "about",
        "ABOUT ME",
        activeSection === "about" || activeSection === "skills"
      )}

      {navItem("works", "WORKS", activeSection === "works")}

      {navItem("contact", "CONTACT", activeSection === "contact")}
    </nav>
  );
}
