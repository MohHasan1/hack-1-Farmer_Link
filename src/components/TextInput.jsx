export const TextInput = ({name,placeholder}) => {
    return (
        <div className="flex justify-center ">
            <label className=" mb-5 w-[400px] input input-bordered flex items-center gap-2 ">
            <div className="font-bold">
            {name} -
            </div>

                <input type="text" className="grow" placeholder={placeholder} />
            </label>
           
        </div>
    )
}