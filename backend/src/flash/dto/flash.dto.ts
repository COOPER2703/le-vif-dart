export interface Flash {
    id: string,
    title: string,
    price: number,
    imageUrl: string
}

/* Flash CRUD */

export interface ReadFlash {
    id: string
}

export interface CreateFlash {
    title: string
    price: number
    imageUrl: string
}

export interface UpdateFlash {
    id: string
    title: string
    price: number
    imageUrl: string
}

export interface DeleteFlash {
    id: string
}