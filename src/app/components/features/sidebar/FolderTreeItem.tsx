import { Folder } from '@/app/types/folder';
import { FileItem } from './FileItem';
import { FolderItem } from './FolderItem';
import { deployFolders } from './FolderTree';
import { useState } from 'react';

type Props = {
  folder: Folder;
};

export const FolderTreeItem = ({ folder }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div key={folder.id}>
      <FolderItem folder={folder} isOpen={isOpen} onClick={handleClick} />
      <ul className={`relative pl-3 ${isOpen ? 'block' : 'hidden'}`}>
        <span className="absolute top-0 left-3 h-full border-l border-slate-800 dark:border-slate-500"></span>
        {folder.files.map((file) => (
          <FileItem key={file.id} file={file} />
        ))}
        {folder.children.length > 0 && <div>{deployFolders(folder.children)}</div>}
      </ul>
    </div>
  );
};
