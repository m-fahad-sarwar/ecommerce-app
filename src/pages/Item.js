import React from 'react'
import { ListItemButton, Checkbox, List, ListItem, IconButton, ListItemText, ListItemIcon, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Fade from '@mui/material/Fade';
import { useSelector } from 'react-redux';
import UpdateIcon from '@mui/icons-material/Update'



export default function Items(props) {

    const items = useSelector((state) => state.ItemReducer.data)
    // list
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];



        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };




    return (
        <div>
            { !Object.keys(items).length?
        <Typography style={{marginLeft: '20px'}}>There is no item yet</Typography>:
                items.map((item) => {


                    return (
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', minHeight: '20' }}>
                            <ListItem
                                secondaryAction={
                                    <div>

                                        <IconButton edge="end" aria-label="comments">
                                            <DeleteIcon color='error' />
                                        </IconButton>
                                        <IconButton edge="end" aria-label="comments">
                                            <UpdateIcon color='primary'/>
                                        </IconButton>
                                    </div>
                                }
                                disablePadding
                            >
                                {/* <Fade></Fade> */}
                                <ListItemButton role={undefined} onClick={handleToggle()} dense>
                                    <ListItemText primary={item.name} />
                                </ListItemButton>
                            </ListItem>


                        </List>
                    );

                })
            }
        </div>
    )
}
