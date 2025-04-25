// import { IoReorderTwoOutline } from 'react-icons/io5';
import type { Task } from '../../interfaces';
import { removingDraggingTaskId, setDraggingTaskId } from '../../store/slices';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';

type SingleTaskProps = {
  task: Task;
};

export const SingleTask = ({ task }: SingleTaskProps) => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <div
      draggable
      onDragStart={() => dispatch(setDraggingTaskId(task.id))}
      onDragEnd={() => dispatch(removingDraggingTaskId())}
      className='bg-white p-3 rounded-xl shadow-sm border border-gray-200 hover:shadow-md cursor-grab active:cursor-grabbing'>
      <div className='flex items-center justify-center gap-2'>
        <p className='text-base font-bold text-navy-700'>{task.title}</p>
      </div>
      {/* <span className=' h-6 w-6 text-navy-700 cursor-pointer'>
        <IoReorderTwoOutline />
      </span> */}
    </div>
  );
};
