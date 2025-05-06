import { File } from '@/app/types/folder';
import { FaFile } from 'react-icons/fa';

type Props = {
  file: File;
};

export const FileItem = ({ file }: Props) => {
  return (
    <li className="hover:bg-hover mb-1 flex cursor-pointer items-center rounded-md px-2 pl-6">
      <span className="pr-2">
        <FaFile />
      </span>
      <h3 className="overflow-hidden text-ellipsis whitespace-nowrap hover:overflow-visible">
        {file.name}
      </h3>
    </li>
  );
};
