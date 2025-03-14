import FormMascota from "@/components/FormMascota"

export const RegistroMascota = () => {

    return (
        <main className='flex justify-center items-center flex-1'>
            <div className='bg-amber-200 border-3 min-w-[500px] border-blue-400 p-6 rounded-xl'>
                <h4 className='text-xl text-blue-700 font-bold'>Registro de Mascotas</h4>
                <FormMascota />
            </div>
        </main>
    )
}