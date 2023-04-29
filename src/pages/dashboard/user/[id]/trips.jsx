import DashboardLayout from '@/layout/DashboardLayout'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import GenericTable from '@/componnents/dashboard/GenericTable'
import TripModal from '@/componnents/dashboard/TripModal'
import * as moment from 'moment'
import DeleteModal from '@/componnents/dashboard/DeleteModal'
import { useDispatch, useSelector } from 'react-redux'
import { addTrip, deleteTrip, updateTrip } from '@/store/features/trips'


const Trips = () => {

  const dispatch = useDispatch()
  const trips = useSelector(state => state.trips.array)
  
  const router = useRouter()
  const [modalSeeVisible, setModalSeeVisible] = useState(false)
  const [modalCreateVisible, setModalCreateVisible] = useState(false)
  const [modalUpdateVisible, setModalUpdateVisible] = useState(false)
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false)

  const [currentItem, setCurrentItem] = useState(null)
  const dashboardUrl = () => {
    return `/dashboard/user/${router.query.id}`
  }

  const _viewTrip = (newTrip)=>{

  }

  //Function to create a new Trip. Executed when we click on the button "Create" in the create trip modal
  const _createTrip = (newTrip)=>{
    newTrip.id = trips.length + 1
    dispatch(addTrip(newTrip))
  }

  const _updateTrip = (newTrip)=>{
    dispatch(updateTrip(newTrip))
  }

  const _deleteTrip = (newTrip)=>{
    dispatch(deleteTrip(newTrip))
  }


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
     cell: (row, index, column, id) => { 
        return <div>{moment(row.datecreation).format('DD/MM/YYYY')}</div>
        }
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
                <i className="fa-solid fa-eye text-violet-900 cursor-pointer" title="See"
                onClick={()=>{setCurrentItem({...row}); setModalSeeVisible(true);}}></i>
                </div>
                <div>
                <i className="fa-solid fa-pen-to-square text-violet-900 cursor-pointer" title="Modifiy"
                onClick={()=>{setCurrentItem({...row}); setModalUpdateVisible(true);}}></i>
                </div>
                <div><i className="fa-solid fa-trash-can text-violet-900 cursor-pointer" title="Delete"
                onClick={()=>{setCurrentItem({...row}); setModalDeleteVisible(true);}}></i></div>
                </div>
        </div>
    }
    },
];


  return (
    <DashboardLayout>
    <div id="TripList" className="mt-12">
    <div className="title">
      <p className="m-text-bigger-normal uppercase w-full font-bold">
        Trip list
      </p>
      <p className="text-orange m-text-small mt-2 font-semibold">
        <Link href={dashboardUrl()} > Dashboard / </Link>
        <span>Trips</span>
      </p>
    </div>
    <div className="contenant w-full bg-white mt-10">
      <div className="flex flex-row-reverse">
        <button className="gradient-violetsombre-orange text-white text-sm mt-4 md:mt-6 lg:mt-8 mr-5 md:mr-8"
        onClick={()=>setModalCreateVisible(true)}
        >
          <img
            src="/images/dashboard/plus.png"
            className="inline-block"
          />
          <span className="ml-1">New Trip</span>
        </button>
      </div>
      <div className="table-container p-4 md:p-8">
        <div className=""><p className="font-semibold text-gray-600 mb-1">Trip list</p></div>
        <GenericTable data={trips} columns={columns} />
      </div>
    </div>

    <TripModal showModal={modalCreateVisible} setShowModal={setModalCreateVisible}
     runFunction={_createTrip} action="create" />

    {currentItem && (<>
    <TripModal showModal={modalSeeVisible} setShowModal={setModalSeeVisible}
     runFunction={_viewTrip} action="see" item={currentItem} />

     <TripModal showModal={modalUpdateVisible} setShowModal={setModalUpdateVisible}
     runFunction={_updateTrip} action="update" item={currentItem} />

     <DeleteModal showModal={modalDeleteVisible} setShowModal={setModalDeleteVisible}
     runFunction={_deleteTrip} item={currentItem} />
     </>
     )}
    
  </div>
    </DashboardLayout>
  )
}

export default Trips