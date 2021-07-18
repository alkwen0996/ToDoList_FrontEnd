function Input(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <label>
                Todo &nbsp;
                <input type="text" required={true} value={props.insert} onChange={props.handleChange} />
            </label>
            <input type="submit" value="Create" />
        </form>
    );
};

export default Input;