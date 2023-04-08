import List from "@mui/material/List";
import CircularProgress from "@mui/material/CircularProgress";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Checkbox from "@mui/material/Checkbox";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

function App() {
  const [list, setList] = useState([]);

  const handleToggle = idx => () => {
    console.log(list[idx]);
    setList(prev => {
      prev[idx].completed = !prev[idx].completed;
      console.log(prev[idx]);
      return prev;
      // const currTask = prev[idx];
      // const updatedTask = { ...currTask, completed: !currTask.completed };

      // return [...prev, updatedTask];
    });
    console.log(list);
  };

  useEffect(() => {
    fetchList();
  }, []);

  useEffect(() => {
    console.log("hello");
    const trueTask = list.filter(task => task.completed);
    console.log(trueTask);
  }, [setList, list]);

  const fetchList = async () => {
    try {
      const url = "https://jsonplaceholder.typicode.com/todos";
      const response = await fetch(url);

      if (response.status === 200) {
        const data = await response.json();
        setList(data);
        // console.log(data);
      }
      // console.log(response);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="App">
        {list.length > 0 ? (
          <>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              {list.map((task, idx) => {
                // const labelId = `checkbox-list-label-${value}`;

                return (
                  <ListItem
                    key={idx}
                    // secondaryAction={
                    //   <IconButton edge="end" aria-label="comments">
                    //     <CommentIcon />
                    //   </IconButton>
                    // }
                    // disablePadding
                  >
                    <ListItemButton
                      role={undefined}
                      onClick={handleToggle(idx)}
                      dense
                    >
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={task.completed}
                          // tabIndex={-1}
                          // disableRipple
                          // inputProps={{ "aria-labelledby": labelId }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        // id={labelId}
                        primary={`${task.title}`}
                      />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </>
        ) : (
          <CircularProgress />
        )}
      </div>
    </>
  );
}

export default App;
