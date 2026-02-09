"use client";

import React from "react";
import { usePageStore, Block } from "../store";
import {
  DndContext,
  rectIntersection,
  DragEndEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { DotsSixVertical } from "@phosphor-icons/react";

function BuggySortableItem({ item }: { item: Block }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    isDragging,
  } = useSortable({ id: item.id });

  const style = {
    // BUG: No transition makes it jump instantly
    transform: CSS.Transform.toString(transform),
    backgroundColor: item.color,
    height: `${item.height}px`,
    width: '400px',
    zIndex: isDragging ? 50 : 0,
    opacity: isDragging ? 0.8 : 1,
    transition: 'none', // Force no transition
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`relative rounded-md mb-2 flex items-center justify-end px-4 ${
        isDragging ? "shadow-none ring-2 ring-red-300" : ""
      }`}
    >
      <div
        {...attributes}
        {...listeners}
        className="cursor-move text-gray-600 p-2"
      >
        <DotsSixVertical size={24} weight="bold" />
      </div>
    </div>
  );
}

export function BuggyColumn() {
  const { leftPage, reorderLeft } = usePageStore();
  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = leftPage.findIndex((i) => i.id === active.id);
      const newIndex = leftPage.findIndex((i) => i.id === over.id);
      reorderLeft(arrayMove(leftPage, oldIndex, newIndex));
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white p-6 rounded-md shadow-sm flex flex-col items-center w-[450px border border-gray-200]">
        <DndContext
          sensors={sensors}
          collisionDetection={rectIntersection} // BUG: rectIntersection is worse for variable heights
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={leftPage} strategy={verticalListSortingStrategy}>
            {leftPage.map((item) => (
              <BuggySortableItem key={item.id} item={item} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
      <p className="mt-4 text-gray-800 text-sm font-medium">Manipulating DOM + rectIntersection + No Transition</p>
    </div>
  );
}
