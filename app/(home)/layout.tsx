import Navbar from "@/components/navbar";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <>
      <div className="flex h-[100vh] flex-col">
        <Navbar></Navbar>
        {children}
      </div>
    </>
  );
};

export default HomeLayout;
