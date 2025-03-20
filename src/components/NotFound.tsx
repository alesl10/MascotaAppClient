
const NotFound = () => {
  return (
    <div className="flex flex-col flex-1 max-h-svh" style={{backgroundImage:`URL('/notFound.png')`, backgroundRepeat:'no-repeat', backgroundPosition:'center'}}>
        <span className="text-8xl text-red-800 text-center">404</span>
        <span className="text-4xl text-primary text-center">Oops... La pagina no existe!</span>
    </div>
  )
}

export default NotFound