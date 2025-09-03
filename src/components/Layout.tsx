import { useEffect } from 'react';

interface LayoutProps {
  title: string;
  children: React.ReactNode;
};

export const Layout = ({ title, children }: LayoutProps) => {
  useEffect(() => {
    document.title = title
    window.scrollTo(0, 0)
  }, [title]);

  return (
    <div className="w-full max-w-screen bg-black">
      <main>
        {children}
      </main>
    </div>
  );
};