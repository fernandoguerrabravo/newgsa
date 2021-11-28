/* eslint-disable no-unused-vars */
import react, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { green, red, blue } from '@mui/material/colors';
import FlightTakeoff from '@mui/icons-material//FlightTakeoff';
import FlightLand from '@mui/icons-material//FlightLand';
import MenuBook from '@mui/icons-material//MenuBook';



export default function HtsHeader({ event }) {
	
	// console.log(event.event.country)

	return (
		<>
			<List>
				<ListItem>
					<ListItemAvatar>
						<Avatar>
							<FlightLand />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary="Destination Country" secondary={event.destination} />
				</ListItem>
				<Divider variant="inset" component="li" />
				<ListItem>
					<ListItemAvatar>
						<Avatar>
							<MenuBook />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary="HTS CODE (8 Digits)" secondary={event.hts} />
				</ListItem>
			</List>
		</>
	);
}
