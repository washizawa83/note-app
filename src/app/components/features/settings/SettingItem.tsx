type Props = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export const SettingItem = ({ title, description, children }: Props) => {
  return (
    <div className="mb-5">
      <h3 className="text-md font-bold">{title}</h3>
      <p className="mb-2 text-sm text-gray-500">{description}</p>
      {children}
    </div>
  );
};
