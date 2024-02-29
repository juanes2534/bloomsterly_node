
import { ButtonNav } from "./buttons/buttonNav";

export function Header() {


    return (
        <div>
            <nav className="flex bg-dark_theme h-16 justify-between items-center p-4 shadow-lg shadow-purple-900 
            dark:bg-nav_light_theme dark:shadow-light_theme">
                <img src="" alt="logo_bloomsterly" className=" text-white bg-transparent hover:bg-purple-900 px-3 py-1 rounded-lg" />
                <div className="flex gap-4 ">

                    <ButtonNav text='Nosotros' />
                    <ButtonNav text='Servicios' href='/servicios'/>
                    <ButtonNav text='Pedidos' href='/pedidos '/>

                </div>
               
                <ButtonNav href='/login' text='Iniciar sesion' />
                
            </nav>
            <div>
                <img
                    className='aspect-auto w-full -mt-12 '
                    src="../src/assets/img/luces_dark_theme.png"
                    alt="luces portada"
                />
            </div>
        </div>
    )
}

//Para evitar la redundancia se componetiza en ./buttons/buttonNav