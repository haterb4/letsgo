import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

const TripTable = ({data, columns}) => {

    const [pagination, setPagination] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{setPagination(true); setLoading(false)}, 500)
    }, [])


    return (
        <div>
            <div className={loading? 'hide' : ''}>
            <DataTable
            columns={columns}
            data={data}
            highlightOnHover={true}
            pagination={pagination}
            paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
            paginationPerPage={5}
            customStyles={
                {
                    headCells: {
                        style: {
                            fontWeight: 'bold',
                            color: 'black',
                            fontSize: '0.9rem'
                        },
                    },
                    cells: {
                        style: {
                            fontSize: '0.9rem'
                        },
                    }
                }
            }
            // selectableRows
            />
            </div>
            <div className={loading? '' : 'hide'}>
                Loading...
            </div>
        </div>
    );
};

export default TripTable;