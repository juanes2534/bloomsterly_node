import { Link } from "react-router-dom"

export function SubCategoriaCard({id, idCategoria, nombre, imagen}){
    console.log({id, idCategoria})

    return (
        <Link to={`/subCategorias/${nombre}`} className="bg-white dark:bg-[#ebd1b8] h-44 w-full sm:w-1/2 transition-all hover:scale-105">
            <div className="bg-black h-2/3">
                <img src={imagen} alt="" />
            </div>
            <div className="flex items-center h-1/3 px-2">
                <h1 className="font-title italic font-bold text-dark_theme dark:text-second_color_lt text-xl">{nombre}</h1>
            </div>
        </Link>
    )
}