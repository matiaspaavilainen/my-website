const imageSubmission = ({ currentFile, title, setTitle, handleSubmit }) => {
    return (
        <div>
            <form className='image-form' action=''>
                <label>
                    Date:
                    <input
                        type='text'
                        value={new Date(currentFile.date).toLocaleDateString()}
                        name='Title'
                        readOnly={true}
                    />
                </label>
                <label>
                    Title:
                    <input
                        type='text'
                        value={title}
                        name='Title'
                        onChange={({ target }) => { setTitle(target.value); }}
                    />
                </label>

                <button type='submit' onSubmit={handleSubmit}>Send</button>
            </form>
        </div>
    );
};

export default imageSubmission;