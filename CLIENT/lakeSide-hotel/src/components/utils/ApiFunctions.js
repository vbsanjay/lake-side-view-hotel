/* this file contains functions that intracts with the backend server*/

/* This creates an axios instance with a base URL for all requests. */
import axios from "axios"

export const api = axios.create({
    baseURL: "http://localhost:9192"
})

/* 
- Creates a FormData object and appends the room details
- Sends a POST request to "/rooms/add/new-room" with the form data
- Returns true if the response status is 201 (Created), false otherwise 
*/
export async function addRoom(photo, roomType, roomPrice){
    const formData = new FormData()
    formData.append("photo", photo)
    formData.append("roomType", roomType)
    formData.append("roomPrice", roomPrice)

    const response = await api.post("/rooms/add/new-room", formData)
    if(response.status === 201){
        return true
    }else{
        return false
    }
}

/* 
- Sends a GET request to "/rooms/room/types"
- Returns the response data if successful
- Throws an error if there's a problem fetching room types
*/
export async function getRoomTypes(){
    try{
        const response = await api.get("/rooms/room/types")
        return response.data
    }catch(error){
        throw new Error("Error fetching room types")
    }
}

/*
This functions get all room from the database
*/
export async function getAllRooms(){
    try{
        const result = await api.get("/rooms/all-rooms")
        return result.data
    }
    catch(error){
        throw new Error("Error fetching rooms")
    }
}

/* This function deletes a room by the Id */
export async function deleteRoom(roomId){
    try{
        const result = await api.delete(`/rooms/delete/room/${roomId}`)
        return result.data
    }catch(error){
        throw new Error(`Error deleting room ${error.message}`)
    }
}
/*This function update a room by Id */
export async function updateRoom(roomId, roomData){
    const formData = new FormData()
    formData.append("roomType", roomData.roomType)
    formData.append("roomPrice", roomData.roomPrice)
    formData.append("photo", roomData.photo)

    const response = await api.put(`/rooms/update/${roomId}`, formData)
    return response
}

/*This function gets a room by Id */
export async function getRoomById(roomId){
    try{
        const result = await api.get(`/rooms/room/${roomId}`)
        return result.data
    }catch(error){
        throw new Error(`Error fetching room ${error.message}`)
    }
}