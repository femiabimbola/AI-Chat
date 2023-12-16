interface MaxWidthWrapperProps {
  className?: string;
  children: React.ReactNode;
}

const MaxWidthWrapper = ({className, children}: MaxWidthWrapperProps) => {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
