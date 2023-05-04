import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import * as moment from 'moment';


const statusList = [{value: 'propriétaire', label: 'Propriétaire'}, {value: 'temporaire', label: 'Temporaire'}]
const dispoList = [{value: 'oui', label: 'Oui'}, {value: 'non', label: 'Non'}]

const defaultStatus = (status) => {if(!status) return null; return statusList.find(elt => elt.value === status)}
const defaultDispo = (dispo) => {if(!dispo) return null; return dispoList.find(elt => elt.value === dispo)}


const DriverModal = ({showModal, setShowModal, runFunction, action, item}) => {

  const [nom, setNom] = useState('')
  const [numCNI, setNumCNI] = useState('')
  const [numPermis, setNumPermis] = useState('')
  const [dateValiditePermis, setDateValiditePermis] = useState(moment().format('YYYY-MM-DD'))
  const [statut, setStatut] = useState(null)
  const [disponibilite, setDisponibilite] = useState(null)
  const [commentaire, setCommentaire] = useState('')
  const [photos, setPhotos] = useState([])

  const [image, setImage] = useState(null) // Le fichier qu'on va choisir avec le input
  const [createObjectURL, setCreateObjectURL] = useState(null) // l'url qu'on va créer à base de ce fichier


  //Validation de formulaire
  const formValid = nom.match(/[\w]{2,}/i) && numCNI.match(/[\w]{2,}/i) && numPermis.match(/[\w]{2,}/i) && 
   statut != null && disponibilite != null

  useEffect(()=>{  //This effect is used for see and update modal (item is not null)
    if(item){
      setNom(item.nom)
      setNumCNI(item.numCNI)
      setNumPermis(item.numPermis)
      setDateValiditePermis(item.dateValiditePermis)
      setStatut(item.statut)
      setDisponibilite(item.disponibilite)
      setCommentaire(item.commentaire)
      setPhotos(item.photos)
      if(item.photos.length > 0) setCreateObjectURL(item.photos[0])
      else setCreateObjectURL(null)
    }
  }, [item])

  const resetForm = ()=>{
      setNom('')
      setNumCNI('')
      setNumPermis('')
      setDateValiditePermis(moment().format('YYYY-MM-DD'))
      setStatut(null)
      setDisponibilite([])
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
    if(action === 'create') return 'New driver'
    if(action === 'see') return 'Driver view'
    if(action === 'update') return 'Update a driver'
  }

  const handleStatusChange = async (selected, selectaction) => {
    // const { action } = selectaction;
    setStatut(selected.value)
  }

  const handleDispoChange = async (selected, selectaction) => {
    // const { action } = selectaction;
    setDisponibilite(selected.value)
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
          <div className="w-2/3 sm:w-1/2 border-b border-violet1 text-violet1 px-2 py-2">Fill the form</div>
        </div>}
          <div className="mt-4">
            {createObjectURL && 
              <div className="photo w-full flex justify-center  max-h-96 overflow-auto">
                <img src={createObjectURL} alt="photo" />
              </div>
            }
            <div className="flex text-neutral-500 container-infos justify-between">
              <div className="flex flex-col">
                {action !== 'see' && <div className="py-4"><label htmlFor="photos">Photos</label></div>}
                <div className="py-4"><label htmlFor="nom">Nom</label></div>
                <div className="py-4"><label htmlFor="numCNI">N° CNI</label></div>
                <div className="py-4"><label htmlFor="numPermis">N° Permis</label></div>
                <div className="py-4"><label htmlFor="dateValiditePermis">Date validité permis</label></div>
                <div className="py-4"><label htmlFor="statut">Statut</label></div>
                <div className="py-4"><label htmlFor="disponibilite">Disponibilité</label></div>
                <div className="py-4"><label htmlFor="commentaire">Commentaire</label></div>
              </div>
              <div className="flex flex-col">
                {action !== 'see' && 
                  <div className="py-4">
                  <input type="file" id="photos" accept="image/*"  disabled={action==='see'}
                    onChange={(e)=>{uploadToClient(e)}}
                    className="
                      block  text-sm md:text-base input-lg
                      text-gray-700 border border-gray-200 pl-4 rounded-lg
                      focus:bg-white focus:outline-none focus:border-blue-400
                    "
                  />
                </div>
                }
                <div className="py-4">
                  <input type="text" id="nom" autoFocus={true} disabled={action==='see'}
                    value={nom}
                    onChange={(e)=>{setNom(e.currentTarget.value)}}
                    className="
                      block  text-sm md:text-base input-lg
                      text-gray-700 border border-gray-200 pl-4 rounded-lg
                      focus:bg-white focus:outline-none focus:border-blue-400
                    "
                  />
                </div>
                <div className="py-4">
                  <input type="text" id="numCNI"  disabled={action==='see'}
                    value={numCNI}
                    onChange={(e)=>{setNumCNI(e.currentTarget.value)}}
                    className="
                      block  text-sm md:text-base input-lg
                      text-gray-700 border border-gray-200 pl-4 rounded-lg
                      focus:bg-white focus:outline-none focus:border-blue-400
                    "
                  />
                </div>
                <div className="py-4">
                  <input type="text" id="numPermis"  disabled={action==='see'}
                    value={numPermis}
                    onChange={(e)=>{setNumPermis(e.currentTarget.value)}}
                    className="
                      block  text-sm md:text-base input-lg
                      text-gray-700 border border-gray-200 pl-4 rounded-lg
                      focus:bg-white focus:outline-none focus:border-blue-400
                    "
                  />
                </div>
                <div className="py-4">
                  <input type="date" id="dateValiditePermis"  disabled={action==='see'}
                    value={dateValiditePermis}
                    onChange={(e)=>{setDateValiditePermis(e.currentTarget.value)}}
                    className="
                      block  text-sm md:text-base input-lg
                      text-gray-700 border border-gray-200 pl-4 rounded-lg
                      focus:bg-white focus:outline-none focus:border-blue-400
                    "
                  />
                </div>
                <div className="py-4">
                  <Select isDisabled={action==='see'}
                    id="statut"
                    instanceId="statut"
                    name="statut"
                    classNamePrefix="select"
                    options={statusList}
                    value={defaultStatus(statut)}
                    onChange={handleStatusChange}
                    placeholder="Choose a type..."
                  />
                </div>
                <div className="py-4">
                  <Select isDisabled={action==='see'}
                    id="disponibilite"
                    instanceId="disponibilite"
                    name="disponibilite"
                    classNamePrefix="select"
                    options={dispoList}
                    value={defaultDispo(disponibilite)}
                    onChange={handleDispoChange}
                    placeholder="Choose elements..."
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

              </div>
            </div>
            
            <div className="flex justify-end">
              <button className={"btn-ok text-white mt-0 md:mt-2 " + (formValid ? " bg-violet1" : " disabled")} 
              disabled={!formValid}
              onClick={async ()=>{ let imagePath;
                if(image){ imagePath = await uploadToServer();}

                runFunction({id: item ? item.id : '', nom, numCNI, numPermis,
                                           dateValiditePermis, photos: imagePath ? [imagePath] : photos
                                          ,statut, disponibilite, commentaire});
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

export default DriverModal;