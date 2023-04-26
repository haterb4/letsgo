import React, { useEffect, useState } from 'react';
import vehicleoptionlist from '@/fakedata/vehicleoptionlist';
import vehicletypelist from '@/fakedata/vehicletypelist';
import Select from 'react-select';
import * as moment from 'moment';

const vOptionList = vehicleoptionlist.map((value) => {
  return {value: value.id, label: value.libelle}
})

const vTypeList = vehicletypelist.map((value) => {
  return {value: value.id, label: value.libelle}
})

const defaultType = (type) => {if(!type) return null; return {value: type.id, label: type.libelle}}
const defaultOption = (listeOptions) => {
  return listeOptions.map((value) => {
    return {value: value.id, label: value.libelle}
  })
}

const VehicleModal = ({showModal, setShowModal, runFunction, action, item}) => {

  const [immatriculation, setImmatriculation] = useState('')
  const [numChassis, setNumChassis] = useState('')
  const [numCarteGrise, setNumCarteGrise] = useState('')
  const [numAssurance, setNumAssurance] = useState('')
  const [dateValiditeAssurance, setDateValiditeAssurance] = useState(moment().format('YYYY-MM-DD'))
  const [marque, setMarque] = useState('')
  const [modele, setModele] = useState('')
  const [typeVehicule, setTypeVehicule] = useState(null)
  const [confort, setConfort] = useState([])
  const [capacite, setCapacite] = useState(1)
  const [commentaire, setCommentaire] = useState('')
  const [photos, setPhotos] = useState([])

  const [image, setImage] = useState(null) // Le fichier qu'on va choisir avec le input
  const [createObjectURL, setCreateObjectURL] = useState(null) // l'url qu'on va créer à base de ce fichier


  //Validation de formulaire
  const formValid = immatriculation.match(/[\w]{2,}/i) && numChassis.match(/[\w]{2,}/i) && numCarteGrise.match(/[\w]{2,}/i) && 
  numAssurance.match(/[\w]{2,}/i) && marque.match(/[\w]{2,}/i) && modele.match(/[\w]{2,}/i) && typeVehicule != null

  useEffect(()=>{  //This effect is used for see and update modal (item is not null)
    if(item){
      setImmatriculation(item.immatriculation)
      setNumChassis(item.numChassis)
      setNumCarteGrise(item.numCarteGrise)
      setNumAssurance(item.numAssurance)
      setDateValiditeAssurance(item.dateValiditeAssurance)
      setMarque(item.marque)
      setModele(item.modele)
      setTypeVehicule(item.typeVehicule)
      setConfort(item.confort)
      setCapacite(item.capacite)
      setCommentaire(item.commentaire)
      setPhotos(item.photos)
      if(item.photos.length > 0) setCreateObjectURL(item.photos[0])
      else setCreateObjectURL(null)
    }
  }, [item])

  const resetForm = ()=>{
      setImmatriculation('')
      setNumChassis('')
      setNumCarteGrise('')
      setNumAssurance('')
      setDateValiditeAssurance(moment().format('YYYY-MM-DD'))
      setMarque('')
      setModele('')
      setTypeVehicule(null)
      setConfort([])
      setCapacite(1)
      setCommentaire('')
      setPhotos([])
      setCreateObjectURL(null)
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
    if(action === 'create') return 'New vehicle'
    if(action === 'see') return 'Vehicle view'
    if(action === 'update') return 'Update a vehicle'
  }

  const handleTypeChange = async (selected, selectaction) => {
    // const { action } = selectaction;
    setTypeVehicule(vehicletypelist.find(value => value.id === selected.value))
  }

  const handleConfortChange = async (selected, selectaction) => {
    // const { action } = selectaction;
    let confortTab = []
    for(let conf of selected){
      confortTab.push(vehicleoptionlist.find(value => value.id === conf.value))
    }
    setConfort(confortTab)
  }

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0]

      setImage(i)
      setCreateObjectURL(URL.createObjectURL(i))
      return true
    }

    //setPhotos([]); setCreateObjectURL(null); setImage(null); //On retire la photo
    return false
  }

  const uploadToServer = async () => {        
    const body = new FormData()
    // console.log("file", image)
    body.append("file", image)
    const response = await fetch("/api/upload", {
      method: "POST",
      body
    })
    let data = await response.json()

    setPhotos([data.path])
    return data.path
  }

  // const uploadImage = (event) => { //Copie l'image dans le dossier public de next
  //   if(uploadToClient(event)) uploadToServer(event)
  // }


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
          <div className="modale large card text-sm sm:text-base px-3 md:px-6 py-5 sm:py-7 
          mx-2 md:mx-4 mt-3 md:mt-6 mb-2 md:mb-4">
        {action !== 'see' && 
          <div className="border-b border-gray-400">
          <div className="w-2/3 sm:w-1/2 border-b border-orange text-orange px-2 py-2">Fill the form</div>
        </div>}
          <div className="mt-4">
            <div className="flex text-neutral-500 container-infos justify-between">
              <div className="flex flex-col">
                <div className="py-4"><label htmlFor="immatriculation">Immatriculation</label></div>
                <div className="py-4"><label htmlFor="numChassis">Num. châssis</label></div>
                <div className="py-4"><label htmlFor="numCarteGrise">Num. garte girse</label></div>
                <div className="py-4"><label htmlFor="numAssurance">Num. assurance</label></div>
                <div className="py-4"><label htmlFor="dateValiditeAssurance">Date validité assurance</label></div>
                <div className="py-4"><label htmlFor="marque">Marque</label></div>
                <div className="py-4"><label htmlFor="modele">Modele</label></div>
                <div className="py-4"><label htmlFor="typeVehicule">Type de véhicule</label></div>
                <div className="py-4"><label className="input-large" htmlFor="confort">Confort</label></div>
                <div className="py-4"><label htmlFor="capacite">Nbr. de places</label></div>
                <div className="py-4"><label htmlFor="commentaire">Commentaire</label></div>
                <div className="py-4"><label htmlFor="photos">Photos</label></div>
              </div>
              <div className="flex flex-col">
                <div className="py-4">
                  <input type="text" id="immatriculation" autoFocus={true} disabled={action==='see'}
                    value={immatriculation}
                    onChange={(e)=>{setImmatriculation(e.currentTarget.value)}}
                    className="
                      block  text-sm md:text-base input-lg
                      text-gray-700 border border-gray-200 pl-4 rounded-lg
                      focus:bg-white focus:outline-none focus:border-blue-400
                    "
                  />
                </div>
                <div className="py-4">
                  <input type="text" id="numChassis"  disabled={action==='see'}
                    value={numChassis}
                    onChange={(e)=>{setNumChassis(e.currentTarget.value)}}
                    className="
                      block  text-sm md:text-base input-lg
                      text-gray-700 border border-gray-200 pl-4 rounded-lg
                      focus:bg-white focus:outline-none focus:border-blue-400
                    "
                  />
                </div>
                <div className="py-4">
                  <input type="text" id="numCarteGrise"  disabled={action==='see'}
                    value={numCarteGrise}
                    onChange={(e)=>{setNumCarteGrise(e.currentTarget.value)}}
                    className="
                      block  text-sm md:text-base input-lg
                      text-gray-700 border border-gray-200 pl-4 rounded-lg
                      focus:bg-white focus:outline-none focus:border-blue-400
                    "
                  />
                </div>
                <div className="py-4">
                  <input type="text" id="numAssurance"  disabled={action==='see'}
                    value={numAssurance}
                    onChange={(e)=>{setNumAssurance(e.currentTarget.value)}}
                    className="
                      block  text-sm md:text-base input-lg
                      text-gray-700 border border-gray-200 pl-4 rounded-lg
                      focus:bg-white focus:outline-none focus:border-blue-400
                    "
                  />
                </div>
                <div className="py-4">
                  <input type="date" id="dateValiditeAssurance"  disabled={action==='see'}
                    value={dateValiditeAssurance}
                    onChange={(e)=>{setDateValiditeAssurance(e.currentTarget.value)}}
                    className="
                      block  text-sm md:text-base input-lg
                      text-gray-700 border border-gray-200 pl-4 rounded-lg
                      focus:bg-white focus:outline-none focus:border-blue-400
                    "
                  />
                </div>
                <div className="py-4">
                  <input type="text" id="marque"  disabled={action==='see'}
                    value={marque}
                    onChange={(e)=>{setMarque(e.currentTarget.value)}}
                    className="
                      block  text-sm md:text-base input-lg
                      text-gray-700 border border-gray-200 pl-4 rounded-lg
                      focus:bg-white focus:outline-none focus:border-blue-400
                    "
                  />
                </div>
                <div className="py-4">
                  <input type="text" id="modele"  disabled={action==='see'}
                    value={modele}
                    onChange={(e)=>{setModele(e.currentTarget.value)}}
                    className="
                      block  text-sm md:text-base input-lg
                      text-gray-700 border border-gray-200 pl-4 rounded-lg
                      focus:bg-white focus:outline-none focus:border-blue-400
                    "
                  />
                </div>
                <div className="py-4">
                  <Select isDisabled={action==='see'} 
                    id="typeVehicule"
                    instanceId="typeVehicule"
                    name="typeVehicule"
                    classNamePrefix="select"
                    options={vTypeList}
                    value={defaultType(typeVehicule)}
                    onChange={handleTypeChange}
                    placeholder="Choose a type..."
                  />
                </div>
                <div className="py-4">
                  <Select isDisabled={action==='see'} 
                    id="confort"
                    instanceId="confort"
                    isMulti
                    name="confort"
                    classNamePrefix="select"
                    options={vOptionList}
                    value={defaultOption(confort)}
                    onChange={handleConfortChange}
                    placeholder="Choose elements..."
                  />
                </div>
                <div className="py-4">
                  <input type="number" id="capacite" min={1} disabled={action==='see'}
                    value={capacite}
                    onChange={(e)=>{setCapacite(Math.abs(e.currentTarget.value))}}
                    className="
                      block  text-sm md:text-base input-lg
                      text-gray-700 border border-gray-200 pl-4 rounded-lg
                      focus:bg-white focus:outline-none focus:border-blue-400
                    "
                  />
                </div>
                <div className="py-4">
                  <input type="text" id="commentaire" disabled={action==='see'}
                    value={commentaire}
                    onChange={(e)=>{setCommentaire(e.currentTarget.value)}}
                    className="
                      block  text-sm md:text-base input-lg
                      text-gray-700 border border-gray-200 pl-4 rounded-lg
                      focus:bg-white focus:outline-none focus:border-blue-400
                    "
                  />
                </div>
                <div className="py-4">
                  <input type="file" id="photos"  disabled={action==='see'}
                    onChange={(e)=>{uploadToClient(e)}}
                    className="
                      block  text-sm md:text-base input-lg
                      text-gray-700 border border-gray-200 pl-4 rounded-lg
                      focus:bg-white focus:outline-none focus:border-blue-400
                    "
                  />
                </div>

              </div>
            </div>
            {createObjectURL && 
              <div className="photo w-full flex justify-center overflow-auto">
                <img src={createObjectURL} alt="photo" />
              </div>
            }
            <div className="flex justify-end">
              <button className={"btn-ok text-white mt-0 md:mt-2 " + (formValid ? " gradient-orange" : " disabled")} 
              disabled={!formValid}
              onClick={async ()=>{ let imagePath;
                if(image){ imagePath = await uploadToServer();}

                runFunction({id: item ? item.id : '', immatriculation, numChassis, numCarteGrise,
                                          numAssurance, dateValiditeAssurance, photos: imagePath ? [imagePath] : photos
                                          , marque, modele, typeVehicule, 
                                          confort, capacite, commentaire});
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

export default VehicleModal;