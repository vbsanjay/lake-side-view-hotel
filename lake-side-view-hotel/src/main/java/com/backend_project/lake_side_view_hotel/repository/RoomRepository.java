package com.backend_project.lake_side_view_hotel.repository;

import com.backend_project.lake_side_view_hotel.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room, Long> {
}
