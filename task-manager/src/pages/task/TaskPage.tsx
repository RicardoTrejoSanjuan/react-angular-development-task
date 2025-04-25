export const TaskPage = () => {
  return (
    <div className='flex-1'>
      <div className='max-w-3xl mx-auto px-4 py-8'>
        <section className='mb-8'>
          <h1 className='text-3xl font-bold mb-4'>
            Section 1: <span className='text-indigo-800 dark:text-indigo-600'>React/Angular Development Task</span>
          </h1>
          <h2 className='text-xl font-semibold mb-1'>Task 1: React (with Redux & TypeScript)</h2>
          <p>
            <strong>Task:</strong> Build a simple Task Manager App
          </p>
        </section>

        <section className='mb-8'>
          <h3 className='text-lg font-semibold mb-2'>Requirements:</h3>
          <ul className='list-none list-inside space-y-2'>
            <li>✅ Users should be able to add, delete, and mark tasks as completed.</li>
            <li>
              ✅ Use <strong>Redux Toolkit</strong> for state management.
            </li>
            <li>
              ✅ Persist tasks in <strong>local storage</strong> or a mock API.
            </li>
            <li>
              ✅ Implement a <strong>responsive UI</strong> with CSS/HTML.
            </li>
            <li>
              ✅ Ensure <strong>TypeScript</strong> type safety.
            </li>
          </ul>
        </section>

        <section className='mb-8'>
          <h3 className='text-lg font-semibold mb-2'>Bonus Points:</h3>
          <ul className='list-none list-inside space-y-2'>
            <li>
              ✨ Implement <strong>drag-and-drop</strong> functionality (e.g., using <code>react-beautiful-dnd</code>).
            </li>
            <li>
              ✨ Add <strong>dark mode toggle</strong> with Context API.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};
