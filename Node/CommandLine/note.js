
const fs = require('fs')
const loadNote = () => {
    try {
        const dataBuffer = fs.readFileSync('./note.json')
        const data = dataBuffer.toString()
        return JSON.parse(data)
    } catch (e) {
        return []
    }

}

const AddNote = (name) => {
    const notes = loadNote()
    const duplicatData = notes.filter((note) => note.name == name)
    if (duplicatData.length == 0) {

        notes.push({ name: name })
    } else {
        console.log('Record Already Exist ....')
    }

    saveNote(notes)


}

const removeNote = (name) => {
    const notes = loadNote()
    const keepNote = notes.filter((note) => note.name != name)
    //console.log(notes.length)
    if (keepNote.length < notes.length) {
        saveNote(keepNote)
        console.log('User Successfully Removed...')
    } else {

        console.log('User Does not exist')
    }

}
const UpdateNote = (data) => {
    const notes = loadNote()
    const keepNote = notes.filter((note) => note.name != data.name)

    if (notes.length > keepNote.length) {

        notes.filter((note) => {
            if (note.name === data.name) {
                const duplicatData = notes.filter((note) => note.name == data.newname)
                if (duplicatData.length == 0) {
                    note.name = data.newname
                } else {
                    console.log('Aready Exist Try Anothoer New Name')
                }

            }
        })
        //console.log(notes)
        saveNote(notes)
        console.log('Udated Succeffully.......')

    } else {
        console.log('User Not Exists...')
    }

}

const saveNote = (data) => {

    const filterData = JSON.stringify(data)
    //    console.log(filterData);
    fs.writeFileSync('note.json', filterData)
}

module.exports = {
    AddNote, removeNote, UpdateNote
}