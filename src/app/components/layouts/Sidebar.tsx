'use client';

import { useState } from 'react';
import { FolderTree } from '../features/sidebar/FolderTree';
import { Folder } from '@/app/types/folder';

const MIN_SIDEBAR_WIDTH = 200;
const mockFolders: Folder[] = [
  {
    id: '1',
    name: 'Folder_1',
    parentId: null,
    files: [
      {
        id: '1',
        name: 'file1.txt',
        parentId: '1',
      },
    ],
    children: [
      {
        id: '2',
        name: 'Folder_2',
        parentId: '1',
        files: [
          {
            id: '2',
            name: 'file2.txt',
            parentId: '2',
          },
        ],
        children: [
          {
            id: '3',
            name: 'Folder_3',
            parentId: '2',
            children: [],
            files: [
              {
                id: '3',
                name: 'file3.txt',
                parentId: '3',
              },
              {
                id: '4',
                name: 'file4.txt',
                parentId: '3',
              },
            ],
          },
        ],
      },
      {
        id: '5',
        name: 'Folder_5',
        parentId: '1',
        children: [],
        files: [
          {
            id: '5',
            name: 'file5.txt',
            parentId: '5',
          },
          {
            id: '6',
            name: 'file6.txt',
            parentId: '5',
          },
          {
            id: '7',
            name: 'file-name-is-very-very-long-and-it-should-be-truncated.txt',
            parentId: '5',
          },
        ],
      },
    ],
  },
];

export const Sidebar = () => {
  const [sidebarWidth, setSidebarWidth] = useState('20%');

  const updateSidebarWidth = (e: React.DragEvent<HTMLSpanElement>) => {
    const { clientX } = e;
    const { width } = e.currentTarget.getBoundingClientRect();
    const newWidth = clientX - width;

    if (0 > newWidth) return;
    if (newWidth > MIN_SIDEBAR_WIDTH) {
      setSidebarWidth(`${newWidth}px`);
    } else {
      setSidebarWidth(`${MIN_SIDEBAR_WIDTH}px`);
    }
  };

  return (
    <div
      className="bg-light-base dark:bg-dark-base relative flex h-screen"
      style={{ width: sidebarWidth }}
    >
      <div className="w-full grow py-4">
        <div className="mb-5 flex items-center pl-4">
          <div className="h-[30px] w-[30px] bg-[url('/images/thinkronize-light.png')] bg-cover bg-center dark:bg-[url('/images/thinkronize-dark.png')]"></div>
          <h1 className="pl-2 text-lg font-bold">Thinkronize</h1>
        </div>
        <div>
          <FolderTree folders={mockFolders} />
        </div>
      </div>
      <span
        draggable
        className="absolute top-0 right-0 h-full w-[6px] cursor-col-resize bg-transparent"
        onDrag={updateSidebarWidth}
      ></span>
    </div>
  );
};
