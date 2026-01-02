export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 py-6 text-center">
      <p>
        © {new Date().getFullYear()} Profit Calculator. All rights reserved.
      </p>
    </footer>
  );
}
