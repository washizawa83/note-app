import { Folder } from '@/app/types/folder';
import { useMemo } from 'react';
import { FolderTreeItem } from './FolderTreeItem';

type Props = {
  folders: Folder[];
};

export const deployFolders = (folders: Folder[]) => {
  return folders.map((folder) => {
    return <FolderTreeItem key={folder.id} folder={folder} />;
  });
};

export const FolderTree = ({ folders }: Props) => {
  const folderTree = useMemo(() => deployFolders(folders), [folders]);

  return <div>{folderTree}</div>;
};
