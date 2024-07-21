package com.backend_project.lake_side_view_hotel.service;

import com.backend_project.lake_side_view_hotel.model.Room;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;
import java.sql.SQLException;
import java.util.List;

public interface IRoomService {

    Room addNewRoom(MultipartFile photo, String roomType,
                    BigDecimal roomPrice) throws SQLException, IOException;

    List<String> getAllRoomTypes();

    List<Room> getAllRooms();

    byte[] getRoomPhotoByRoomID(Long roomId) throws SQLException;

    void deleteRoom(Long roomId);
}
