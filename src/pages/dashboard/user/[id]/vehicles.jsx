import DashboardLayout from '@/layout/DashboardLayout'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import GenericTable from '@/componnents/dashboard/GenericTable'
import VehicleModal from '@/componnents/dashboard/VehicleModal'
import * as moment from 'moment'
import DeleteModal from '@/componnents/dashboard/DeleteModal';
import { useDispatch, useSelector } from 'react-redux'
import { addVehicle, deleteVehicle, updateVehicle } from '@/store/features/vehicles'


const Vehicles = () => {
  
  const dispatch = useDispatch()
  const vehicles = useSelector(state => state.vehicles.array)

  const router = useRouter()
  const [modalSeeVisible, setModalSeeVisible] = useState(false)
  const [modalCreateVisible, setModalCreateVisible] = useState(false)
  const [modalUpdateVisible, setModalUpdateVisible] = useState(false)
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false)

  const [currentItem, setCurrentItem] = useState(null)

  const dashboardUrl = () => {
    return `/dashboard/user/${router.query.id}`
  }

  const viewVehicle = (newVehicle)=>{

  }

  //Function to create a new Vehicle. Executed when we click on the button "Create" in the create vehicle modal
  const _createVehicle = (newVehicle)=>{
    newVehicle.id = vehicles.length + 1
    dispatch(addVehicle(newVehicle))
  }

  const _updateVehicle = (newVehicle)=>{
    dispatch(updateVehicle(newVehicle))
  }

  const _deleteVehicle = (newVehicle)=>{
    dispatch(deleteVehicle(newVehicle))
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
                    <i className="fa-solid fa-eye text-violet-900 cursor-pointer" title="See"
                    onClick={()=>{setCurrentItem({...row}); setModalSeeVisible(true);}}></i>
                    </div>
                    <div>
                    <i className="fa-solid fa-pen-to-square text-violet-900 cursor-pointer" title="Modifiy"
                    onClick={()=>{setCurrentItem({...row}); setModalUpdateVisible(true);}}></i>
                    </div>
                    <div><i className="fa-solid fa-trash-can text-violet-900 cursor-pointer" title="Delete"
                    onClick={()=>{setCurrentItem({...row}); setModalDeleteVisible(true);}}></i>
                    </div>
                </div>
            </div>
      }
    },
    {name: 'Marque',
     selector: row => row.marque,
     grow: 0.8,
     sortable: true,
    },
    {name: 'Modèle',
     selector: row => row.modele,
     sortable: true,
    },
    {name: 'Type',
     selector: row => row.typeVehicule.libelle,
     sortable: true,
    },
    {name: 'Nbr. places',
     selector: row => row.capacite,
     grow: 0.7,
     sortable: true,
    },
    {name: 'Confort',
     selector: row => row.confort,
     grow: 1.1,
     cell: (row, index, column, id) => { 
      return <div>{row.confort.map((value, index) => <div key={index}>{value.libelle}</div>)}</div>
      }
    },
    {name: 'Immatriculation',
     selector: row => row.immatriculation,
    //  grow: 1.5,
    //  minWidth: '190px',
     sortable: true,
    },
    {name: 'N° châssis',
     selector: row => row.numChassis,
     sortable: true,
    },
    {name: 'N° carte grise',
     selector: row => row.numCarteGrise,
     sortable: true,
    },
    {name: 'N° Assurance',
     selector: row => row.numAssurance,
     sortable: true,
    },
    {name: 'Validité assurance',
     selector: row => row.dateValiditeAssurance,
     sortable: true,
     grow: 1.2,
     cell: (row, index, column, id) => { 
        return <div>{moment(row.dateValiditeAssurance).format('DD/MM/YYYY')}</div>
        }
    },    
    {name: 'Commentaire',
     selector: row => row.commentaire,
     sortable: true,
    },
    
];


  return (
    <DashboardLayout>
    <div id="VehicleList" className="mt-12">
    <div className="title">
      <p className="m-text-bigger-normal uppercase w-full font-bold">
        Vehicle list
      </p>
      <p className="text-orange m-text-small mt-2 font-semibold">
        <Link href={dashboardUrl()} > Dashboard / </Link>
        <span>Vehicles</span>
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
          <span className="ml-1">New Vehicle</span>
        </button>
      </div>
      <div className="table-container p-4 md:p-8">
        <div className=""><p className="font-semibold text-gray-600 mb-1">Vehicle list</p></div>
        <GenericTable data={vehicles} columns={columns} />
      </div>
    </div>

    <VehicleModal showModal={modalCreateVisible} setShowModal={setModalCreateVisible}
     runFunction={_createVehicle} action="create" />

    {currentItem && (<>
    <VehicleModal showModal={modalSeeVisible} setShowModal={setModalSeeVisible}
     runFunction={viewVehicle} action="see" item={currentItem} />

     <VehicleModal showModal={modalUpdateVisible} setShowModal={setModalUpdateVisible}
     runFunction={_updateVehicle} action="update" item={currentItem} />

     <DeleteModal showModal={modalDeleteVisible} setShowModal={setModalDeleteVisible}
     runFunction={_deleteVehicle} item={currentItem} />
     </>
     )}
    
  </div>
    </DashboardLayout>
  )
}

export default Vehicles