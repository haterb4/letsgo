import DashboardLayout from '@/layout/DashboardLayout'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import vehicleoptionlist from '@/fakedata/vehicleoptionlist';
import GenericTable from '@/componnents/dashboard/GenericTable'
import VehicleOptionModal from '@/componnents/dashboard/VehicleOptionModal'
import DeleteModal from '@/componnents/dashboard/DeleteModal';


const VehicleOptions = () => {
  
  const router = useRouter()
  const [modalSeeVisible, setModalSeeVisible] = useState(false)
  const [modalCreateVisible, setModalCreateVisible] = useState(false)
  const [modalUpdateVisible, setModalUpdateVisible] = useState(false)
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false)

  const [currentItem, setCurrentItem] = useState(null)
  const [vehicleOptions, setVehicleOptions] = useState(vehicleoptionlist)
  const dashboardUrl = () => {
    return `/dashboard/user/${router.query.id}`
  }

  const viewVehicleOption = (newVehicleOption)=>{

  }

  //Function to create a new VehicleOption. Executed when we click on the button "Create" in the create trip modal
  const createVehicleOption = (newVehicleOption)=>{
    newVehicleOption.id = vehicleOptions[vehicleOptions.length-1].id + 1
    setVehicleOptions([...vehicleOptions, newVehicleOption])
  }

  const updateVehicleOption = (newVehicleOption)=>{console.log(newVehicleOption)
    let index = vehicleOptions.findIndex((el) => el.id === newVehicleOption.id)
    if(index === -1) return;
    
    vehicleOptions[index] = newVehicleOption
    setVehicleOptions([...vehicleOptions])
  }

  const deleteVehicleOption = (newVehicleOption)=>{
    setVehicleOptions(vehicleOptions.filter((el) => el.id !== newVehicleOption.id))
  }


  const columns = [
    {name: 'N°',
     selector: row => row.id,
     grow: 0.5,
     sortable: true,
    },
    {name: 'Libellé',
     selector: row => row.libelle,
     grow: 1.4,
     sortable: true,
    },
    {name: 'Coût',
     selector: row => row.cout,
     grow: 0.5,
     sortable: true,
    },
    {name: 'Détails',
    selector: row => row.details,
    grow: 1.6,
    minWidth: '190px',
    },
    {name: 'Action',
     selector: row => row.action,
     cell: (row, index, column, id) => { 
    return <div className="action-wrapper">
            <div className="flex gap-5 md:gap-8">
                <div>
                <i className="fa-solid fa-eye text-violet1 cursor-pointer" title="See"
                onClick={()=>{setCurrentItem({...row}); setModalSeeVisible(true);}}></i>
                </div>
                <div>
                <i className="fa-solid fa-pen-to-square text-violet1 cursor-pointer" title="Modifiy"
                onClick={()=>{setCurrentItem({...row}); setModalUpdateVisible(true);}}></i>
                </div>
                <div><i className="fa-solid fa-trash-can text-violet1 cursor-pointer" title="Delete"
                onClick={()=>{setCurrentItem({...row}); setModalDeleteVisible(true);}}></i></div>
                </div>
        </div>
    }
    },
];


  return (
    <DashboardLayout>
    <div id="VehicleOptionList" className="mt-12">
    <div className="title">
      <p className="m-text-bigger-normal uppercase w-full font-bold">
        Comfort option list
      </p>
      <p className="text-orange m-text-small mt-2 font-semibold">
        <Link href={dashboardUrl()} > Dashboard / </Link>
        <span>Comfort options</span>
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
          <span className="ml-1">New comfort option</span>
        </button>
      </div>
      <div className="table-container p-4 md:p-8">
        <div className=""><p className="font-semibold text-gray-600 mb-1">Comfort option list</p></div>
        <GenericTable data={vehicleOptions} columns={columns} />
      </div>
    </div>

    <VehicleOptionModal showModal={modalCreateVisible} setShowModal={setModalCreateVisible}
     runFunction={createVehicleOption} action="create" />

    {currentItem && (<>
    <VehicleOptionModal showModal={modalSeeVisible} setShowModal={setModalSeeVisible}
     runFunction={viewVehicleOption} action="see" item={currentItem} />

     <VehicleOptionModal showModal={modalUpdateVisible} setShowModal={setModalUpdateVisible}
     runFunction={updateVehicleOption} action="update" item={currentItem} />

     <DeleteModal showModal={modalDeleteVisible} setShowModal={setModalDeleteVisible}
     runFunction={deleteVehicleOption} item={currentItem} />
     </>
     )}
    
  </div>
    </DashboardLayout>
  )
}

export default VehicleOptions