import withServicios from '../../db/servicios.json'

export const useServicios = () =>{
    const servicios = withServicios.servicios

    const mappedServicios = servicios?.map(servicio => ({
        id: servicio.id, 
        nombre: servicio.nombre,
        descripcion: servicio.descripcion,
        valor: servicio.valor,
        idEmpresa: servicio.id_empresa,
        idSubCategoria: servicio.id_subCategoria
    }))

    return { servicios : mappedServicios }
}