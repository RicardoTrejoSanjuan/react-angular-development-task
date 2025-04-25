import { IoAddCircleOutline } from 'react-icons/io5';
import { IconType } from 'react-icons';

import type { Task, TaskStatus } from '../../interfaces';
import { SingleTask } from './SingleTask';
import { CustomIcon } from './CustomIcon';
import { useTasks } from '../../hooks/useTasks';
import classNames from 'classnames';

interface JiraTasksProps {
  title: string;
  status: TaskStatus;
  tasks: Task[];
  icon: IconType;
}

export const JiraTasks = ({ title, status, tasks, icon }: JiraTasksProps) => {
  const { isDragging, onDragOver, handleAddTask, handleOnDragOver, handleOnDragLeave, handleOnDrop } = useTasks({ status });

  return (
    <div
      onDragOver={handleOnDragOver}
      onDragLeave={handleOnDragLeave}
      onDrop={handleOnDrop}
      className={classNames(
        '!text-black relative flex flex-col rounded-[20px]  bg-white bg-clip-border shadow-3xl shadow-shadow-500  w-full !p-4 3xl:p-![18px]',
        {
          'border-blue-500 border-dotted border-4': isDragging,
          'border-green-500 border-dotted border-4': isDragging && onDragOver,
        }
      )}>
      {/* Task Header */}
      <div className='relative flex flex-row justify-between'>
        <div className='flex items-center justify-center'>
          <div className='flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100'>
            <span className='flex justify-center items-center h-6 w-6 text-brand-500'>
              <CustomIcon Icon={icon} size={50} color={'red'} />
            </span>
          </div>

          <h4 className='ml-4 text-xl font-bold text-navy-700'>{title}</h4>
        </div>
        <button onClick={handleAddTask}>
          <IoAddCircleOutline />
        </button>
      </div>

      {/* Task Items */}
      <div className='h-full w-full'>
        {tasks.map(task => (
          <SingleTask key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};
