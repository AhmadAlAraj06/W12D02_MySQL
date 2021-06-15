const db = require('./db');

const findAll = (req,res) => {
  const query = `SELECT * FROM books`;
  db.query(query, (err, result) => {
    if (err) throw err;
    console.log('RESULT: ', result);
    res.json(result)
  });
};

const insertNew = (req,res)=>{
  console.log(`req.body`, req.body)
    const query = `INSERT INTO books (title, author) VALUES (?,?);`;
    const arr = [req.body.title , req.body.author];
    db.query(query, arr, (err, result) => {
      if (err) throw err;
      console.log('RESULT: ', result);
      res.json(result)
    });
  
}


module.exports = {
  findAll,
  insertNew
};