function reducer(state, action) {
    switch(action.type){
        case 'get-notes':
            const stateWithAllTheNotes = {
                ...state,
                listOfNotes: action.payload
            }
            return stateWithAllTheNotes
        case 'add-note':
            const newNote = {
                id: Math.floor(Math.random()*100),
                title: action.payload.title,
                message: action.payload.message,
                done: false
            }
            const newListOfNotesAddedOne = [...state.listOfNotes, newNote]
            const newStateAddNote = {
                ...state, listOfNotes: newListOfNotesAddedOne
            }
            return newStateAddNote
        case 'remove-note':
            const newListOfNotesWithoutPayloadNote = state.listOfNotes.filter(note => note.id !== action.payload.id)
            const newStateWithNoteDeleted = {...state, listOfNotes: newListOfNotesWithoutPayloadNote}
            return newStateWithNoteDeleted
        case 'update-note':
            const newListOfNotes = state.listOfNotes.filter(note => note.id !== action.payload.id)
            const newListOfNotesWithModification = [...newListOfNotes, action.payload]
            const newStateModifiedCheckox = { ...state, listOfNotes: newListOfNotesWithModification}
            return newStateModifiedCheckox
    }
}

export default reducer