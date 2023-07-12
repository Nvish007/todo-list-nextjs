"use client"


type TodoItemsProps = {
    id: string,
    title: string,
    completed: boolean,
    toggleTodo: (id: string, complete: boolean) => void
}

export function TodoItems({ id, title, completed, toggleTodo }: TodoItemsProps) {
    return <li className="flex gap-1 items-center">
        <input id={id}
            type="checkbox"
            className="cursor-pointer peer"
            defaultChecked={completed}
            onChange={e => toggleTodo(id, e.target.checked)} />
        <label htmlFor={id} className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500">{title}</label>
    </li>
} 