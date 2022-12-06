import Head from "next/head";
import Link from "next/link";


const Register = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const user = { name, email, password }
    console.log(user)

  }
  return <>
    <Head>
      <title>Register</title>
    </Head>
    <div className="" >
      <div className="flex items-center justify-center min-h-screen py-10 " >
        <form onSubmit={handleSubmit} className=" bg-gray-900 w-80 p-6 border-t-8 border-t-indigo-500 rounded-lg" >
          <h2 className="text-center font-bold text-2xl" > Register </h2>
          <div className="flex flex-col mt-3" >
            <label htmlFor="name" > Name </label>
            <input className="input-style" type="text" name="name" id="name" placeholder="Mesut Özil" required />
            {/* <span className="text-red-500">{errors.name}</span> */}
          </div>
          <div className="flex flex-col mt-3" >
            <label htmlFor="email"> Email </label>
            <input className="input-style appearance-none " autoComplete="true" autoCorrect="true" type="email" name="email" id="email" placeholder="example@email.com" required />
            {/* <span className="text-red-500">{errors.email}</span> */}
          </div>
          <div className="flex flex-col mt-3 relative" >
            <label htmlFor="password" > Password </label>
            <input className="input-style pr-10" autoComplete="true" autoCorrect="true" type="password" name="password" id="password" placeholder="●●●●●●●●●●●●" required />
            {/* <span className="absolute cursor-pointer top-7 right-0 p-1 px-2 text-gray-400" onClick={(e) => { e.preventDefault(); setVisible(!visible) }}>{visible ? <Icon.eye /> : <Icon.eyeAlt />}</span> */}
            {/* <span className="text-red-500">{errors.password}</span> */}
          </div>
          <button type="submit" className="py-2 px-4 w-full mt-6 rounded bg-indigo-500 font-bold">Register </button>
          <div className="mt-4 text-sm">Have an account? <Link className="text-indigo-400" href="/login">Login Now </Link> </div>
        </form>
      </div>
    </div>
  </>
}
export default Register;