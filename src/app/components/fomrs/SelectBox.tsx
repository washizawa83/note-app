type Props = {
  defaultValue?: string;
  options: {
    value: string;
    label: string;
  }[];
  handleChange: (value: string) => void;
};

export const SelectBox = ({ defaultValue, options, handleChange }: Props) => {
  return (
    <div>
      <select
        defaultValue={defaultValue}
        className="bg-form w-full rounded-md p-2 outline-none"
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
