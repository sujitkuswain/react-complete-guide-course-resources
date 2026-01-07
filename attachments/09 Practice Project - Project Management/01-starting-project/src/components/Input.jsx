export default function Input({label, isTextarea = false, ...props}) {
    const classStyle = "border-b-2 w-full p-1 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:border-stone-600 focus:outline-none";

    return (<p className="flex flex-col gap-1 mb-4">
        <label className="text-stone-500 font-bold text-sm uppercase">{label}</label>
        {isTextarea ? <textarea className={classStyle} {...props}/> : <input className={classStyle} {...props}/>}
    </p>);
}