import React, { useState } from 'react';
import { CircularProgress, Grid,  } from '@mui/material';
import DataTable from "react-data-table-component";
import { blue, red } from '@mui/material/colors';
import { star } from '../hooks/star';
//import CustomizedDialogs from '../hooks/dialogo';
import { useFetchGifs } from '../hooks/useFetchGifs';
import Center from 'react-center';
import SimpleDialogDemo from './SimpleDialog';
/* const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},

	table: {
		minWidth: 750,
		padding: '2px 4px'
	},

	centrar: {]]
		textAlign: 'center',
		direction: 'row',
		justify: 'center',
		alignItems: 'center',
		padding: theme.spacing(6)
	}
}));
*/ 
const reviews = (info, info2) => {
	return (
		<>
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				Total Reviews: {info2} <br />
			</div>
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{info}</div>
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{star(info)}</div>
		</>
	);
};

const link = asin => {
	const link = `https://www.amazon.com/dp/${asin}`;
	return (
		<>
			<a href={link} target="_blank" rel="noreferrer">
				{asin}
			</a>
		</>
	);
};

export const GiftGrid2 = ({ setCategories, category }) => {
	
	const { data, loading } = useFetchGifs(category);
	// {loading && <p>Loading Results...</p>}
	
	// console.log(category)

	const columnas = [
		{
			name: 'Imagen',
			selector: rowData => <img src={rowData.url} style={{ width: 60 }} alt="imagen"/>
		},

		{
			name: 'ASIN',
			selector: rowData => link(rowData.id)
		},

		{
			name: 'Description',
			selector: rowData => rowData.title
		},
		{
			name: 'Price',
			selector: rowData => rowData.price
		},

		{
			name: 'Details',
			 
			selector: rowData =>  <SimpleDialogDemo codigo={rowData.id} /> 
		},
		{
			name: 'Rank',
			
			selector: rowData => reviews(rowData.reviews, rowData.total_reviews)
		}
	];

	return (
		<>
			<br />
			<br />
			<br />
			{loading ? (
				<Grid item xs={12}>
					<Center>
					<CircularProgress color="primary" size={60} />
					</Center>
				</Grid>
			) : (
				<>
					<Grid  item xs={12}>
						<DataTable
							striped
							pagination
							columns={columnas}
							data={data}
							/*options={{
								selection: true
							}} */
							// onSelectionChange={(event) => { event ? console.log(event[0]?.id) : null }}
							/*actions={[
								{
									tooltip: 'Save Selected Products',
									icon: () => <SaveIcon color="inherit" style={{ fontSize: 40 }} />,
									onClick: (evt, data) =>
										setCategories({
											keyword: category,
											hidden: false,
											hidden1: true,
											hidden2: false,
											selected: data
										})
								}
							]} */
						/>
					</Grid>
				</>
			)}
		</>
	);
};

/* import react from 'react';


export default function ListResearchApp() {

    const columnas = [

        {
            name: 'KeyWord',
             'Keword'
        },
        {
            name: 'Date Creation',
             'date'
        },
        {
            name: 'Details',
             'details'
        },

    ];

    const data = [];

    return (



        <>

            <MaterialTable

                name=""
                columns={columnas}
                data={data}
            >

            </MaterialTable>

        </>




    ); */
