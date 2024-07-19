package com.backend_project.lake_side_view_hotel.service;

import com.backend_project.lake_side_view_hotel.model.Room;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;
import java.sql.SQLException;

public interface IRoomService {

    Room addNewRoom(MultipartFile photo, String roomType,
                    BigDecimal roomPrice) throws SQLException, IOException;
}
