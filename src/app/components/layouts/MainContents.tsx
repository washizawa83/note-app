type Props = {
  children: React.ReactNode;
};

export const MainContents = ({ children }: Props) => {
  return <div className="bg-light-sub dark:bg-dark-sub h-screen grow">{children}</div>;
};
