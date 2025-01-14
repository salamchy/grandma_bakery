import Button from "./Button"

const banner = () => {
  return (
    <div className="max-w-7xl py-5 mx-auto">
      <div>
        <div className="">
          <p className="flex items-center justify-center text-8xl tangerine mt-10">Enjoy fresh items of our <br /> Grandma’s Reciepe </p>
        </div>
      </div>
      <div>
        <Button text="See Menu" />
      </div>

    </div>
  )
}
export default banner