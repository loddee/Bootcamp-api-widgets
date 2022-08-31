import express from 'express';
const app = express();
import longestWord from './longestWord.js'
import shortestWord from './shortestWord.js'
import wordLengths from './wordLengths.js'

app.use(express.static('public'));

app.get('/api/word_game', function(req, res) {
    const sentence = req.query.sentence;
    console.log("sentence", sentence);
    if (!sentence) {
        res.json({
            err: 'idoit please enter sentance to analyze'


        })
    }
    res.json({

        "longestWord": longestWord(sentence),
        "shortest": shortestWord(sentence),
        "wordLengths": wordLengths(sentence)
    });
});

const PORT = 6007;
app.listen(PORT, function() {
    console.log("APİS ON PORT 6007", PORT);
})