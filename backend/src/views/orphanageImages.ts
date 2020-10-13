import OrphanageImage from "../entities/OrphanageImage"

export default {
    render(image: OrphanageImage){
        return {
            id: image.id,
            path: image.path,
            url: `${process.env.APP_URL}/uploads/${image.path}`
        }
    },

    renderMany(images: OrphanageImage[]){
        return images.map( (image) => this.render(image));
    }
}
