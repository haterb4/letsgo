import React, { useEffect, useState } from 'react';

const VehicleTypeModal = ({showModal, setShowModal, runFunction, action, item}) => {

  const [libelle, setLibelle] = useState('')
  const [details, setDetails] = useState('')

  const formValid = libelle.match(/[a-z]{2,}/i)

  useEffect(()=>{  //This effect is used for see and update modal (item is not null)
    if(item){
      setLibelle(item.libelle)
      setDetails(item.details)
    }
  }, [item])

  const resetForm = ()=>{
    setLibelle('')
    setDetails('')
  }
  const closeModal = ()=>{
    if(action === 'create') resetForm()
    setShowModal(false)
  }
  
  const buttonText = ()=>{
    if(action === 'create') return 'Create'
    if(action === 'see') return 'OK'
    if(action === 'update') return 'Update'
  }

  const titre = ()=>{
    if(action === 'create') return 'New vehicle type'
    if(action === 'see') return 'Vehicle type view'
    if(action === 'update') return 'Update a vehicle type'
  }


    return (
      showModal && 
      <div id="GenericModal"
      className="bloc-modale flex fixed z-50 justify-center items-center" 
      >
      <div className="overlay" onClick={closeModal}></div>
      <div className="parent fixed">
        <div className="haut bg-white flex justify-between place-items-center font-bold py-1 sm:py-2 pl-4">
          <div>{titre()}</div>
          <div onClick={closeModal} className="btn-modale btn btn-danger cursor-pointer
          flex place-items-center">
            <i className="block fa-solid fa-xmark md:text-xl mr-3"></i>
        </div>
          </div>
              <div className="bg-gray-50 border">
          <div className="modale card text-sm sm:text-base px-3 md:px-6 py-5 sm:py-7 
          mx-2 md:mx-4 mt-3 md:mt-6 mb-2 md:mb-4">
        {action !== 'see' && 
          <div className="border-b border-gray-400">
          <div className="w-2/3 sm:w-1/2 border-b border-violet1 text-violet1 px-2 py-2">Fill the form</div>
        </div>}
          <div className="mt-4">
            <div className="flex text-neutral-500 container-infos justify-between">
              <div className="flex flex-col">
                <div className="py-4"><p>Libellé</p></div>
                <div className="py-4"><p>Détails</p></div>
              </div>
              <div className="flex flex-col">
                <div className="py-4">
                  <input autoFocus={true} disabled={action==='see'}
                    value={libelle}
                    onChange={(e)=>{setLibelle(e.currentTarget.value)}}
                    className="
                      block  text-sm md:text-base input-lg
                      text-gray-700 border border-gray-200 pl-4 rounded-lg
                      focus:bg-white focus:outline-none focus:border-blue-400
                    "
                  />
                </div>
                <div className="py-4">
                  <input disabled={action==='see'}
                    value={details}
                    onChange={(e)=>{setDetails(e.currentTarget.value)}}
                    className="
                      block text-sm md:text-base input-lg
                      text-gray-700 border border-gray-200 pl-4 rounded-lg
                      focus:bg-white focus:outline-none focus:border-blue-400
                    "
                  />
                </div>

              </div>
            </div>
            <div className="flex justify-end">
              <button className={"btn-ok text-white mt-0 md:mt-2 " + (formValid ? " bg-violet1" : " disabled")} 
              disabled={!formValid}
              onClick={()=>{runFunction({id: item ? item.id : '', libelle, details});
                            closeModal();}}
              >
                {action === 'create' && <i className="fa-solid fa-circle-plus mr-3"></i>}
                <span>{buttonText()}</span>
              </button>
            </div>
          </div>
      </div>
      </div>
        <div className="bas bg-white flex justify-end py-1 md:py-3 pr-10">
        <button className="btn-close bg-gray-600 text-white px-4 py-1 rounded-md text-sm md:text-base" 
        onClick={closeModal}>
          Close
        </button>
      </div>
      </div>
    </div>
    );
};

export default VehicleTypeModal;