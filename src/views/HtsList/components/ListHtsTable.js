/* eslint-disable no-unused-vars */
import react from 'react';
import useGetClasHts from '../hooks/UseGetClasHts';
import DataTable from "react-data-table-component";

export default function ListHtsTable() {
	const idcliente = 'abcdef';
	// const { data, loading } = useGetResearch(idcliente)

	const { data } = useGetClasHts(idcliente);

	console.log('datos para tabla:', data);

	const columnas = [
		{
			name: 'SKU',
			selector: row => row.sku
		},
		{
			name: 'Short Description',
			selector: row => row.shortdescription
		},
		{
			name: 'Country Origin',
			selector: row => row.country_origin
		},
		{
			name: 'Category Description',
			selector: rowData => (
				<>
					{rowData.htsclas.categories.L2};
					{rowData.htsclas.categories.L3} ;
				</>
			)
		},
		{
			name: 'US Classification',
			selector: row => row.htsclas.hts
		},

		{
			name: 'General Duties',
			selector: row => row.htsclas.duties
		},
		{
			name: 'FTA',
			selector: row => row.htsclas.special
		},

		{
			name: 'Date Creation',
			selector: row => row.htsclas.date
		}
	];

	return (
		<>
			<DataTable
				striped
				columns={columnas}
				data={data}
				pagination
				
			/>
		</>
	);
}
