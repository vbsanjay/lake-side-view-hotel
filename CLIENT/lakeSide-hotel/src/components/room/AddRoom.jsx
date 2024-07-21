import React, { useState } from "react";
import { addRoom } from "../utils/ApiFunctions";
import RoomTypeSelector from "../common/RoomTypeSelector";

/* Component declaration */
const AddRoom = () => {
    /* State initialization: State variable to hold some data */
    const [newRoom, setNewRoom] = useState({
		photo: null,
		roomType: "",
		roomPrice: ""
	})
    const[imagePreview, setImagePreview] = useState("")
    const[successMessage, setSuccessMessage] = useState("")
    const[errorMessage, setErrorMessage] = useState("")

    /* This function handles changes in input fields, with special logic for the room price */
    const handleRoomInputChange = (e) => {
        const name = e.target.name
        let value = e.target.value
        if(name === "roomPrice"){
            if(!isNaN(value)){
                value = parseInt(value)
            }
            else{
                value = ""
            }
        }
        setNewRoom({...newRoom, [name]: value})
    }

    /* This function handles changes in the image input, updating the newRoom state and creating an image preview. */
    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0]
        setNewRoom({...newRoom, photo: selectedImage})
        setImagePreview(URL.createObjectURL(selectedImage))
    }

    /* This asynchronous function handles form submission, calls the addRoom API function, and manages success/error messages. */
    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            const success = await addRoom(newRoom.photo, newRoom.roomType, newRoom.roomPrice)
            if(success !== undefined){
                setSuccessMessage("A new room was added to the database")
                setNewRoom({photo: null, roomType: "", roomPrice: ""})
                setImagePreview("")
                setErrorMessage("")
            }
            else{
                setErrorMessage("Error adding room")
            }
        }catch(error){
            setErrorMessage(error.message)
        }
        setTimeout(() => {
            setSuccessMessage("")
            setErrorMessage("")
        }, 3000)
    }

    /* Component render */
    return (
        <>
            <section className = "container, mt-5 mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <h2 className="mt-5 mb-2">Add New Room</h2>

                        {successMessage && (
                            <div className="alert alert-success fade show">
                                {successMessage}
                            </div>
                        )}

                        {errorMessage && (
                            <div className="alert alert-danger fade show">
                                {errorMessage}
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="roomType" className="form-label"> 
                                    Room Type
                                </label>
                                <div>
                                    <RoomTypeSelector 
                                    handleRoomInputChange={handleRoomInputChange} 
                                    newRoom={newRoom} />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="roomPrice" className="form-label"> 
                                    Room Price
                                </label>
                                <input 
                                    required 
                                    type="number"
                                    className="form-control" 
                                    id="roomPrice"
                                    name="roomPrice"
                                    value={newRoom.roomPrice}
                                    onChange={handleRoomInputChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="photo" className="form-label"> 
                                    Room Photo
                                </label>
                                <input 
                                className="form-control" 
                                required 
                                id="photo"
                                name="photo"
                                type="file"
                                onChange={handleImageChange}
                                />
                                {imagePreview && (
                                    <img src={imagePreview}
                                    alt="Preview Room Photo"
                                    style={{maxWidth: "400px", maxHeight: "400px"}}
                                    className="mb-3"/>
                                )}
                            </div>
                            
                            <div className="d-grid d-md-flex mt-2">
                                <button className="btn btn-outline-primary ml-5">
                                    Save Room
                                </button>
                            </div>

                        </form>

                    </div>
                </div>
            </section>
        </>
    )
}

/* This exports the AddRoom component so it can be used in other parts of the application. */
export default AddRoom