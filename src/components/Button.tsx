export const Button = ({ variant, icon, text }: any) => {

    const primary = "bg-green-500 hover:bg-green-700"
    const secondary = "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-gray-500"

    return (
        <a href="" className={`p-4 text-sm flex items-center rounded font-bold uppercase gap-2 justify-center transition-colors ${variant == "primary" ? primary : variant == "secondary" ? secondary : ""} sm:w-full`}>
            {icon}
            {text}
        </a>
    )
}