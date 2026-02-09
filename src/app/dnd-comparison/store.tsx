"use client";

import React from 'react';
import { create } from 'zustand';

export interface Block {
  id: string;
  color: string;
  height: number;
}

interface PageState {
  leftPage: Block[];
  rightPage: Block[];
  reorderLeft: (newOrder: Block[]) => void;
  reorderRight: (newOrder: Block[]) => void;
}

const initialBlocks: Block[] = [
  { id: '1', color: '#FFF0F0', height: 60 },  // Light pink
  { id: '2', color: '#E3F2FD', height: 145 }, // Light blue
  { id: '3', color: '#F1F8E9', height: 35 },  // Light green
  { id: '4', color: '#F3E5F5', height: 80 },  // Light purple
];

export const usePageStore = create<PageState>((set) => ({
  leftPage: [...initialBlocks],
  rightPage: [...initialBlocks],
  reorderLeft: (newOrder) => set({ leftPage: newOrder }),
  reorderRight: (newOrder) => set({ rightPage: newOrder }),
}));
