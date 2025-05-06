'use client';

import { useState } from 'react';
import { FolderTree } from '../features/sidebar/FolderTree';
import { Folder } from '@/app/types/folder';
import { FaCog } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import Link from 'next/link';
import { Logo } from '../ui/Logo';

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
      <div className="flex w-full grow flex-col">
        <div className="mb-3 py-4 pl-4">
          <Logo />
        </div>
        <div className="grow overflow-y-auto">
          <FolderTree folders={mockFolders} />
        </div>
        <div className="flex items-center p-2">
          <Link href="/pages/settings">
            <IconContext.Provider value={{ size: '18px' }}>
              <FaCog />
            </IconContext.Provider>
          </Link>
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
