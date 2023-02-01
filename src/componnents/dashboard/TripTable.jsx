import React, { useEffect, useState } from 'react';
import triplist from '@/fakedata/triplist';
import DataTable from 'react-data-table-component';

const TripTable = () => {

    const [currentItem, setCurrentItem] = useState({})
    const [modalSeeVisible, setModalSeeVisible] = useState(false)
    const [modalUpdateVisible, setModalUpdateVisible] = useState(false)
    const [modalDeleteVisible, setModalDeleteVisible] = useState(false)
    const [pagination, setPagination] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{setPagination(true); setLoading(false)}, 500)
    }, [])

    const columns = [
        {name: 'N°',
         selector: row => row.id,
         grow: 0.5,
         sortable: true,
        },
        {name: 'Journey',
         selector: row => row.trajet,
         grow: 1.5,
         minWidth: '190px',
         sortable: true,
        },
        {name: 'Creation date',
         selector: row => row.datecreation,
         sortable: true,
        },
        {name: 'Status',
         selector: row => row.statut,
         sortable: true,
         center: true,
         cell: (row, index, column, id) => { 
            return <div className="text-white text-center bg-orange rounded-2xl py-1 md:py-1.5 w-24">
                    {row.statut}
                    </div>
            }
        },
        {name: 'Action',
         selector: row => row.action,
         cell: (row, index, column, id) => { 
        return <div className="action-wrapper">
                <div className="flex gap-5 md:gap-8">
                    <div>
                    <i className="fa-solid fa-eye text-violet-900 cursor-pointer" 
                    onClick={()=>{setCurrentItem({...row}); setModalSeeVisible(true);}}></i>
                    </div>
                    <div>
                    <i className="fa-solid fa-pen-to-square text-violet-900 cursor-pointer" 
                    onClick={()=>{setCurrentItem({...row}); setModalUpdateVisible(true);}}></i>
                    </div>
                    <div><i className="fa-solid fa-trash-can text-violet-900 cursor-pointer" 
                    onClick={()=>{setCurrentItem({...row}); setModalDeleteVisible(true);}}></i></div>
                    </div>
            </div>
        }
        },
    ];

    return (
        <div className={loading? 'hide': ''}>
            <DataTable
            columns={columns}
            data={triplist}
            highlightOnHover={true}
            pagination={pagination}
            paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
            paginationPerPage={5}
            customStyles={
                {
                    headCells: {
                        style: {
                            fontFamily: 'Arial',
                            fontWeight: 'bold',
                        },
                    }
                }
            }
            // selectableRows
        />
        </div>
    );
};

export default TripTable;