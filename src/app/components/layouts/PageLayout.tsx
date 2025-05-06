type Props = {
  children: React.ReactNode;
};

export const PageLayout = ({ children }: Props) => {
  return <main className="min-h-screen overflow-y-auto p-4">{children}</main>;
};
