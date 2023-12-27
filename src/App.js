import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import { Component } from 'react';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { makeStyles, withStyles } from '@mui/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // marginTop: theme.spacing(3),
    overflowX: 'scroll'
  },
  table: {
    minWidth: 1080
  }
}));

const customers = [
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
    'name': '한소희',
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
]

const App = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableCell>번호</TableCell>
          <TableCell>이미지</TableCell>
          <TableCell>이름</TableCell>
          <TableCell>생년원일</TableCell>
          <TableCell>성별</TableCell>
          <TableCell>직업</TableCell>
        </TableHead>
        <TableBody>
          {customers.map(c => <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />)}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(useStyles)(App);
