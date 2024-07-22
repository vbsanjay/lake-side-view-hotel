package com.backend_project.lake_side_view_hotel.service;

import com.backend_project.lake_side_view_hotel.model.BookedRoom;

import java.util.List;


public interface IBookingService {
    List<BookedRoom> getAllBookings();

    BookedRoom findByBookingConfirmationCode(String confirmationCode);

    String saveBooking(Long roomId, BookedRoom bookingRequest);

    void cancelBooking(Long bookingId);
}
