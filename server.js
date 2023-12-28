const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://picsum.photos/id/2/200/300',
            'name': '조성현',
            'gender': '남자',
            'job': '대학생',
            'birthday': '010410'
        },
        {
            'id': 2,
            'image': 'https://www.radiokorea.com/bulletin/data/file/c_talk_entertain/644496677_h725MNu8_3b441ac283041ecef6989eeefc9ed59e.jpg',
            'name': '유민지',
            'gender': '여자',
            'job': '배우',
            'birthday': '981014'
        },
        {
            'id': 3,
            'image': 'https://postfiles.pstatic.net/MjAyMjA0MjJfMTM0/MDAxNjUwNTkyNjU2MTQ2.3bJ6jVY-izzzTell7_XF_zDMeWOnnTZ8kHB1TU0WjEQg.QJmA8cBMWwNG6J3AUvVWLU0dAkdMEnIBNxFSbFDA5iEg.JPEG.hwoarangx2/9d7691e61855bbaa680a05a719ebbaf6.jpg?type=w773',
            'name': '장원영',
            'gender': '여자',
            'job': '아이돌',
            'birthday': '040814'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));