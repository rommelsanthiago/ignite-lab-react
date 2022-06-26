import { LogoFooter } from './LogoFooter';

export const Footer = ({ variant }: any) => {

    if (variant == "secondary") {
        return (
            <footer className="w-full bg-gray-900">
                <div className='flex items-center mx-8 mb-5 mt-6 sm:flex-col sm:gap-6'>
                    <LogoFooter />
                    <div className='flex justify-between w-full lg:flex-col text-center gap-6'>
                        <p className='text-gray-300'>Rocketseat - Todos os direitos reservados</p>
                        <a href="" className='text-gray-300'>Políticas de privacidade</a>
                    </div>
                </div>
            </footer>
        )
    }

    return (
        <footer className="max-w-[1100px] mx-auto">
            <div className='flex items-center mx-8 mb-5 mt-14 pt-6 border-t border-gray-500 sm:flex-col sm:gap-6 sm:mt-16'>
                <LogoFooter />
                <div className='flex justify-between w-full sm:flex-col sm:text-center sm:gap-6'>
                    <p className='text-gray-300'>Rocketseat - Todos os direitos reservados</p>
                    <a href="" className='text-gray-300'>Políticas de privacidade</a>
                </div>
            </div>
        </footer>
    )
}