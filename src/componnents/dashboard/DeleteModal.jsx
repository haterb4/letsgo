import React from 'react';

const DeleteModal = ({showModal, setShowModal, runFunction, item}) => {

  const closeModal = ()=>{
    setShowModal(false)
  }
  

    return (
      showModal && 
      <div id="DeleteModal"
      className="bloc-modale flex fixed z-50 justify-center items-center"
      >
      <div className="overlay" onClick={closeModal}></div>

      <div className="modale card parent fixed text-center w-72 sm:w-80 lg:w-96 px-0 py-7 sm:py-10 lg:py-12">
        <div><i className="fa-solid fa-circle-exclamation text-orange fa-2xl"></i></div>
        <div className="mt-4"><p className="m-text-normal">Are you sure?</p></div>
        <div className="mt-2 m-text-extrasmall"><p className="text-gray-500">You won't be able to revert this!</p></div>
        <div className="flex mt-4 w-full justify-around place-items-center">
          <div>
            <button className="btn-ok text-white " onClick={()=>{runFunction(item);
                            closeModal();}}>Yes, delete it!</button>
          </div>
          <div><button className="btn-cancel bg-white" onClick={closeModal}>Cancel</button></div>
        </div>
        <div onClick={closeModal} className="btn-modale btn btn-danger cursor-pointer">
            <i className="fa-solid fa-xmark md:text-xl"></i>
        </div>
      </div>
    </div>
    );
};

export default DeleteModal;