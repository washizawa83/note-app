import { Folder } from '@/app/types/folder';
import { IconContext } from 'react-icons';
import { FaChevronDown, FaChevronRight, FaRegFolder } from 'react-icons/fa';

type Props = {
  folder: Folder;
  isOpen: boolean;
  onClick: () => void;
};

export const FolderItem = ({ folder, isOpen, onClick }: Props) => {
  return (
    <div
      className="hover:bg-hover mb-1 flex cursor-pointer items-center rounded-md px-2"
      onClick={onClick}
    >
      <span className="pr-2">
        <IconContext.Provider value={{ size: '10' }}>
          {isOpen ? <FaChevronDown /> : <FaChevronRight />}
        </IconContext.Provider>
      </span>
      <span className="pr-2">
        <FaRegFolder />
      </span>
      <h3 className="overflow-hidden text-ellipsis whitespace-nowrap hover:overflow-visible">
        {folder.name}
      </h3>
    </div>
  );
};
