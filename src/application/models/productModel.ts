export class ProductModel {
    id: number
    title: string
    userId: number
    avatar: string
    body: string

    constructor(id: number, title: string, userId: number, avatar: string, body: string,) {
        this.id         = id
        this.title      = title
        this.userId     = userId
        this.avatar     = avatar
        this.body       = body
    }
}