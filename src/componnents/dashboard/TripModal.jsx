import React, { useEffect, useState } from 'react';

const TripModal = ({showModal, setShowModal, runFunction, action, item}) => {

  const [departure, setDeparture] = useState('')
  const [arrival, setArrival] = useState('')
  const [status, setStatus] = useState('')

  const formValid = status !== '' && departure.match(/[a-z]{2,}/i) &&  arrival.match(/[a-z]{2,}/i)

  useEffect(()=>{  //This effect is used for see and update modal (item is not null)
    if(item){
      setDeparture(item.trajet.split(' - ')[0])
      setArrival(item.trajet.split(' - ')[1])
      setStatus(item.statut)
    }
  }, [item])

  const resetForm = ()=>{
    setDeparture('')
    setArrival('')
    setStatus('')
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
    if(action === 'create') return 'New trip'
    if(action === 'see') return 'Trip view'
    if(action === 'update') return 'Update a trip'
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
          <div className="w-2/3 sm:w-1/2 border-b border-orange text-orange px-2 py-2">Fill the form</div>
        </div>}
          <div className="mt-4">
            <div className="flex text-neutral-500 container-infos justify-between">
              <div className="flex flex-col">
                <div className="py-4"><p>Departure town</p></div>
                <div className="py-4"><p>Arrival town</p></div>
                <div className="py-4"><p>Status</p></div>
              </div>
              <div className="flex flex-col">
                <div className="py-4">
                  <input autoFocus={true} disabled={action==='see'}
                    value={departure}
                    onChange={(e)=>{setDeparture(e.currentTarget.value)}}
                    className="
                      block  text-sm md:text-base input-lg
                      text-gray-700 border border-gray-200 pl-4 rounded-lg
                      focus:bg-white focus:outline-none focus:border-blue-400
                    "
                  />
                </div>
                <div className="py-4">
                  <input disabled={action==='see'}
                    value={arrival}
                    onChange={(e)=>{setArrival(e.currentTarget.value)}}
                    className="
                      block text-sm md:text-base input-lg
                      text-gray-700 border border-gray-200 pl-4 rounded-lg
                      focus:bg-white focus:outline-none focus:border-blue-400
                    "
                  />
                </div>
                <div className="py-4">

                  <select value={status}  disabled={action==='see'} 
                    onChange={(e)=>{setStatus(e.currentTarget.value)}}
                  className="
                      block text-sm md:text-base input-lg
                      text-gray-700 border border-gray-200 pl-4 rounded-lg
                      focus:bg-white focus:outline-none focus:border-blue-400
                    "
                  >
                    <option disabled value="">Please select one</option>
                    <option value="Start">Start</option>
                    <option value="Running">Running</option>
                    <option value="End">End</option>
                    <option value="Private">Private</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button className={"btn-ok text-white mt-0 md:mt-2 " + (formValid ? " gradient-orange" : " disabled")} 
              disabled={!formValid}
              onClick={()=>{runFunction({trajet: `${departure} - ${arrival}`, 
              datecreation: action==='create' ? Date.now() : item.datecreation, 
              statut: status,
             id: item ? item.id : -1});
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

export default TripModal;