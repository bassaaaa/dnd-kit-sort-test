import { FC } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Item } from './types';
import DragHandleRoundedIcon from '@mui/icons-material/DragHandleRounded';

type Props = {
  item: Item;
};

export const SortableItem: FC<Props> = ({ item }: Props) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    setActivatorNodeRef,
  } = useSortable({ id: item.id });

  return (
    <div
      className="flex border border-gray-300 bg-white rounded-md p-2 items-center"
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
    >
      {/* 並べ替えアイコン */}
      <div ref={setActivatorNodeRef} {...attributes} {...listeners}>
        <DragHandleRoundedIcon className="text-gray-300 cursor-move" />
      </div>
      <span className="pl-2">{item.name}</span>
    </div>
  );
};
