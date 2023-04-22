import DashboardLayout from '@/layout/DashboardLayout'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import vehicletypelist from '@/fakedata/vehicletypelist';
import GenericTable from '@/componnents/dashboard/GenericTable'
import VehicleTypeModal from '@/componnents/dashboard/VehicleTypeModal'
import DeleteModal from '@/componnents/dashboard/DeleteModal';


const VehicleTypes = () => {
  
  const router = useRouter()
  const [modalSeeVisible, setModalSeeVisible] = useState(false)
  const [modalCreateVisible, setModalCreateVisible] = useState(false)
  const [modalUpdateVisible, setModalUpdateVisible] = useState(false)
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false)

  const [currentItem, setCurrentItem] = useState(null)
  const [vehicleTypes, setVehicleTypes] = useState(vehicletypelist)
  const dashboardUrl = () => {
    return `/dashboard/user/${router.query.id}`
  }

  const viewVehicleType = (newVehicleType)=>{

  }

  //Function to create a new VehicleType. Executed when we click on the button "Create" in the create trip modal
  const createVehicleType = (newVehicleType)=>{
    newVehicleType.id = vehicleTypes[vehicleTypes.length-1].id + 1
    setVehicleTypes([...vehicleTypes, newVehicleType])
  }

  const updateVehicleType = (newVehicleType)=>{console.log(newVehicleType)
    let index = vehicleTypes.findIndex((el) => el.id === newVehicleType.id)
    if(index === -1) return;
    
    vehicleTypes[index] = newVehicleType
    setVehicleTypes([...vehicleTypes])
  }

  const deleteVehicleType = (newVehicleType)=>{
    setVehicleTypes(vehicleTypes.filter((el) => el.id !== newVehicleType.id))
  }


  const columns = [
    {name: 'N°',
     selector: row => row.id,
     grow: 0.5,
     sortable: true,
    },
    {name: 'Libellé',
     selector: row => row.libelle,
     grow: 1.5,
     minWidth: '190px',
     sortable: true,
    },
    {name: 'Détails',
    selector: row => row.details,
    grow: 1.5,
    minWidth: '190px',
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
    <div id="VehicleTypeList" className="mt-12">
    <div className="title">
      <p className="m-text-bigger-normal uppercase w-full font-bold">
        Vehicle type list
      </p>
      <p className="text-orange m-text-small mt-2 font-semibold">
        <Link href={dashboardUrl()} > Dashboard / </Link>
        <span>Vehicle types</span>
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
          <span className="ml-1">New vehicle type</span>
        </button>
      </div>
      <div className="table-container p-4 md:p-8">
        <div className=""><p className="font-semibold text-gray-600 mb-1">Vehicle type list</p></div>
        <GenericTable data={vehicleTypes} columns={columns} />
      </div>
    </div>

    <VehicleTypeModal showModal={modalCreateVisible} setShowModal={setModalCreateVisible}
     runFunction={createVehicleType} action="create" />

    {currentItem && (<>
    <VehicleTypeModal showModal={modalSeeVisible} setShowModal={setModalSeeVisible}
     runFunction={viewVehicleType} action="see" item={currentItem} />

     <VehicleTypeModal showModal={modalUpdateVisible} setShowModal={setModalUpdateVisible}
     runFunction={updateVehicleType} action="update" item={currentItem} />

     <DeleteModal showModal={modalDeleteVisible} setShowModal={setModalDeleteVisible}
     runFunction={deleteVehicleType} item={currentItem} />
     </>
     )}
    
  </div>
    </DashboardLayout>
  )
}

export default VehicleTypes