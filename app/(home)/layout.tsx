import Navbar from "./_components/navbar";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <>
      <Navbar></Navbar>
      {children}
    </>
  );
};

export default HomeLayout;
