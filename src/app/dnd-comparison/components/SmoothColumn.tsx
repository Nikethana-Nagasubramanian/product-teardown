"use client";

import React, { useState } from "react";
import { usePageStore, Block } from "../store";
import {
  DndContext,
  closestCorners,
  DragEndEvent,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
  defaultDropAnimationSideEffects,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { DotsSixVertical } from "@phosphor-icons/react";

// Base Item component used by both SortableItem and DragOverlay
const Item = React.forwardRef<HTMLDivElement, { 
  item: Block; 
  isOverlay?: boolean; 
  isDragging?: boolean;
  style?: React.CSSProperties;
  attributes?: any;
  listeners?: any;
}>(({ item, isOverlay, isDragging, style, attributes, listeners }, ref) => {
  return (
    <div
      ref={ref}
      style={{
        ...style,
        backgroundColor: item.color,
        height: `${item.height}px`,
        width: '400px',
      }}
      className={`relative rounded-md mb-2 flex items-center justify-end px-4 group border border-transparent ${
        isOverlay ? "shadow-2xl ring-2 ring-blue-500/50 rotate-2 cursor-grabbing" : ""
      } ${isDragging ? "opacity-40" : ""}`}
    >
      <div
        {...attributes}
        {...listeners}
        className="cursor-grab active:cursor-grabbing text-gray-600 p-2 hover:bg-black/5 rounded transition-colors"
      >
        <DotsSixVertical size={24} weight="bold" />
      </div>
    </div>
  );
});

Item.displayName = "Item";

function SortableItem({ item }: { item: Block }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    // Remove drag lag by disabling transitions while dragging
    transition: isDragging ? 'none' : transition,
    zIndex: isDragging ? 50 : 0,
  };

  return (
    <Item
      ref={setNodeRef}
      item={item}
      isDragging={isDragging}
      style={style}
      attributes={attributes}
      listeners={listeners}
    />
  );
}

export function SmoothColumn() {
  const { rightPage, reorderRight } = usePageStore();
  const [activeId, setActiveId] = useState<string | null>(null);

  // Activation constraint: 8px move required to start dragging
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    if (over && active.id !== over.id) {
      const oldIndex = rightPage.findIndex((i) => i.id === active.id);
      const newIndex = rightPage.findIndex((i) => i.id === over.id);
      reorderRight(arrayMove(rightPage, oldIndex, newIndex));
    }
    
    setActiveId(null);
  };

  const activeItem = activeId ? rightPage.find(item => item.id === activeId) : null;

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white p-6 rounded-md shadow-sm flex flex-col items-center w-[450px border border-gray-200]">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners} // Switch to closestCorners
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragCancel={() => setActiveId(null)}
        >
          <SortableContext items={rightPage} strategy={verticalListSortingStrategy}>
            {rightPage.map((item) => (
              <SortableItem key={item.id} item={item} />
            ))}
          </SortableContext>
          
          <DragOverlay 
            dropAnimation={{
              sideEffects: defaultDropAnimationSideEffects({
                styles: {
                  active: {
                    opacity: '0.4',
                  },
                },
              }),
            }}
          >
            {activeItem ? <Item item={activeItem} isOverlay /> : null}
          </DragOverlay>
        </DndContext>
      </div>
      <p className="mt-4 text-gray-800 text-sm font-medium">Drag Overlay + Ghost Element + Closest Corners</p>
    </div>
  );
}
