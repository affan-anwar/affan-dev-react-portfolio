export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {currentYear} MD AFFAN ANWAR. All rights reserved.</p>
    </footer>
  );
}