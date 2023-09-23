import './spinner.css'

export default function Spinner() {
  return (
    <div className='h-full flex items-center justify-center'>
      <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}
