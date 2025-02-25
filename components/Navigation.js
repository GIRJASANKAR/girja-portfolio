import Link from 'next/link';
import { useRouter } from 'next/router';

const Navigation = () => {
  const router = useRouter();

  const isActive = (path) => router.pathname === path;

  return (
    <nav className="fixed top-0 w-full backdrop-blur-sm z-50 px-8 py-4">
      <div className="mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">
          GST
        </Link>
        <div className="flex gap-6 cursor-pointer">
          {[
            { path: '/', label: 'Home' },
            { path: '/experience', label: 'Experience' },
            { path: '/projects', label: 'Projects' },
            { path: '/skills', label: 'Skills' },
            { path: '/contact', label: 'Contact' },
            { path: '/about', label: 'About' },
          ].map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              className={`text-sm  ${
                isActive(path)
                  ? 'text-blue-400 font-semibold'
                  : 'text-gray-300 hover:text-white'
              } transition-colors`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
