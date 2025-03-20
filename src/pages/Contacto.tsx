import { FormEvent, useRef } from "react"
import { FaMailBulk } from "react-icons/fa";
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'

export const Contacto = () => {
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (!form.current) return;
    emailjs
      .sendForm('service_sfl0dpb', 'template_ypr8pr1', form.current, 'Uz1PxRjY_kwdr19gN')
      .then(
        () => {
          console.log('SUCCESS!');
          Swal.fire({
            title: "Mensaje Enviado!",
            icon: "success",
            draggable: true
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo salio mal!",
          });
        },
      );
    form.current.reset()
  };

  return (
    <section className=" container m-auto flex flex-col items-center ">
      <h2 className="text-[6rem] font-bold text-primary/50  ">CONTACTO</h2>
      <div className=" container  flex items-center justify-center relative">

        <div className="flex gap-4 w-[50%] flex-col">
          <form className="relative flex flex-col" ref={form} onSubmit={sendEmail}>
            <FaMailBulk className="absolute size-8 right-0 -top-4" />
            <label className="text-primary font-semibold text-xl">Nombre</label>
            <input className="bg-gray-200 text-black border rounded-lg border-primary/80 px-2 py-1" type="text" name="user_name" />
            <label className="text-primary font-semibold text-xl">Email</label>
            <input className="bg-gray-200 text-black border rounded-lg border-primary/80 px-2 py-1" type="email" name="user_email" />
            <label className="text-primary font-semibold text-xl">Mensaje</label>
            <textarea className="bg-gray-200 text-black  rounded-lg border border-primary/80px-2 py-1" name="message" />
            <button type="submit" className="px-2 p-y1 border text-white border-white m-auto rounded-md my-2 hover:bg-gray-100 cursor-pointer hover:text-black transition-all duration-300">Enviar</button>
          </form>
        </div>

        <img src="/perro.png" alt="" className="w-1/3 sombra  " />

      </div>
    </section>

  )
}
