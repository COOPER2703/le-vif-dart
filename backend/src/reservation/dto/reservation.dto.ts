import { Flash } from "src/flash/dto/flash.dto"
import { User } from "src/user/dto/user.dto"

export interface Reservation {
    id: string
    user: User
    startDate: Date
    endDate: Date
    flash: Flash
}

/* Reservation CRUD */

export interface ReadReservation {
    id: string
}

export interface CreateReservation {
    user_id: string
    startDate: Date
    endDate: Date
    flash_id: string
}

export interface UpdateReservation {
    id: string
    user_id: string
    startDate: Date
    endDate: Date
    flash_id: string
}

export interface DeleteReservation {
    id: string
}