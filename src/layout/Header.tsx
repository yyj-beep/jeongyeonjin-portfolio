// src/layout/Header.tsx
import NavBar from "../components/NavBar";
import styles from "../styles/Header.module.css";

interface HeaderProps {
  activeSection: string;
  onNavClick: (id: string) => void;
}

export default function Header({ activeSection, onNavClick }: HeaderProps) {
  return (
    <header className={styles.header}>
      <NavBar
        activeSection={activeSection}
        onNavClick={onNavClick}
      />
    </header>
  );
}
