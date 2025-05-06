export type Folder = {
  id: string;
  parentId: string | null;
  name: string;
  children: Folder[];
  files: File[];
};

export type File = {
  id: string;
  name: string;
  parentId: string | null;
};

export type FolderTree = {
  files: string[];
  children: FolderTree[];
};
