import NavbarDark from "@/components/navbarDark";

interface EducationLayoutProps {
  children: React.ReactNode;
}

const EducationLayout = ({ children }: EducationLayoutProps) => {
  return (
    <>
      <div className="flex h-[100vh] flex-col bg-c5">
        <NavbarDark></NavbarDark>
        {children}
      </div>
    </>
  );
};

export default EducationLayout;
