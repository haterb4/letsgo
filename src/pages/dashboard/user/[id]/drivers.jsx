import DashboardLayout from '@/layout/DashboardLayout'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import GenericTable from '@/componnents/dashboard/GenericTable'
import DriverModal from '@/componnents/dashboard/DriverModal'
import * as moment from 'moment'
import DeleteModal from '@/componnents/dashboard/DeleteModal';
import { useDispatch, useSelector } from 'react-redux'
import { addDriver, deleteDriver, updateDriver } from '@/store/features/drivers'


const Drivers = () => {

  const dispatch = useDispatch()
  const drivers = useSelector(state => state.drivers.array)
  
  const router = useRouter()
  const [modalSeeVisible, setModalSeeVisible] = useState(false)
  const [modalCreateVisible, setModalCreateVisible] = useState(false)
  const [modalUpdateVisible, setModalUpdateVisible] = useState(false)
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false)

  const [currentItem, setCurrentItem] = useState(null)

  const dashboardUrl = () => {
    return `/dashboard/user/${router.query.id}`
  }

  const _viewDriver = (newDriver)=>{

  }

  //Function to create a new Driver. Executed when we click on the button "Create" in the create driver modal
  const _createDriver = (newDriver)=>{
    newDriver.id = drivers[drivers.length - 1].id + 1
    dispatch(addDriver(newDriver))
  }

  const _updateDriver = (newDriver)=>{
    dispatch(updateDriver(newDriver))
  }

  const _deleteDriver = (newDriver)=>{
    dispatch(deleteDriver(newDriver))
  }


  const columns = [
    {name: 'N°',
     selector: row => row.id,
     width: '70px',
     sortable: true,
    //  reorder: true,
    },
    {name: 'Action',
     selector: row => row.action,
     cell: (row, index, column, id) => { 
      return <div className="action-wrapper">
                <div className="flex gap-4 md:gap-6">
                    <div>
                    <i className="fa-solid fa-eye text-violet1 cursor-pointer" title="See"
                    onClick={()=>{setCurrentItem({...row}); setModalSeeVisible(true);}}></i>
                    </div>
                    <div>
                    <i className="fa-solid fa-pen-to-square text-violet1 cursor-pointer" title="Modifiy"
                    onClick={()=>{setCurrentItem({...row}); setModalUpdateVisible(true);}}></i>
                    </div>
                    <div><i className="fa-solid fa-trash-can text-violet1 cursor-pointer" title="Delete"
                    onClick={()=>{setCurrentItem({...row}); setModalDeleteVisible(true);}}></i>
                    </div>
                </div>
            </div>
      }
    },
    {name: 'Nom',
     selector: row => row.nom,
     grow: 1.5,
     sortable: true,
    },
    {name: 'N° CNI',
     selector: row => row.numCNI,
     sortable: true,
    },
    {name: 'N° Permis',
     selector: row => row.numPermis,
     sortable: true,
    },
    {name: 'Validité permis',
     selector: row => row.dateValiditePermis,
     sortable: true,
     grow: 1.2,
     cell: (row, index, column, id) => { 
        return <div>{moment(row.dateValiditePermis).format('DD/MM/YYYY')}</div>
        }
    }, 
    {name: 'Statut',
     selector: row => row.statut,
     grow: 0.9,
     sortable: true,
    },
    {name: 'Disponible',
     selector: row => row.disponibilite,
     grow: 0.8,
     sortable: true,
    },  
    {name: 'Commentaire',
     selector: row => row.commentaire,
     sortable: true,
    },
    
];


  return (
    <DashboardLayout>
    <div id="DriverList" className="mt-12">
    <div className="title">
      <p className="m-text-bigger-normal uppercase w-full font-bold">
        Driver list
      </p>
      <p className="text-orange m-text-small mt-2 font-semibold">
        <Link href={dashboardUrl()} > Dashboard / </Link>
        <span>Drivers</span>
      </p>
    </div>
    <div className="contenant w-full bg-white mt-10">
      <div className="flex flex-row-reverse">
        <button className="bg-violet1 text-white text-sm mt-4 md:mt-6 lg:mt-8 mr-5 md:mr-8"
        onClick={()=>setModalCreateVisible(true)}
        >
          <img
            src="/images/dashboard/plus.png"
            className="inline-block"
          />
          <span className="ml-1">New Driver</span>
        </button>
      </div>
      <div className="table-container p-4 md:p-8">
        <div className=""><p className="font-semibold text-gray-600 mb-1">Driver list</p></div>
        <GenericTable data={drivers} columns={columns} />
      </div>
    </div>

    <DriverModal showModal={modalCreateVisible} setShowModal={setModalCreateVisible}
     runFunction={_createDriver} action="create" />

    {currentItem && (<>
    <DriverModal showModal={modalSeeVisible} setShowModal={setModalSeeVisible}
     runFunction={_viewDriver} action="see" item={currentItem} />

     <DriverModal showModal={modalUpdateVisible} setShowModal={setModalUpdateVisible}
     runFunction={_updateDriver} action="update" item={currentItem} />

     <DeleteModal showModal={modalDeleteVisible} setShowModal={setModalDeleteVisible}
     runFunction={_deleteDriver} item={currentItem} />
     </>
     )}
    
  </div>
    </DashboardLayout>
  )
}

export default Drivers