export const getAllNotes = (req, res) => {
    res.status(200).send("You just fetched the notes");
}

export const createNote = (req, res) => {
    res.status(200).send("You created a note");
}
export const updateNote = (req, res) => {
    res.status(200).send("notes updated successfully");
}
export const deleteNote = (req, res) => {
    res.status(200).send("Notes deleted successfully");
}
