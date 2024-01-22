export function TextInput({ onSave, onCancel, value, onSetValue, name, className }) {

    return (
        <form className="text-input" onSubmit={(ev) => { ev.preventDefault(); onSave(); }}>
            <textarea
                className={`${className} clean-textarea textarea-input`}
                name={name}
                value={value}
                onChange={(ev) => onSetValue(ev.target.value)}
                autoFocus
            />
            <section className="button-container">
                <button type="submit" className="btn-confirm">Save</button>
                <button type="button" className="btn-cancel" onClick={onCancel}>Cancel</button>
            </section>
        </form>
    )
}