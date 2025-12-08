export default function Footer() {
  return (
    <footer
      style={{
        padding: 20,
        textAlign: "center",
        background: "#121212",
        color: "#ffff",
      }}
    >
      © {new Date().getFullYear()} SS Music Academy
    </footer>
  );
}
