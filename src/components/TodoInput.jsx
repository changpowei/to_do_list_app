import { useState } from 'react';

function TodoInput({ onAdd }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            onAdd(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-4 mb-8">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new task..."
                className="flex-1 bg-neu-base rounded-2xl px-6 py-4 outline-none text-neu-text placeholder-neu-text/50 shadow-neu-concave transition-all focus:shadow-neu-pressed"
            />
            <button
                type="submit"
                className="w-14 h-14 rounded-2xl bg-neu-base text-neu-primary flex items-center justify-center shadow-neu-flat active:shadow-neu-pressed transition-all duration-200 outline-none"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </form>
    );
}

export default TodoInput;
