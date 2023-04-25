app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = uuidv4();
    fs.readFile(`${__dirname}/db.json`, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const notes = JSON.parse(data);
        notes.push(newNote);
        fs.writeFile(`${__dirname}/db.json`, JSON.stringify(notes), (err) => {
          if (err) {
            console.log(err);
          } else {
            res.json(newNote);
          }
        });
    }
});
});